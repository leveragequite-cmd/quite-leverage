import PricingSection from '../components/PricingSection';
import ContactForm from '../components/ContactForm';
import DiscussionGraphic from '../components/DiscussionGraphic';

export default function Discuss() {
  return (
    <main className="min-h-screen pt-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto pt-8">
        <DiscussionGraphic />
      </div>
      <PricingSection />
      <ContactForm />
    </main>
  );
}
