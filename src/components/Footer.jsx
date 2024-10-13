import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center">
              <img src="/rapidLogo.svg" width={140} alt="Logo" />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Empowering businesses with innovative solutions since 2023. We're dedicated to creating cutting-edge technology that makes a difference.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
              </li>
              <li>
                <Link to="/webSocket" className="text-sm text-muted-foreground hover:text-foreground">WebSocketClient</Link>
              </li>
              <li>
                <Link to="/github" className="text-sm text-muted-foreground hover:text-foreground">Github</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link to="https://facebook.com" className="text-muted-foreground hover:text-foreground" aria-label="Facebook">
                <FaFacebook className="h-5 w-5" />
              </Link>
              <Link to="https://twitter.com" className="text-muted-foreground hover:text-foreground" aria-label="Twitter">
                <FaTwitter className="h-5 w-5" />
              </Link>
              <Link to="https://instagram.com" className="text-muted-foreground hover:text-foreground" aria-label="Instagram">
                <FaInstagram className="h-5 w-5" />
              </Link>
              <Link to="https://linkedin.com" className="text-muted-foreground hover:text-foreground" aria-label="LinkedIn">
                <FaLinkedin className="h-5 w-5" />
              </Link>
              <Link to="https://github.com" className="text-muted-foreground hover:text-foreground" aria-label="GitHub">
                <FaGithub className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} RapidInnovation Inc. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
