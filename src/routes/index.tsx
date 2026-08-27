import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Stethoscope,
  Sparkles,
  AlignHorizontalDistributeCenter,
  Anchor,
  ShieldPlus,
  Baby,
  HeartHandshake,
  Microscope,
  UserRoundCheck,
  Leaf,
  Quote,
} from "lucide-react";

import heroImage from "@/assets/hero-clinic.jpg";
import dentistPortrait from "@/assets/dentist-portrait.jpg";
import receptionImage from "@/assets/reception.jpg";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/ui/reveal";
import { ActionAnchor, ActionLink, actionClass } from "@/components/ui/action";
import { clinic, telHref, waHref } from "@/config/clinic";

const title = `${clinic.name} — Dental Clinic in ${clinic.location}`;
const description = `Professional, personalized dental care in ${clinic.location}. General, cosmetic, restorative and orthodontic treatments by ${clinic.doctor.name}.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Home,
});

const reasons = [
  {
    icon: HeartHandshake,
    title: "Experienced Care",
    body: "Our dental team brings professional experience and a patient-focused approach to every consultation and treatment.",
  },
  {
    icon: Microscope,
    title: "Modern Approach",
    body: "We use contemporary dental techniques and equipment to provide efficient and comfortable treatment.",
  },
  {
    icon: UserRoundCheck,
    title: "Personalized Treatment",
    body: "Every patient is different. We take time to understand your needs and recommend treatment suited to you.",
  },
  {
    icon: Leaf,
    title: "Comfort Comes First",
    body: "We create a calm, welcoming environment where you can feel comfortable throughout your dental journey.",
  },
];

const services = [
  {
    icon: Stethoscope,
    title: "General Dentistry",
    body: "Routine check-ups, professional cleaning, fillings and preventive care to help maintain healthy teeth and gums.",
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    body: "Enhance the appearance of your smile with personalized cosmetic dental treatments.",
  },
  {
    icon: AlignHorizontalDistributeCenter,
    title: "Braces & Clear Aligners",
    body: "Improve tooth alignment and your smile with orthodontic solutions suited to your needs.",
  },
  {
    icon: Anchor,
    title: "Dental Implants",
    body: "Replace missing teeth with durable, natural-looking solutions designed to restore function and confidence.",
  },
  {
    icon: ShieldPlus,
    title: "Root Canal Treatment",
    body: "Treat infected or damaged teeth while helping preserve your natural tooth.",
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    body: "Gentle, friendly dental care designed to make dental visits more comfortable for children.",
  },
];

const testimonials = [
  {
    quote:
      "Excellent experience from start to finish. The doctor explained the treatment clearly and made me feel comfortable throughout.",
    name: "Meera Krishnan",
  },
  {
    quote:
      "Very professional and friendly team. The clinic is clean, comfortable and the treatment was explained properly.",
    name: "Rahul Menon",
  },
  {
    quote:
      "I was nervous about visiting the dentist, but the entire experience was much easier than I expected. Highly recommended.",
    name: "Sanjana Iyer",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-card">
        <div className="container-page grid gap-14 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">Compassionate Dental Care</p>
            <h1 className="mt-5 text-4xl leading-[1.08] md:text-6xl">
              A Healthy Smile Starts Here
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Professional, personalized dental care designed around your comfort, health and
              confidence.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ActionLink to="/contact">Book an Appointment</ActionLink>
              <ActionAnchor href={waHref} target="_blank" rel="noreferrer" variant="outline">
                WhatsApp Us
              </ActionAnchor>
            </div>
            <p className="mt-8 border-t border-border pt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Professional Care • Modern Approach • Patient First
            </p>
          </Reveal>

          <Reveal delay={120}>
            <img
              src={heroImage}
              alt={`Dentist consulting with a patient at ${clinic.name}`}
              width={1600}
              height={1200}
              className="w-full rounded-lg border border-border object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Introduction */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={receptionImage}
              alt={`Reception and waiting area at ${clinic.name}`}
              loading="lazy"
              width={1600}
              height={1008}
              className="w-full rounded-lg border border-border object-cover"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">Our Philosophy</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-[2.6rem]">
              Your Smile Deserves Thoughtful Care
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              At {clinic.name}, we believe dental care should be comfortable, transparent and
              personalized. Our approach combines professional expertise with modern treatment
              techniques to help you maintain a healthy and confident smile.
            </p>
            <div className="mt-8">
              <ActionLink to="/about" variant="outline">
                Discover Our Clinic
              </ActionLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Why choose us */}
      <Section tone="beige">
        <SectionHeading
          eyebrow="Why Us"
          title="Why Patients Choose Us"
          subtitle="Focused on your comfort. Committed to your smile."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, i) => (
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

      {/* Services */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Treatments"
          title="Comprehensive Dental Care"
          subtitle="From preventive care to restorative and cosmetic treatments, we provide dental solutions for the whole family."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 80}>
              <article className="h-full rounded-lg border border-border bg-background p-8 transition-colors duration-300 hover:border-bluegrey">
                <item.icon className="size-6 text-bluegrey-deep" strokeWidth={1.4} />
                <h3 className="mt-6 text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <ActionLink to="/treatments" variant="outline">
            Explore All Treatments
          </ActionLink>
        </Reveal>
      </Section>

      {/* Dentist */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1fr] lg:items-center">
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
            <p className="eyebrow">Meet Your Dentist</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-[2.6rem]">{clinic.doctor.name}</h2>
            <p className="mt-3 text-sm text-bluegrey-deep">
              {clinic.doctor.qualification} | {clinic.doctor.specialization}
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              With {clinic.doctor.experience} years of experience in dentistry,{" "}
              {clinic.doctor.name} is dedicated to providing thoughtful, comfortable and
              personalized dental care. Every treatment begins with understanding the patient's
              concerns and finding an appropriate approach for their oral health.
            </p>
            <div className="mt-8">
              <ActionLink to="/about" variant="outline">
                About the Dentist
              </ActionLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Reviews */}
      <Section tone="beige">
        <SectionHeading
          eyebrow="Patient Reviews"
          title="Trusted by Our Patients"
          subtitle="Real experiences from people we've had the privilege of caring for."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="h-full rounded-lg border border-border bg-card p-8">
                <Quote className="size-5 text-sage-deep" strokeWidth={1.4} />
                <blockquote className="mt-5 text-base leading-relaxed text-foreground">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 text-sm text-muted-foreground">— {t.name}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section tone="muted">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl leading-tight md:text-[2.6rem]">
            Take the First Step Towards a Healthier Smile
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Whether you need a routine check-up or have a specific dental concern, we're here to
            help.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/contact" className={actionClass("solid")}>
              Book an Appointment
            </Link>
            <ActionAnchor href={telHref} variant="outline">
              Call Us
            </ActionAnchor>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
