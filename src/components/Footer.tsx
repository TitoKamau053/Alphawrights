import { Mail, Phone, Twitter } from "lucide-react";
import TikTok from "@/components/ui/tiktok";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Alpha Wrights Custom Fabrications</h3>
            <p className="text-primary-foreground/80 mb-4">
              Premium custom steel and wood fabrications. Bringing your vision to life with expert craftsmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:alphawrightsltd@outlook.com"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                <Mail className="w-4 h-4" />
                alphawrightsltd@outlook.com
              </a>
              <a
                href="https://wa.me/254718145608"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +254 718 145 608 (WhatsApp)
              </a>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href={`https://twitter.com/AlphawrightsKe`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>

                <a
                  href={`https://www.tiktok.com/@alpha.wrights`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  aria-label="TikTok"
                >
                  <TikTok className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Alpha Wrights Custom Fabrications. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
