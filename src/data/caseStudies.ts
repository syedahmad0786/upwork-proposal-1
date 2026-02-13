export interface CaseStudyResult {
  metric: string;
  value: string;
  description: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: CaseStudyResult[];
  testimonial: string;
  image: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "meridian-financial-ai-agents",
    title: "Autonomous Document Processing for a Fortune 500 Financial Services Firm",
    client: "Meridian Financial Group",
    industry: "Financial Services",
    challenge:
      "Meridian Financial Group processed over 15,000 loan applications monthly across 12 regional offices, relying on a fragmented system of manual data entry, email-based approvals, and legacy software. Processing a single application required an average of 4.5 hours of human labor, with a 12% error rate that led to costly rework, compliance flags, and customer dissatisfaction. The operations team was under mounting pressure to scale throughput without proportional headcount increases.",
    solution:
      "Aixcel Solutions deployed a multi-agent orchestration system comprising specialized AI agents for document intake, data extraction, credit analysis, compliance verification, and decision routing. The system integrates directly with Meridian's existing CRM, core banking platform, and document management system via secure APIs. Each agent was trained on Meridian's specific underwriting criteria and regulatory requirements, with a human-in-the-loop escalation path for edge cases. A real-time dashboard provides operations leadership with full visibility into pipeline status, agent performance, and exception handling.",
    results: [
      {
        metric: "Processing Time",
        value: "95%",
        description:
          "Reduction in per-application processing time, from 4.5 hours to under 14 minutes end-to-end.",
      },
      {
        metric: "Error Rate",
        value: "99.2%",
        description:
          "Reduction in data entry and processing errors, virtually eliminating costly rework and compliance flags.",
      },
      {
        metric: "Annual Savings",
        value: "$2.8M",
        description:
          "In operational cost savings within the first year of deployment, driven by reduced labor and error remediation.",
      },
      {
        metric: "Throughput",
        value: "3x",
        description:
          "Increase in monthly application throughput without any additional headcount or infrastructure investment.",
      },
    ],
    testimonial:
      "The AI agent system Aixcel Solutions built has fundamentally changed how we operate. What used to take a team of 40 people now runs autonomously with better accuracy than we ever achieved manually. -- Sarah Chen, COO, Meridian Financial Group",
    image: "/images/case-studies/meridian-financial.jpg",
  },
  {
    slug: "novatech-voice-ai",
    title: "Enterprise Voice AI Platform for a Global Technology Support Operation",
    client: "NovaTech Industries",
    industry: "Technology",
    challenge:
      "NovaTech Industries operated a 200-seat contact center handling technical support for enterprise software products across North America, Europe, and APAC. Average hold times exceeded 8 minutes during peak hours, first-call resolution sat at 62%, and annual agent attrition was 45% -- driving recruitment and training costs above $3M per year. Customer satisfaction scores had declined for three consecutive quarters, putting key enterprise contracts at risk.",
    solution:
      "Aixcel Solutions designed and deployed a conversational AI platform with voice agents trained on NovaTech's complete product documentation, knowledge base, and historical ticket data. The system features sub-500ms response latency, multi-language support for 8 languages, and intelligent escalation logic that routes complex issues to specialized human agents with full conversation context. A real-time sentiment analysis engine monitors every interaction, flagging at-risk conversations for immediate supervisor review.",
    results: [
      {
        metric: "Call Resolution",
        value: "94%",
        description:
          "First-call resolution rate achieved by AI voice agents, up from 62% under the previous human-only model.",
      },
      {
        metric: "Hold Time",
        value: "0 sec",
        description:
          "Average customer hold time eliminated entirely -- every call is answered immediately by an AI agent.",
      },
      {
        metric: "Cost Savings",
        value: "58%",
        description:
          "Reduction in contact center operating costs, including agent labor, training, recruitment, and infrastructure.",
      },
      {
        metric: "CSAT Score",
        value: "4.7/5",
        description:
          "Customer satisfaction score, representing a 31% improvement over the previous quarterly benchmark.",
      },
    ],
    testimonial:
      "The voice AI platform handles over 3,000 calls daily with quality that consistently exceeds what our best human agents delivered. Customers rate the experience higher, costs are down 58%, and our remaining human agents now focus exclusively on complex, high-value interactions. -- Marcus Rivera, VP of Customer Experience, NovaTech Industries",
    image: "/images/case-studies/novatech-voice.jpg",
  },
  {
    slug: "vertex-process-automation",
    title: "End-to-End Supply Chain Automation for a Mid-Market Manufacturer",
    client: "Vertex Manufacturing",
    industry: "Manufacturing",
    challenge:
      "Vertex Manufacturing managed a supply chain spanning 200+ vendors, 3 production facilities, and 8 distribution centers -- all coordinated through a patchwork of spreadsheets, email threads, and disconnected software systems. Order processing required manual data entry across 5 separate platforms, resulting in a 72-hour average order-to-fulfillment cycle. Inventory discrepancies cost the company an estimated $1.8M annually in expedited shipping, stockouts, and excess inventory carrying costs.",
    solution:
      "Aixcel Solutions implemented an intelligent process automation platform that unified Vertex's ERP, WMS, TMS, and vendor management systems into a single orchestrated workflow. The solution features automated purchase order generation based on predictive demand modeling, real-time inventory synchronization across all facilities, and AI-powered exception handling that autonomously resolves 87% of supply chain disruptions without human intervention. A centralized command dashboard provides operations leadership with real-time visibility into every order, shipment, and inventory position across the entire network.",
    results: [
      {
        metric: "Fulfillment Cycle",
        value: "18 hrs",
        description:
          "Average order-to-fulfillment cycle reduced from 72 hours to 18 hours, a 75% improvement in speed-to-customer.",
      },
      {
        metric: "Inventory Accuracy",
        value: "99.7%",
        description:
          "Real-time inventory accuracy across all facilities, virtually eliminating stockouts and excess inventory.",
      },
      {
        metric: "Systems Connected",
        value: "14",
        description:
          "Previously disconnected platforms unified into a single automated workflow with real-time data synchronization.",
      },
      {
        metric: "Annual Savings",
        value: "$1.2M",
        description:
          "In operational cost reduction from eliminated manual processes, reduced errors, and optimized inventory management.",
      },
    ],
    testimonial:
      "Aixcel Solutions connected 14 systems that had never talked to each other and turned our supply chain from a liability into a competitive advantage. Order processing that took three days now happens in hours, and inventory accuracy went from a constant headache to a solved problem. -- Anika Patel, Head of Process Excellence, Vertex Manufacturing",
    image: "/images/case-studies/vertex-manufacturing.jpg",
  },
];
