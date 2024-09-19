import { ContactForm } from "@/components/contact.form";
import { Icons } from "@/components/icons";
import { Section } from "@/components/page-wrapper";
import { SectionTitle } from "@/components/section-title";

export const SectionContact = () => {
  return (
    <Section id="contact">
      <SectionTitle>Contactez moi</SectionTitle>

      <div>
        <p className="text-center text-gray-500">Contact Rapide</p>
        <div className="mt-8 grid grid-cols-3 items-center justify-center gap-1 gap-y-4 md:grid-cols-5">
          <a
            href="https://github.com/alfredmouelle"
            className="flex flex-col items-center justify-center gap-y-1.5 text-gray-500"
            target="_blank"
          >
            <Icons.github className="h-10 w-10 text-blue-500" />
            @alfredmouelle
          </a>

          <a
            href="https://twitter.com/kali47_"
            className="flex flex-col items-center justify-center gap-y-1.5 text-gray-500"
            target="_blank"
          >
            <Icons.twitter className="h-10 w-10 text-blue-500" />
            @kali47_
          </a>

          <a
            href="https://www.linkedin.com/in/alfred-mouelle-72a976228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            className="flex flex-col items-center justify-center gap-y-1.5 text-gray-500"
            target="_blank"
          >
            <Icons.linkedin className="h-10 w-10 text-blue-500" />
            LinkedIn
          </a>

          <a
            href="mailto:alfredmouelle@gmail.com"
            className="flex flex-col items-center justify-center gap-y-1.5 text-gray-500"
            target="_blank"
          >
            <Icons.mail className="h-10 w-10 text-blue-500" />
            Email
          </a>

          <a
            href="https://comeup.com/fr/@alfredmouelle"
            className="flex flex-col items-center justify-center gap-y-1.5 text-gray-500"
            target="_blank"
          >
            <Icons.website className="h-10 w-10 text-blue-500" />
            ComeUp
          </a>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
};
