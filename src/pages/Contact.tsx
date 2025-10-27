import { useState } from "react";
import { send } from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Twitter } from "lucide-react";
import TikTok from "@/components/ui/tiktok";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    // Prefer sending via EmailJS (client-side) if environment variables are set.
    // Set these in your Vite env (.env) as VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | service_fej6fsm;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | template_o6q2ld7;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | vLs5Pz2HbG5N_yUq8;

    const templateParams = {
      name,
      email,
      phone,
      message,
    };

    if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
      try {
        await send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
        toast({ title: "Message Sent!", description: "We'll get back to you as soon as possible." });
        setFormData({ name: "", email: "", phone: "", message: "" });
        return;
      } catch (err) {
        // if EmailJS fails, fall back to mailto
        console.error('EmailJS send error:', err);
        toast({ title: "Send failed", description: "Could not send via EmailJS, opening email client as fallback." });
      }
    }

    // Fallback: open the user's mail client with prefilled message
    const emailSubject = encodeURIComponent(`Enquiry from ${name}`);
    const emailBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`);
    const emailUrl = `mailto:alphawrightsltd@outlook.com?subject=${emailSubject}&body=${emailBody}`;
    window.open(emailUrl, '_blank');

    toast({ title: "Message Sent", description: "Opened your email client to send the enquiry." });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-muted mt-16">
        <div className="section-container !py-12">
          <div className="text-center">
            <h1 className="mb-4">Get In Touch</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to start your custom fabrication project? Contact us today for a consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="rounded-none"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="rounded-none"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+254 700 000 000"
                  className="rounded-none"
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={6}
                  required
                  className="rounded-none"
                />
              </div>
              <Button type="submit" variant="secondary" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="mb-6">Contact Information</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-none flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:alphawrightsltd@outlook.com"
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    alphawrightsltd@outlook.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-none flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a
                    href="https://wa.me/254718145608"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    +254 718 145 608 (WhatsApp)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-none flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    Roysambu, Nairobi
                    <br />
                    Kenya
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-muted p-6 rounded-none mb-8">
              <h3 className="font-semibold mb-4">Workshop Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href={`https://twitter.com/AlphawrightsKe`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-secondary/10 rounded-none flex items-center justify-center hover:bg-secondary hover:text-primary-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>

                {/* TikTok - lucide may not include a tiktok icon; use a simple link with label */}
                <a
                  href={`https://www.tiktok.com/@alpha.wrights`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-secondary/10 rounded-none flex items-center justify-center hover:bg-secondary hover:text-primary-foreground transition-colors"
                  aria-label="TikTok"
                >
                  <TikTok className="w-5 h-5" />
                </a>

                {/* Quick WhatsApp link */}
                <a
                  href={`https://wa.me/254718145608`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-secondary/10 rounded-none flex items-center justify-center hover:bg-secondary hover:text-primary-foreground transition-colors text-sm"
                  aria-label="WhatsApp"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
