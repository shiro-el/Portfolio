import { Metadata } from 'next';
import { ContactSection } from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Contact | Jae Lee',
  description: 'Get in touch with Jae Lee for web development projects, collaborations, or just to say hello. Available for freelance work and new opportunities.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Get In Touch
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind or just want to chat? I&apos;d love to hear from you. 
          Send me a message and I&apos;ll get back to you as soon as possible.
        </p>
      </div>
      
      <ContactSection />
    </div>
  );
}