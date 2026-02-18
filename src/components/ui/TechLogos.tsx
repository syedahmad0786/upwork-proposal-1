'use client';

import type { ComponentType } from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

/* ─── Real brand logos with ORIGINAL colors ─── */

export function OpenAILogo({ size = 24 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" fill="#10A37F"/>
    </svg>
  );
}

export function ClaudeLogo({ size = 24 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M16.98 9.01L12.02 3 7.02 9.01 12.02 14l4.96-4.99z" fill="#D97706"/>
      <path d="M12.02 14L7.02 9.01 3 12.02l9.02 8.98 9.02-8.98-4.04-3.01L12.02 14z" fill="#D97706" opacity="0.7"/>
    </svg>
  );
}

export function N8nLogo({ size = 24 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="8" width="6" height="8" rx="1.5" stroke="#EA4B71" strokeWidth="1.8" fill="none"/>
      <rect x="9" y="6" width="6" height="12" rx="1.5" stroke="#EA4B71" strokeWidth="1.8" fill="none"/>
      <rect x="16" y="8" width="6" height="8" rx="1.5" stroke="#EA4B71" strokeWidth="1.8" fill="none"/>
      <line x1="8" y1="12" x2="9" y2="12" stroke="#EA4B71" strokeWidth="1.8"/>
      <line x1="15" y1="12" x2="16" y2="12" stroke="#EA4B71" strokeWidth="1.8"/>
    </svg>
  );
}

export function MakeLogo({ size = 24 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#6D00CC"/>
      <path d="M8 12l2.5-4h3L16 12l-2.5 4h-3L8 12z" fill="white"/>
    </svg>
  );
}

export function ZapierLogo({ size = 24 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M15.07 8.93h5.34L15.88 12l4.53 3.07h-5.34L12 19.6l-3.07-4.53H3.59L8.12 12 3.59 8.93h5.34L12 4.4l3.07 4.53z" fill="#FF4A00"/>
      <circle cx="12" cy="12" r="3" fill="#FF4A00"/>
    </svg>
  );
}

export function HubSpotLogo({ size = 24 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.984v-.066A2.2 2.2 0 0017.232.836h-.066a2.2 2.2 0 00-2.2 2.198v.066c0 .87.51 1.618 1.244 1.975v2.856a5.89 5.89 0 00-2.893 1.381l-7.68-5.972a2.326 2.326 0 00.076-.562 2.334 2.334 0 10-2.334 2.334c.35 0 .68-.08.978-.218l7.543 5.868a5.9 5.9 0 00-.898 3.12 5.91 5.91 0 001.037 3.344l-2.19 2.19a1.836 1.836 0 00-.534-.082 1.856 1.856 0 101.856 1.856c0-.188-.03-.369-.082-.542l2.154-2.154a5.896 5.896 0 008.412-1.1 5.878 5.878 0 00-3.543-9.198zm-.964 8.378a2.946 2.946 0 110-5.893 2.946 2.946 0 010 5.893z" fill="#FF7A59"/>
    </svg>
  );
}

export function SalesforceLogo({ size = 24 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M10.05 4.4a4.4 4.4 0 0 1 3.81 2.2 3.68 3.68 0 0 1 5.34 3.28 3.78 3.78 0 0 1-.04.54 3.3 3.3 0 0 1 1.94 3 3.32 3.32 0 0 1-3.32 3.32h-.2a3.82 3.82 0 0 1-3.4 2.08 3.78 3.78 0 0 1-1.7-.4 4.56 4.56 0 0 1-7.62-1.16A4 4 0 0 1 1 13.6a4.02 4.02 0 0 1 2.86-3.84 4.5 4.5 0 0 1 6.19-5.36z" fill="#00A1E0"/>
    </svg>
  );
}

export function SlackLogo({ size = 24 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/>
      <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/>
      <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2EB67D"/>
      <path d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#ECB22E"/>
    </svg>
  );
}

export function GoHighLevelLogo({ size = 24 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#4CAF50"/>
      <path d="M12 2v20l9-5V7l-9-5z" fill="#388E3C"/>
      <path d="M8 10l4 6 4-6h-3V8h-2v2H8z" fill="white"/>
    </svg>
  );
}

