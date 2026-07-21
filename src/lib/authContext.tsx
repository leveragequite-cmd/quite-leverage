import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';
import { auth, isFirebaseConfigured } from './firebase';

export interface UserSession {
  uid: string;
  email: string | null;
  role: 'client' | 'admin';
}

interface AuthContextType {
  user: UserSession | null;
  isLoading: boolean;
  isFirebase: boolean;
  login: (email: string, password: string, role: 'client' | 'admin') => Promise<void>;
  register: (email: string, password: string, role: 'client' | 'admin') => Promise<void>;
  loginWithGoogle: (role: 'client' | 'admin') => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Helper keys for local storage
const LOCAL_ROLES_KEY = 'quite-leverage-user-roles';
const MOCK_USERS_KEY = 'quite-leverage-mock-users';
const MOCK_SESSION_KEY = 'quite-leverage-mock-session';
const PENDING_ROLE_KEY = 'quite-leverage-pending-role';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Helper to get role for an email/UID
  const getUserRole = (id: string, selectedRole: 'client' | 'admin'): 'client' | 'admin' => {
    try {
      const roles = JSON.parse(localStorage.getItem(LOCAL_ROLES_KEY) || '{}');
      if (roles[id]) return roles[id];
      // Save it if it doesn't exist
      roles[id] = selectedRole;
      localStorage.setItem(LOCAL_ROLES_KEY, JSON.stringify(roles));
      return selectedRole;
    } catch {
      return selectedRole;
    }
  };

  // Helper to save a role for an email/UID
  const saveUserRole = (id: string, role: 'client' | 'admin') => {
    try {
      const roles = JSON.parse(localStorage.getItem(LOCAL_ROLES_KEY) || '{}');
      roles[id] = role;
      localStorage.setItem(LOCAL_ROLES_KEY, JSON.stringify(roles));
    } catch (e) {
      console.error('Failed to save user role map', e);
    }
  };

  // 1. Listen to real Firebase state changes
  useEffect(() => {
    if (!isFirebaseConfigured || !auth) {
      // Load mock session if running in mock mode
      try {
        const savedSession = localStorage.getItem(MOCK_SESSION_KEY);
        if (savedSession) {
          setUser(JSON.parse(savedSession));
        }
      } catch (e) {
        console.error('Mock session load error', e);
      }
      setIsLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        // Retrieve any pending role from user login action selection
        const pendingRole = localStorage.getItem(PENDING_ROLE_KEY) as 'client' | 'admin' | null;
        
        // Find default role selection
        const defaultRole = pendingRole || (firebaseUser.email?.includes('admin') ? 'admin' : 'client');
        const mappedRole = getUserRole(firebaseUser.uid, defaultRole);
        
        if (pendingRole) {
          localStorage.removeItem(PENDING_ROLE_KEY);
        }

        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          role: mappedRole
        });
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  // 2. Auth Actions
  const login = async (email: string, password: string, role: 'client' | 'admin') => {
    setIsLoading(true);
    localStorage.setItem(PENDING_ROLE_KEY, role);
    try {
      if (isFirebaseConfigured && auth) {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        saveUserRole(userCredential.user.uid, role);
        setUser({
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          role
        });
      } else {
        // Mock authentication simulation logic
        await new Promise((res) => setTimeout(res, 800));
        const mockUsers = JSON.parse(localStorage.getItem(MOCK_USERS_KEY) || '[]');
        const existingUser = mockUsers.find((u: any) => u.email === email && u.password === password);
        
        if (!existingUser) {
          throw new Error('Invalid credentials. Check your email and password or Sign Up.');
        }

        saveUserRole(existingUser.uid, role);
        const session: UserSession = {
          uid: existingUser.uid,
          email,
          role
        };
        localStorage.setItem(MOCK_SESSION_KEY, JSON.stringify(session));
        setUser(session);
      }
      localStorage.removeItem(PENDING_ROLE_KEY);
    } catch (e) {
      localStorage.removeItem(PENDING_ROLE_KEY);
      throw e;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email: string, password: string, role: 'client' | 'admin') => {
    setIsLoading(true);
    localStorage.setItem(PENDING_ROLE_KEY, role);
    try {
      if (isFirebaseConfigured && auth) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        saveUserRole(userCredential.user.uid, role);
        setUser({
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          role
        });
      } else {
        // Mock registration simulation
        await new Promise((res) => setTimeout(res, 800));
        const mockUsers = JSON.parse(localStorage.getItem(MOCK_USERS_KEY) || '[]');
        const userExists = mockUsers.some((u: any) => u.email === email);
        
        if (userExists) {
          throw new Error('User already exists with this email address.');
        }

        const newUid = 'mock-uid-' + Math.random().toString(36).substr(2, 9);
        mockUsers.push({ uid: newUid, email, password });
        localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(mockUsers));
        
        saveUserRole(newUid, role);
        const session: UserSession = {
          uid: newUid,
          email,
          role
        };
        localStorage.setItem(MOCK_SESSION_KEY, JSON.stringify(session));
        setUser(session);
      }
      localStorage.removeItem(PENDING_ROLE_KEY);
    } catch (e) {
      localStorage.removeItem(PENDING_ROLE_KEY);
      throw e;
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGoogle = async (role: 'client' | 'admin') => {
    setIsLoading(true);
    localStorage.setItem(PENDING_ROLE_KEY, role);
    try {
      if (isFirebaseConfigured && auth) {
        const provider = new GoogleAuthProvider();
        const userCredential = await signInWithPopup(auth, provider);
        saveUserRole(userCredential.user.uid, role);
        setUser({
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          role
        });
      } else {
        // Mock Google login
        await new Promise((res) => setTimeout(res, 1000));
        const mockUid = 'mock-google-uid-' + Math.random().toString(36).substr(2, 9);
        saveUserRole(mockUid, role);
        const session: UserSession = {
          uid: mockUid,
          email: 'google-collaborator@gmail.com',
          role
        };
        localStorage.setItem(MOCK_SESSION_KEY, JSON.stringify(session));
        setUser(session);
      }
      localStorage.removeItem(PENDING_ROLE_KEY);
    } catch (e) {
      localStorage.removeItem(PENDING_ROLE_KEY);
      throw e;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      if (isFirebaseConfigured && auth) {
        await signOut(auth);
      } else {
        localStorage.removeItem(MOCK_SESSION_KEY);
      }
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isFirebase: isFirebaseConfigured,
        login,
        register,
        loginWithGoogle,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
