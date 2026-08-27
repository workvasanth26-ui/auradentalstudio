import { createFileRoute } from "@tanstack/react-router";
import { HeartHandshake, BadgeCheck, Eye, CalendarHeart } from "lucide-react";

import clinicInterior from "@/assets/clinic-interior.jpg";
import dentistPortrait from "@/assets/dentist-portrait.jpg";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/ui/reveal";
import { ActionLink } from "@/components/ui/action";
import { clinic } from "@/config/clinic";

const title = `About Us — ${clinic.name}`;
const description = `Learn about ${clinic.name} in ${clinic.location}: our patient-first philosophy, our mission and ${clinic.doctor.name}.`;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: About,
});

const values = [
  {
    icon: HeartHandshake,
    title: "Patient First",
    body: "Your concerns, comfort and well-being remain at the heart of everything we do.",
  },
  {
    icon: BadgeCheck,
    title: "Quality",
    body: "We strive to maintain high standards in every consultation and treatment.",
  },
  {
    icon: Eye,
    title: "Transparency",
    body: "We believe in clear communication and helping patients understand their treatment options.",
  },
  {
    icon: CalendarHeart,
    title: "Long-Term Care",
    body: "We focus not only on treating dental concerns but also on helping you maintain good oral health over time.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow={`About ${clinic.name}`}
        title="Professional Dental Care With a Personal Touch"
        description="We are committed to creating a comfortable dental experience while providing thoughtful, high-quality care for every patient."
        image={clinicInterior}
        imageAlt={`Treatment room interior at ${clinic.name}`}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1fr]">
          <Reveal>
            <p className="eyebrow">The Clinic</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-[2.6rem]">
              Where Your Comfort Meets Quality Care
            </h2>
          </Reveal>
          <Reveal delay={100} className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              {clinic.name} was created with a simple goal: to make quality dental care more
              comfortable, accessible and personal.
            </p>
            <p>
              From preventive check-ups to advanced dental procedures, we take the time to
              understand your concerns, explain your options and create a treatment approach that
              suits your individual needs.
            </p>
            <p>
              Our clinic combines a welcoming environment, modern dental practices and a
              patient-first philosophy to make every visit a positive experience.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="beige">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <Reveal>
            <img
              src={dentistPortrait}
              alt={`Portrait of ${clinic.doctor.name}`}
              loading="lazy"
              width={1008}
              height={1264}
              className="w-full rounded-lg border border-border object-cover"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">Dentist Profile</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-[2.6rem]">
              Meet {clinic.doctor.name}
            </h2>
            <p className="mt-3 text-sm text-bluegrey-deep">
              {clinic.doctor.qualification} | {clinic.doctor.specialization}
            </p>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                {clinic.doctor.name} is a dedicated dental professional with{" "}
                {clinic.doctor.experience} years of experience in providing comprehensive dental
                care.
              </p>
              <p>
                Known for a calm and patient-focused approach, {clinic.doctor.name} believes in
                clear communication and helping patients understand their dental health and
                treatment options.
              </p>
              <p>
                Whether it's preventive care, restorative treatment or improving your smile, every
                treatment plan is designed with the patient's needs and comfort in mind.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-lg border border-border bg-background p-10">
              <p className="eyebrow">Our Mission</p>
              <h2 className="mt-4 text-2xl md:text-3xl">Care that puts patients first</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                To provide professional, patient-focused dental care in a comfortable environment
                while helping every patient achieve and maintain a healthy, confident smile.
              </p>
            </article>
          </Reveal>
          <Reveal delay={100}>
            <article className="h-full rounded-lg border border-border bg-background p-10">
              <p className="eyebrow">Our Vision</p>
              <h2 className="mt-4 text-2xl md:text-3xl">A trusted dental destination</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                To become a trusted dental care destination known for quality treatment, patient
                comfort, ethical practices and long-term relationships with our patients.
              </p>
            </article>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Our Values" title="What We Believe In" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <article className="h-full rounded-lg border border-border bg-card p-7 transition-shadow duration-300 hover:shadow-[var(--shadow-soft)]">
                <item.icon className="size-6 text-sage-deep" strokeWidth={1.4} />
                <h3 className="mt-6 text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="beige">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl leading-tight md:text-[2.6rem]">Your Smile Is Worth Caring For</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Speak with our dental team and discover the right care for your needs.
          </p>
          <div className="mt-9">
            <ActionLink to="/contact">Book a Consultation</ActionLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
