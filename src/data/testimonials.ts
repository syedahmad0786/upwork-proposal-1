export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Chief Operating Officer",
    company: "Meridian Financial Group",
    content:
      "Aixcel Solutions transformed our entire back-office operation. The AI agent deployment reduced our document processing time from 4 hours to 12 minutes per batch, and the error rate dropped to near zero. The ROI was evident within the first 60 days, and the team has been exceptional partners throughout the engagement.",
    image: "/images/testimonials/sarah-chen.jpg",
    rating: 5,
  },
  {
    name: "Marcus Rivera",
    role: "VP of Customer Experience",
    company: "NovaTech Industries",
    content:
      "The voice AI platform Aixcel Solutions built for us handles over 3,000 calls daily with a 94% resolution rate -- without any human intervention. Our customers consistently rate the experience higher than they did with our previous live-agent-only model. That speaks volumes about the quality of the technology and the team behind it.",
    image: "/images/testimonials/marcus-rivera.jpg",
    rating: 5,
  },
  {
    name: "Dr. Elena Vasquez",
    role: "Chief Digital Officer",
    company: "Pacific Healthcare Systems",
    content:
      "Navigating AI adoption in healthcare requires a partner who understands both the technology and the regulatory landscape. Aixcel Solutions delivered a HIPAA-compliant automation suite that reduced our patient intake processing by 70% while maintaining the highest standards of data security. Their strategic advisory was instrumental in getting board-level buy-in.",
    image: "/images/testimonials/elena-vasquez.jpg",
    rating: 5,
  },
  {
    name: "James Thornton",
    role: "Director of Marketing Operations",
    company: "Catalyst Commerce",
    content:
      "Before Aixcel Solutions, our content team was producing 40 pieces per month and struggling to keep up with demand. Their AI content engine now generates over 400 optimized pieces monthly -- all on-brand, SEO-ready, and performing 35% better than our manually created content. The impact on our pipeline has been extraordinary.",
    image: "/images/testimonials/james-thornton.jpg",
    rating: 5,
  },
  {
    name: "Anika Patel",
    role: "Head of Process Excellence",
    company: "Vertex Manufacturing",
    content:
      "Aixcel Solutions connected 14 disconnected systems into a single automated workflow that now processes over 2,000 orders daily without manual intervention. The integration eliminated $1.2M in annual operational overhead and reduced order fulfillment errors by 98%. Their engineering team operates at a level far beyond any vendor partnership we have experienced.",
    image: "/images/testimonials/anika-patel.jpg",
    rating: 5,
  },
  {
    name: "Robert Kim",
    role: "CEO",
    company: "Ascent Logistics",
    content:
      "Bringing Aixcel Solutions in as our fractional CAIO was the best strategic decision of the past five years. They built a comprehensive AI roadmap that aligned our technology investments with concrete business outcomes, then guided execution flawlessly. Within 18 months, AI-driven efficiencies contributed to a 28% increase in EBITDA.",
    image: "/images/testimonials/robert-kim.jpg",
    rating: 5,
  },
];
