export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#service" },
  { label: "About", href: "#how-we-work" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const STUDIO = {
  name: "Interio Design Studio",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "hello@interiodesignstudio.com",
  address: "402, Aurum Business Tower, Andheri East, Mumbai 400069",
};
