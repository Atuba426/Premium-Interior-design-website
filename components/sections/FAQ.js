import Container from "@/components/shared/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { MessageCircle } from "lucide-react";
import { faqs } from "@/data/faq";

export default function FAQ() {
  return (
    <section className="bg-[#FAF7F3] py-32">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <SectionHeading
            badge="Frequently Asked Questions"
            title="Everything You Need to Know"
            description="Planning your dream home should feel exciting, not confusing. Here are answers to the questions homeowners ask us most."
          />

          <a
            href="#"
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-white px-6 py-3 transition hover:shadow-lg"
          >
            <MessageCircle
              size={18}
              className="text-accent"
            />

            <span className="font-medium">
              Still have questions? Chat with us
            </span>

          </a>

        </div>

        <div className="mx-auto mt-16 max-w-5xl rounded-4xl border border-border bg-white p-10 shadow-[0_15px_60px_rgba(0,0,0,.04)]">

          <FAQAccordion faqs={faqs} />

        </div>

      </Container>
    </section>
  );
}