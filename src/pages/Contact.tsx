import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Twitter } from "lucide-react";
import TikTok from "@/components/ui/tiktok";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_fej6fsm',
        'template_o6q2ld7',
        {
          from_name: form.name,
          to_name: "AlphaWrightsLtd",
          from_email: form.email,
          to_email: "alphawrightsltd@outlook.com",
          phone: form.phone,
          message: form.message,
        },
        'vLs5Pz2HbG5N-yUq8'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
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
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="rounded-none"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="rounded-none"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+254 700 000 000"
                  className="rounded-none"
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  name="message"
                  value={form.message}
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
