"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Workflow,
  Mic,
  FileText,
  Lightbulb,
  Code,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Clock,
  Shield,
  Building2,
  Globe,
  Users,
  Wrench,
  Briefcase,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const challengeOptions = [
  {
    id: "ai-agents",
    icon: Bot,
    title: "AI Agents & Automation",
    description: "Build autonomous agents that handle complex workflows",
  },
  {
    id: "process-automation",
    icon: Workflow,
    title: "Process Automation",
    description: "Streamline and automate repetitive business processes",
  },
  {
    id: "voice-ai",
    icon: Mic,
    title: "Voice AI Solutions",
    description: "Deploy intelligent voice interfaces and assistants",
  },
  {
    id: "content-ops",
    icon: FileText,
    title: "Content Operations",
    description: "Scale content production with AI-powered pipelines",
  },
  {
    id: "ai-strategy",
    icon: Lightbulb,
    title: "AI Strategy & Consulting",
    description: "Develop a roadmap for enterprise AI transformation",
  },
  {
    id: "custom-dev",
    icon: Code,
    title: "Custom AI Development",
    description: "Build bespoke AI solutions for unique challenges",
  },
  {
    id: "other",
    icon: HelpCircle,
    title: "Something Else",
    description: "Tell us about your unique challenge in the next step",
  },
];

const industryOptions = [
  "Technology / SaaS",
  "Financial Services",
  "Healthcare",
  "E-Commerce / Retail",
  "Manufacturing",
  "Professional Services",
  "Education",
  "Media & Entertainment",
  "Real Estate",
  "Other",
];

const teamSizeOptions = [
  "1 - 10 employees",
  "11 - 50 employees",
  "51 - 200 employees",
  "201 - 1,000 employees",
  "1,000+ employees",
];

const timeSlots = [
  "Morning (9:00 AM - 12:00 PM EST)",
  "Afternoon (12:00 PM - 3:00 PM EST)",
  "Late Afternoon (3:00 PM - 6:00 PM EST)",
];

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// ---------------------------------------------------------------------------
// Step Components
// ---------------------------------------------------------------------------

