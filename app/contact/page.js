import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Container from "@/components/shared/Container";
import ContactForm from "@/components/ui/ContactForm";
import { STUDIO } from "@/lib/utils";

export const metadata = {
  title: "Contact Us",
  description:
    "Book a free consultation with Interio Design Studio — call, WhatsApp, or send us a message and we'll reply within 24 hours.",
};

export default function ContactPage() {
  const waMessage = encodeURIComponent(
    "Hi Interio Design Studio, I'd like to book a free consultation for my home."
  );

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Talk About Your Home"
        description="Fill out the form, call us directly, or message us on WhatsApp — we typically reply within a few hours."
      />

      <section className="pb-24 lg:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            {/* Info column */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-5">
                <a
                  href={`tel:${STUDIO.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-4 rounded-card border border-border bg-surface p-5 transition-colors hover:border-accent"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-background text-accent">
                    <Phone size={18} />
                  </span>
                  <div>
                    <p className="text-[13px] text-text-secondary">Call us</p>
                    <p className="text-[15px] font-medium text-text-primary">{STUDIO.phone}</p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${STUDIO.whatsapp}?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-card border border-border bg-surface p-5 transition-colors hover:border-accent"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-background text-accent">
                    <MessageCircle size={18} />
                  </span>
                  <div>
                    <p className="text-[13px] text-text-secondary">WhatsApp us</p>
                    <p className="text-[15px] font-medium text-text-primary">Message us directly</p>
                  </div>
                </a>

                <a
                  href={`mailto:${STUDIO.email}`}
                  className="flex items-center gap-4 rounded-card border border-border bg-surface p-5 transition-colors hover:border-accent"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-background text-accent">
                    <Mail size={18} />
                  </span>
                  <div>
                    <p className="text-[13px] text-text-secondary">Email us</p>
                    <p className="text-[15px] font-medium text-text-primary">{STUDIO.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-card border border-border bg-surface p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-background text-accent">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="text-[13px] text-text-secondary">Studio address</p>
                    <p className="text-[15px] font-medium text-text-primary">{STUDIO.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-card border border-border bg-surface p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-background text-accent">
                    <Clock size={18} />
                  </span>
                  <div>
                    <p className="text-[13px] text-text-secondary">Studio hours</p>
                    <p className="text-[15px] font-medium text-text-primary">Mon–Sat, 10am – 7pm</p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-card border border-border card-shadow">
                <iframe
                  title="Interio Design Studio location"
                  src="https://maps.google.com/maps?q=Andheri%20East%2C%20Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="240"
                  style={{ border: 0, filter: "grayscale(0.3) contrast(1.1)" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form column */}
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
