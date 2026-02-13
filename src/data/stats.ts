export interface Stat {
  metric: string;
  value: number;
  suffix: string;
  description: string;
}

export const stats: Stat[] = [
  {
    metric: "Projects Delivered",
    value: 200,
    suffix: "+",
    description:
      "Enterprise AI automation projects successfully deployed across financial services, healthcare, manufacturing, and technology sectors worldwide.",
  },
  {
    metric: "Client Retention",
    value: 97,
    suffix: "%",
    description:
      "Of Aixcel Solutions clients continue with ongoing engagements or return for additional projects -- a testament to consistent delivery and measurable impact.",
  },
  {
    metric: "Average Cost Reduction",
    value: 40,
    suffix: "%",
    description:
      "Average operational cost reduction achieved across all client engagements through intelligent automation, process optimization, and AI-driven efficiency gains.",
  },
  {
    metric: "AI Response Time",
    value: 500,
    suffix: "ms",
    description:
      "Sub-500-millisecond response latency across voice AI and real-time agent deployments, ensuring seamless user experiences indistinguishable from human interaction.",
  },
];