function Step1({
  selectedChallenge,
  onSelect,
}: {
  selectedChallenge: string | null;
  onSelect: (id: string) => void;
}) {
  return (
    <div>
      <h2 className="mb-2 text-2xl font-bold text-pure-white sm:text-3xl">
        What&apos;s your biggest challenge?
      </h2>
      <p className="mb-8 text-cloud">
        Select the area where you need the most help. This helps us prepare a
        more relevant conversation.
      </p>

      <motion.div
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {challengeOptions.map((option) => {
          const Icon = option.icon;
          const isSelected = selectedChallenge === option.id;
          return (
            <motion.button
              key={option.id}
              variants={fadeUp}
              onClick={() => onSelect(option.id)}
              className={`group flex flex-col items-start rounded-2xl border p-5 text-left transition-all duration-300 cursor-pointer ${
                isSelected
                  ? "border-electric bg-electric/10 shadow-[0_0_25px_rgba(59,130,246,0.15)]"
                  : "border-steel/50 bg-midnight/50 hover:border-electric/30 hover:bg-midnight"
              }`}
            >
              <div
                className={`mb-3 flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
                  isSelected ? "bg-electric/20" : "bg-steel/30 group-hover:bg-electric/10"
                }`}
              >
                <Icon
                  className={`h-5 w-5 transition-colors ${
                    isSelected ? "text-electric" : "text-muted group-hover:text-electric"
                  }`}
                />
              </div>
              <h4
                className={`mb-1 text-sm font-bold transition-colors ${
                  isSelected ? "text-pure-white" : "text-cloud group-hover:text-pure-white"
                }`}
              >
                {option.title}
              </h4>
              <p className="text-xs leading-relaxed text-muted">
                {option.description}
              </p>
              {isSelected && (
                <motion.div
                  className="mt-3 flex items-center gap-1 text-xs font-medium text-electric"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Selected
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}

function Step2() {
  const inputClasses =
    "w-full rounded-xl border border-steel/50 bg-midnight/80 px-4 py-3 text-pure-white placeholder:text-muted outline-none transition-all duration-300 focus:border-electric/50 focus:ring-1 focus:ring-electric/30 focus:bg-midnight";
  const labelClasses = "mb-2 block text-sm font-medium text-cloud";

  return (
    <div>
      <h2 className="mb-2 text-2xl font-bold text-pure-white sm:text-3xl">
        Tell us about your company
      </h2>
      <p className="mb-8 text-cloud">
        This helps us understand your context and tailor the consultation to your
        specific situation.
      </p>

      <div className="space-y-6">
        {/* Company Name */}
        <div>
          <label htmlFor="companyName" className={labelClasses}>
            <Building2 className="mb-0.5 mr-1.5 inline h-4 w-4 text-electric" />
            Company Name <span className="text-electric">*</span>
          </label>
          <input
            type="text"
            id="companyName"
            required
            placeholder="Acme Inc."
            className={inputClasses}
          />
        </div>

        {/* Industry & Team Size */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="industry" className={labelClasses}>
              <Briefcase className="mb-0.5 mr-1.5 inline h-4 w-4 text-electric" />
              Industry <span className="text-electric">*</span>
            </label>
            <select
              id="industry"
              required
              className={`${inputClasses} cursor-pointer appearance-none`}
              defaultValue=""
            >
              <option value="" disabled>
                Select industry
              </option>
              {industryOptions.map((option) => (
                <option key={option} value={option} className="bg-midnight">
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="teamSize" className={labelClasses}>
              <Users className="mb-0.5 mr-1.5 inline h-4 w-4 text-electric" />
              Team Size <span className="text-electric">*</span>
            </label>
            <select
              id="teamSize"
              required
              className={`${inputClasses} cursor-pointer appearance-none`}
              defaultValue=""
            >
              <option value="" disabled>
                Select team size
              </option>
              {teamSizeOptions.map((option) => (
                <option key={option} value={option} className="bg-midnight">
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Website URL */}
        <div>
          <label htmlFor="website" className={labelClasses}>
            <Globe className="mb-0.5 mr-1.5 inline h-4 w-4 text-electric" />
            Website URL <span className="text-muted">(optional)</span>
          </label>
          <input
            type="url"
            id="website"
            placeholder="https://yourcompany.com"
            className={inputClasses}
          />
        </div>

        {/* Current Tools */}
        <div>
          <label htmlFor="currentTools" className={labelClasses}>
            <Wrench className="mb-0.5 mr-1.5 inline h-4 w-4 text-electric" />
            Current Tools & Platforms{" "}
            <span className="text-muted">(optional)</span>
          </label>
          <input
            type="text"
            id="currentTools"
            placeholder="e.g., Salesforce, HubSpot, Slack, custom CRM..."
            className={inputClasses}
          />
          <p className="mt-1 text-xs text-muted">
            List the main tools you use today so we can discuss integration
            opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}

function Step3() {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  return (
    <div>
      <h2 className="mb-2 text-2xl font-bold text-pure-white sm:text-3xl">
        Schedule your session
      </h2>
      <p className="mb-8 text-cloud">
        Pick a time that works for you. We will confirm your booking within a
        few hours.
      </p>

      <div className="space-y-8">
        {/* Calendar Placeholder */}
        <div>
          <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-pure-white">
            <Calendar className="h-4 w-4 text-electric" />
            Select a Date
          </h4>
          <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-steel/50 bg-gradient-to-br from-midnight via-steel/10 to-midnight">
            <div className="text-center">
              <Calendar className="mx-auto mb-3 h-10 w-10 text-electric/30" />
              <p className="text-sm font-medium text-muted">
                Calendly Integration Here
              </p>
              <p className="mt-1 text-xs text-muted/60">
                Live calendar booking will be embedded in this space
              </p>
            </div>
          </div>
        </div>

        {/* Preferred Time Slots */}
        <div>
          <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-pure-white">
            <Clock className="h-4 w-4 text-electric" />
            Preferred Time Slot
          </h4>
          <div className="grid gap-3 sm:grid-cols-3">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                onClick={() => setSelectedSlot(slot)}
                className={`rounded-xl border px-4 py-3 text-sm text-left transition-all duration-300 cursor-pointer ${
                  selectedSlot === slot
                    ? "border-electric bg-electric/10 text-pure-white"
                    : "border-steel/50 bg-midnight/50 text-cloud hover:border-electric/30"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* Anything Else */}
        <div>
          <label
            htmlFor="notes"
            className="mb-2 block text-sm font-medium text-cloud"
          >
            Anything else we should know?{" "}
            <span className="text-muted">(optional)</span>
          </label>
          <textarea
            id="notes"
            rows={4}
            placeholder="Share any additional context, specific questions, or topics you'd like to cover during the session..."
            className="w-full resize-none rounded-xl border border-steel/50 bg-midnight/80 px-4 py-3 text-pure-white placeholder:text-muted outline-none transition-all duration-300 focus:border-electric/50 focus:ring-1 focus:ring-electric/30 focus:bg-midnight"
          />
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Progress Bar Component
// ---------------------------------------------------------------------------

function ProgressBar({ currentStep }: { currentStep: number }) {
  const steps = [
    { number: 1, label: "Challenge" },
    { number: 2, label: "Company" },
    { number: 3, label: "Schedule" },
  ];

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            {/* Step circle */}
            <div className="flex flex-col items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-500 ${
                  currentStep >= step.number
                    ? "border-electric bg-electric text-white"
                    : "border-steel/50 bg-midnight text-muted"
                }`}
              >
                {currentStep > step.number ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  step.number
                )}
              </div>
              <span
                className={`mt-2 text-xs font-medium transition-colors ${
                  currentStep >= step.number ? "text-electric" : "text-muted"
                }`}
              >
                {step.label}
              </span>
            </div>

            {/* Connector line */}
            {index < steps.length - 1 && (
              <div className="mx-4 h-0.5 flex-1 min-w-[60px] sm:min-w-[100px] rounded-full bg-steel/30">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-electric to-cyan-pulse"
                  initial={{ width: "0%" }}
                  animate={{
                    width: currentStep > step.number ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function BookConsultationClient() {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [selectedChallenge, setSelectedChallenge] = useState<string | null>(
    null,
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  const goNext = () => {
    if (currentStep < 3) {
      setDirection(1);
      setCurrentStep((prev) => prev + 1);
    } else {
      // Final submit
      setIsSubmitted(true);
    }
  };

  const goBack = () => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep((prev) => prev - 1);
    }
  };

  const canProceed =
    currentStep === 1 ? selectedChallenge !== null : true;

  if (isSubmitted) {
    return (
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-electric/5 blur-[120px]" />
        </div>
        <div className="relative mx-auto flex min-h-[80vh] max-w-2xl flex-col items-center justify-center px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 flex h-24 w-24 mx-auto items-center justify-center rounded-full bg-emerald/10">
              <CheckCircle2 className="h-12 w-12 text-emerald" />
            </div>
            <h2 className="mb-4 text-3xl font-bold text-pure-white sm:text-4xl">
              You&apos;re All Set!
            </h2>
            <p className="mb-8 text-lg text-cloud">
              Thank you for booking a consultation with Aixcel Solutions. Our
              team will reach out within 24 hours to confirm your session and
              share a meeting link.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="/" size="lg">
                Back to Home <ArrowRight className="h-5 w-5" />
              </Button>
              <Button href="/solutions" variant="secondary" size="lg">
                Explore Solutions
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-electric/5 blur-[120px]" />
        <div className="absolute top-1/2 right-0 h-[400px] w-[400px] rounded-full bg-cyan-pulse/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 pt-32 pb-32 sm:px-8 lg:px-12">
        {/* Page heading */}
        <SectionHeading
          eyebrow="Book a Consultation"
          heading="Let's Discuss Your AI Future"
          description="Complete the steps below to schedule your complimentary strategy session with our AI experts."
        />

        {/* Reassurance text */}
        <div className="mx-auto mb-10 flex items-center justify-center gap-2 rounded-full bg-emerald/5 border border-emerald/20 px-5 py-2.5 w-fit">
          <Shield className="h-4 w-4 text-emerald" />
          <span className="text-sm font-medium text-emerald">
            This is a complimentary 30-minute strategy session
          </span>
        </div>

        {/* Progress Bar */}
        <ProgressBar currentStep={currentStep} />

        {/* Step Content */}
        <Card padding="p-8 sm:p-10">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
            >
              {currentStep === 1 && (
                <Step1
                  selectedChallenge={selectedChallenge}
                  onSelect={setSelectedChallenge}
                />
              )}
              {currentStep === 2 && <Step2 />}
              {currentStep === 3 && <Step3 />}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="mt-10 flex items-center justify-between border-t border-steel/20 pt-8">
            <div>
              {currentStep > 1 && (
                <Button variant="ghost" onClick={goBack}>
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </Button>
              )}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted">
                Step {currentStep} of 3
              </span>
              <Button onClick={goNext} disabled={!canProceed}>
                {currentStep === 3 ? (
                  <>
                    Book Session <CheckCircle2 className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    Continue <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