export function AirtableLogo({ size = 24 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M11.52 1.59l-8.38 3.06a.75.75 0 0 0 0 1.4l8.39 3.13a1.5 1.5 0 0 0 1.06 0l8.39-3.13a.75.75 0 0 0 0-1.4l-8.4-3.06a1.5 1.5 0 0 0-1.06 0z" fill="#FCB400"/>
      <path d="M12.56 10.42v9.7a.5.5 0 0 0 .68.47l8.88-3.47a.5.5 0 0 0 .32-.47V7.02a.5.5 0 0 0-.67-.47l-8.89 3.4a.5.5 0 0 0-.32.47z" fill="#18BFFF"/>
      <path d="M11.44 10.42v9.7a.5.5 0 0 1-.68.47l-8.88-3.47a.5.5 0 0 1-.32-.47V7.02a.5.5 0 0 1 .67-.47l8.89 3.4a.5.5 0 0 1 .32.47z" fill="#F82B60"/>
    </svg>
  );
}

export function VapiLogo({ size = 24 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#5B21B6"/>
      <path d="M8 8l4 8 4-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function ElevenLabsLogo({ size = 24 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#000"/>
      <rect x="8" y="4" width="3" height="16" rx="1" fill="white"/>
      <rect x="13" y="4" width="3" height="16" rx="1" fill="white"/>
    </svg>
  );
}

export function TwilioLogo({ size = 24 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill="#F22F46"/>
      <circle cx="9.5" cy="9.5" r="1.8" fill="white"/>
      <circle cx="14.5" cy="9.5" r="1.8" fill="white"/>
      <circle cx="9.5" cy="14.5" r="1.8" fill="white"/>
      <circle cx="14.5" cy="14.5" r="1.8" fill="white"/>
    </svg>
  );
}

export function VercelLogo({ size = 24 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 1L24 22H0L12 1Z" fill="#FFFFFF"/>
    </svg>
  );
}

export function SupabaseLogo({ size = 24 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M13.36 21.89c-.46.58-1.37.2-1.37-.57V13h8.78c.85 0 1.31 1 .75 1.63l-8.16 7.26z" fill="#3ECF8E"/>
      <path d="M13.36 21.89c-.46.58-1.37.2-1.37-.57V13h8.78c.85 0 1.31 1 .75 1.63l-8.16 7.26z" fill="url(#sb-a)" fillOpacity="0.2"/>
      <path d="M10.64 2.11c.46-.58 1.37-.2 1.37.57V11H3.23c-.85 0-1.31-1-.75-1.63l8.16-7.26z" fill="#3ECF8E"/>
      <defs>
        <linearGradient id="sb-a" x1="11.99" y1="14.46" x2="17.99" y2="18.46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#249361"/>
          <stop offset="1" stopColor="#3ECF8E"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function StripeLogo({ size = 24 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z" fill="#635BFF"/>
    </svg>
  );
}

/* ─── Tool data with brand logos ─── */
export interface TechTool {
  name: string;
  icon?: ComponentType<LogoProps>;
}

export const techTools: TechTool[] = [
  { name: 'OpenAI', icon: OpenAILogo },
  { name: 'Claude AI', icon: ClaudeLogo },
  { name: 'n8n', icon: N8nLogo },
  { name: 'Make.com', icon: MakeLogo },
  { name: 'Zapier', icon: ZapierLogo },
  { name: 'HubSpot', icon: HubSpotLogo },
  { name: 'Salesforce', icon: SalesforceLogo },
  { name: 'Slack', icon: SlackLogo },
  { name: 'GoHighLevel', icon: GoHighLevelLogo },
  { name: 'Airtable', icon: AirtableLogo },
  { name: 'Vapi', icon: VapiLogo },
  { name: 'ElevenLabs', icon: ElevenLabsLogo },
  { name: 'Twilio', icon: TwilioLogo },
  { name: 'Vercel', icon: VercelLogo },
  { name: 'Supabase', icon: SupabaseLogo },
  { name: 'Stripe', icon: StripeLogo },
];

export function TechLogoItem({ tool }: { tool: TechTool }) {
  const IconComponent = tool.icon;
  return (
    <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm hover:border-electric/30 hover:bg-white/[0.08] hover:shadow-[0_8px_32px_rgba(59,130,246,0.1)] transition-all duration-300 flex-shrink-0">
      {IconComponent && <IconComponent size={20} />}
      <span className="text-sm font-semibold text-white/80 whitespace-nowrap">{tool.name}</span>
    </div>
  );
}
