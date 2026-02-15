import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <div className="pt-[30px]">
        <ContactSection />
      </div>
    </div>
  );
};

export default ContactPage;
