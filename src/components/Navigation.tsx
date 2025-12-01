import { useState } from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const logo = "/assets/homepagelogo.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/", hash: null },
    { name: "Gallery", path: "/", hash: "#collections" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Portfolio", path: "/portfolio.pdf", download: true },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="section-container !py-4">
        <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Alpha Wrights Logo" className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
          {location.pathname !== "/" && (
            <button
              onClick={() => navigate(-1)}
              className="hidden md:flex items-center gap-2 text-sm font-medium tracking-wide transition-colors hover:text-accent ml-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back
            </button>
          )}
          <span className="text-xl font-bold tracking-tight">Alpha Wrights</span>
        </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const key = `${item.name}-${item.hash || item.path}`;
            return item.download ? (
              <a
                key={key}
                href={item.path}
                download="AlphaWrights-Portfolio.pdf"
                className="text-sm font-medium tracking-wide transition-colors hover:text-accent"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={key}
                to={item.path}
                state={item.hash ? { scrollTo: item.hash } : undefined}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${
                  isActive(item.path) && !item.hash ? "text-accent" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            );
          })}


            <Button asChild variant="secondary" size="sm" className="animate-on-hover">
              <Link to="/contact">Send Enquiry</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-border pt-4">
            {location.pathname !== "/" && (
              <button
                onClick={() => {
                  navigate(-1);
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 text-sm font-medium tracking-wide transition-colors hover:text-accent"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back
              </button>
            )}
            {navItems.map((item) => (
              item.download ? (
                <a
                  key={item.path}
                  href={item.path}
                  download="AlphaWrights-Portfolio.pdf"
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-medium tracking-wide transition-colors hover:text-accent"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm font-medium tracking-wide transition-colors hover:text-accent ${
                    isActive(item.path) ? "text-accent" : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
            <Button asChild variant="secondary" size="sm" className="w-full">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Send Enquiry
              </Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
