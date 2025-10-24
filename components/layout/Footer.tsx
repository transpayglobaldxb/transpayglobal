import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Job Opportunities", href: "/features/jobs" },
    { name: "Health Consultancy", href: "/features/health" },
    { name: "Legal Services", href: "/features/legal" },
    { name: "AI Trading Opportunities", href: "/features/trading" },
    { name: "Travel & Tourism", href: "/features/travel" },
    { name: "Loan And Credit Card", href: "/features/loans" },
  ],
  support: [
    { name: "FAQ", href: "/faq" },
    { name: "Help Center", href: "/help" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
};

const socialLinks = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "LinkedIn", href: "#", icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-luxury text-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-1 mb-4 group">
              <Image
                src="/logo.png"
                alt="TransPay Global Logo"
                width={48}
                height={48}
                className="transition-all duration-300 group-hover:scale-110 drop-shadow-lg"
              />
              <div className="flex items-baseline space-x-1.5">
                <span
                  className="text-xl font-bold tracking-tight"
                  style={{ color: "#4A90E2" }}
                >
                  TransPay
                </span>
                <span
                  className="text-xl font-bold"
                  style={{ color: "#D4AF77" }}
                >
                  Global
                </span>
              </div>
            </Link>
            <p className="text-white/70 mb-6 leading-relaxed font-light">
              Your gateway to verified financial opportunities. Join thousands
              of members unlocking their potential with our trusted network of
              partners.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-secondary hover:scale-110 flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-secondary"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-white/80 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white tracking-luxury">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-secondary transition-all duration-300 inline-block hover:translate-x-1 font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white tracking-luxury">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-secondary transition-all duration-300 inline-block hover:translate-x-1 font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white tracking-luxury">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-secondary transition-all duration-300 inline-block hover:translate-x-1 font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-secondary transition-all duration-300">
                <Mail className="w-5 h-5 text-secondary group-hover:text-white" />
              </div>
              <span className="text-white/80 font-medium">
                support@transpayglobal.com
              </span>
            </div>
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-secondary transition-all duration-300">
                <Phone className="w-5 h-5 text-secondary group-hover:text-white" />
              </div>
              <span className="text-white/80 font-medium">
                +1 (555) 123-4567
              </span>
            </div>
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-secondary transition-all duration-300">
                <MapPin className="w-5 h-5 text-secondary group-hover:text-white" />
              </div>
              <span className="text-white/80 font-medium">
                123 Business St, City, State 12345
              </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/60 font-medium">
            © 2016 TransPay Global. All rights reserved!
            <Link
              href="/terms"
              className="hover:text-secondary transition-all duration-300 ml-1"
            >
              Terms of Service
            </Link>{" "}
            |
            <Link
              href="/privacy"
              className="hover:text-secondary transition-all duration-300 ml-1"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
