export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Top Projects", href: "/projects" },
  { label: "Services", href: "/service" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export const STUDIO = {
  name: "Interio Design Studio",
  phone: "+91 93267 59833",
  whatsapp: "91 93267 59833",
  email: "hello@interiodesignstudio.com",
  address: "402, Aurum Business Tower, Andheri East, Mumbai 400069",
};
