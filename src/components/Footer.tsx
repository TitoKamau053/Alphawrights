import {
  SiYoutube,
  SiInstagram,
  SiTiktok,
  SiFacebook,
  SiX
} from "react-icons/si";
import { Mail, Phone } from "lucide-react";
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
              <div className="pt-4">
                <h4 className="text-sm font-semibold mb-3 text-primary-foreground/90">Follow Us</h4>

                <div className="flex gap-3">

                  {/* Twitter */}
                  <a
                    href="https://twitter.com/AlphawrightsKe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-12 h-12 flex items-center justify-center rounded-full bg-primary-foreground/10 
                    hover:bg-[#1DA1F2] transition-all duration-300 hover:scale-110 hover:-translate-y-1 
                    hover:shadow-lg hover:shadow-[#1DA1F2]/50"
                    aria-label="Twitter"
                  >
                    <SiX className="w-5 h-5 text-primary-foreground/80 group-hover:text-white transition-colors" />
                  </a>

                  {/* TikTok */}
                  <a
                    href="https://www.tiktok.com/@alpha.wrights"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-12 h-12 flex items-center justify-center rounded-full bg-primary-foreground/10 
                    hover:bg-gradient-to-r hover:from-[#00f2ea] hover:to-[#ff0050] transition-all duration-300 
                    hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#ff0050]/50"
                    aria-label="TikTok"
                  >
                    <SiTiktok className="w-5 h-5 text-primary-foreground/80 group-hover:text-white transition-colors group-hover:rotate-12" />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com/yourhandle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-12 h-12 flex items-center justify-center rounded-full bg-primary-foreground/10 
                    hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] 
                    transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#F77737]/50"
                    aria-label="Instagram"
                  >
                   <SiInstagram className="w-5 h-5 text-primary-foreground/80 group-hover:text-white transition-colors" />
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/@Fabrication-Gurus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-12 h-12 flex items-center justify-center rounded-full bg-primary-foreground/10 
                    hover:bg-[#FF0000] transition-all duration-300 hover:scale-110 hover:-translate-y-1 
                    hover:shadow-lg hover:shadow-[#FF0000]/50"
                    aria-label="YouTube"
                  >
                    <SiYoutube className="w-5 h-5 text-primary-foreground/80 group-hover:text-white transition-colors" />
                  </a>


                  {/* Facebook */}
                  <a
                    href="https://facebook.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-12 h-12 flex items-center justify-center rounded-full bg-primary-foreground/10 
                    hover:bg-[#1877F2] transition-all duration-300 hover:scale-110 hover:-translate-y-1 
                    hover:shadow-lg hover:shadow-[#1877F2]/50"
                    aria-label="Facebook"
                  >
                    <SiFacebook className="w-5 h-5 text-primary-foreground/80 group-hover:text-white transition-colors" />
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Alpha Wrights Custom Fabrications. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
