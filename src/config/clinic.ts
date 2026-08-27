/**
 * Single source of truth for clinic details.
 * Replace these placeholder values with the real clinic information.
 */
export const clinic = {
  name: "Aurea Dental Studio",
  tagline:
    "Professional, personalized dental care focused on your comfort, health and confidence.",
  doctor: {
    name: "Dr. Ananth Rao",
    qualification: "BDS, MDS",
    specialization: "Prosthodontics & Implantology",
    experience: "14",
  },
  location: "Indiranagar, Bengaluru",
  address: "No. 24, 100 Feet Road, Indiranagar, Bengaluru, Karnataka 560038",
  phone: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  email: "care@aureadental.in",
  hours: {
    weekdays: "Monday – Saturday: 9:00 AM – 8:00 PM",
    sunday: "Sunday: Closed / By Appointment",
  },
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
} as const;

export const telHref = `tel:${clinic.phone.replace(/[^\d+]/g, "")}`;
export const waHref = `https://wa.me/${clinic.whatsapp.replace(/\D/g, "")}`;
export const mailHref = `mailto:${clinic.email}`;
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(clinic.address)}&output=embed`;
export const mapsDirections = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(clinic.address)}`;
