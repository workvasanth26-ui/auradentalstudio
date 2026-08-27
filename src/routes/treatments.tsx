import { createFileRoute } from "@tanstack/react-router";

import { PageHero, Section } from "@/components/site/Section";
import { Reveal } from "@/components/ui/reveal";
import { ActionLink } from "@/components/ui/action";
import { clinic } from "@/config/clinic";

const title = `Dental Treatments — ${clinic.name}`;
const description =
  "General, cosmetic, restorative, orthodontic, root canal and children's dental treatments — personalized care for patients of all ages.";

export const Route = createFileRoute("/treatments")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Treatments,
});

type Group = {
  eyebrow: string;
  heading: string;
  intro?: string;
  items: { title: string; body: string }[];
};

const groups: Group[] = [
  {
    eyebrow: "Preventive",
    heading: "General Dentistry",
    items: [
      {
        title: "Dental Check-ups",
        body: "Regular dental examinations help identify potential problems early and keep your teeth and gums healthy.",
      },
      {
        title: "Professional Teeth Cleaning",
        body: "Remove plaque and tartar buildup with professional cleaning designed to support healthier teeth and gums.",
      },
      {
        title: "Dental Fillings",
        body: "Restore teeth affected by cavities and minor damage while helping protect their function.",
      },
    ],
  },
  {
    eyebrow: "Aesthetic",
    heading: "Cosmetic Dentistry",
    items: [
      {
        title: "Teeth Whitening",
        body: "Improve the appearance of stained or discolored teeth and achieve a brighter-looking smile.",
      },
      {
        title: "Dental Veneers",
        body: "Custom-made veneers can help improve the appearance of selected teeth and create a more balanced smile.",
      },
      {
        title: "Smile Makeover",
        body: "A personalized combination of cosmetic treatments designed around your smile goals.",
      },
    ],
  },
  {
    eyebrow: "Restore",
    heading: "Restorative Dentistry",
    items: [
      {
        title: "Dental Implants",
        body: "A long-term tooth replacement option designed to restore function and provide a natural-looking result.",
      },
      {
        title: "Dental Crowns",
        body: "Strengthen and restore damaged or weakened teeth while improving their appearance.",
      },
      {
        title: "Dental Bridges",
        body: "Replace one or more missing teeth with a fixed dental restoration.",
      },
    ],
  },
  {
    eyebrow: "Alignment",
    heading: "Braces & Clear Aligners",
    items: [
      {
        title: "Braces",
        body: "Correct misaligned teeth and improve your bite with orthodontic treatment suited to your dental needs.",
      },
      {
        title: "Clear Aligners",
        body: "A discreet orthodontic option for suitable patients who want to gradually straighten their teeth.",
      },
    ],
  },
  {
    eyebrow: "Endodontics",
    heading: "Root Canal Treatment",
    intro:
      "When the inside of a tooth becomes infected or severely damaged, root canal treatment can help remove the infection and preserve the natural tooth.",
    items: [],
  },
  {
    eyebrow: "For Children",
    heading: "Children's Dentistry",
    intro:
      "We provide gentle and friendly dental care designed to make dental visits comfortable and positive for children.",
    items: [],
  },
];

function Treatments() {
  return (
    <>
      <PageHero
        eyebrow="Our Treatments"
        title="Complete Dental Care Under One Roof"
        description="From routine preventive care to restorative, cosmetic and orthodontic treatments, our team provides personalized solutions for patients of all ages."
      />

      {groups.map((group, gi) => (
        <Section key={group.heading} tone={gi % 2 === 0 ? "default" : "muted"}>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1fr]">
            <Reveal>
              <p className="eyebrow">{group.eyebrow}</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-[2.4rem]">{group.heading}</h2>
            </Reveal>
            <div>
              {group.intro && (
                <Reveal delay={80}>
                  <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                    {group.intro}
                  </p>
                </Reveal>
              )}
              {group.items.length > 0 && (
                <ul className="divide-y divide-border border-y border-border">
                  {group.items.map((item, i) => (
                    <Reveal as="li" key={item.title} delay={i * 70} className="py-7">
                      <h3 className="text-xl">{item.title}</h3>
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </Reveal>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </Section>
      ))}

      <Section tone="beige">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl leading-tight md:text-[2.6rem]">
            Not Sure Which Treatment You Need?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Every dental concern is different. Book a consultation and let our dental team help you
            understand the appropriate treatment options.
          </p>
          <div className="mt-9">
            <ActionLink to="/contact">Book a Consultation</ActionLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
