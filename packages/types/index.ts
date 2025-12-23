/**
 * Project Model - Source of Truth
 * Centralized type definitions for projects across all microfrontends
 */

/**
 * Project ID (slug) - lowercase version of project name
 */
export type ProjectId = 'climate' | 'food' | 'social';

/**
 * Project sequence configuration for canvas animations
 */
export interface ProjectSequence {
  baseUrl: string;
  frameCount: number;
  padLength: number;
  fileExtension: string;
}

/**
 * Project details content (for /projects/[slug])
 */
export interface ProjectDetails {
  heroImage?: string;
  heroVideo?: string;
  sections: Array<{
    title: string;
    content: string;
    image?: string;
    video?: string;
  }>;
  impact: {
    title: string;
    metrics: Array<{
      label: string;
      value: string;
    }>;
  };
}

/**
 * Support page content (for /support/[slug])
 */
export interface SupportContent {
  heroImage?: string;
  heroVideo?: string;
  description: string;
  suggestedAmounts: number[];
  defaultAmount?: number;
}

/**
 * Project data structure
 */
export interface Project {
  id: ProjectId;
  name: string;
  subtitle: string;
  description: string;
  ctas: {
    primary: string;
    secondary: string;
  };
  sequence: ProjectSequence;
  details?: ProjectDetails;
  support?: SupportContent;
}

/**
 * All available projects - Source of Truth
 */
export const PROJECTS: Project[] = [
  {
    id: 'climate',
    name: 'CLIMATE',
    subtitle: 'CHANGE MITIGATION',
    description: 'We collaborate and partner with corporations, institutions and individuals to repair, reclaim, and revive damaged lands, forests, and water bodies.',
    ctas: { primary: 'BECOME A PARTNER', secondary: 'LEARN ABOUT US' },
    sequence: {
      baseUrl: 'https://xnuhligbmtlwrzemwgmv.supabase.co/storage/v1/object/public/climateChange/frame_',
      frameCount: 80,
      padLength: 6,
      fileExtension: '.webp',
    },
    details: {
      heroImage: 'https://xnuhligbmtlwrzemwgmv.supabase.co/storage/v1/object/public/climateChange/frame_000001.webp',
      sections: [
        {
          title: 'Where?',
          content: 'Humjibre, Ghana. A hotspot for illegal gold mining and environmental degradation.',
          image: 'https://xnuhligbmtlwrzemwgmv.supabase.co/storage/v1/object/public/climateChange/frame_000001.webp',
        },
        {
          title: 'Why?',
          content: 'Hotspot for illegal gold mining and environmental degradation. The land has been severely damaged, requiring urgent restoration efforts.',
        },
        {
          title: 'How?',
          content: 'Local landowners partner with QIA and grant exclusive rights to restore their land and revive the ecosystem. Focus on soil health, biodiversity conservation and local integration. We create real economic opportunities through carbon offset and healthy ecosystems.',
        },
      ],
      impact: {
        title: 'Impact',
        metrics: [
          { label: 'Land Restored', value: '500+ hectares' },
          { label: 'Trees Planted', value: '50,000+' },
          { label: 'Communities Impacted', value: '10+' },
        ],
      },
    },
    support: {
      heroImage: 'https://xnuhligbmtlwrzemwgmv.supabase.co/storage/v1/object/public/climateChange/frame_000001.webp',
      description: 'Support our climate change mitigation efforts. Your contribution helps restore damaged lands, forests, and water bodies, creating a sustainable future for generations to come.',
      suggestedAmounts: [25, 50, 100, 250, 500],
      defaultAmount: 50,
    },
  },
  {
    id: 'food',
    name: 'FOOD',
    subtitle: 'SECURITY',
    description: 'We provide assistance and support to local farmers to increase food production in a more sustainable and organic way.',
    ctas: { primary: 'JOIN THE MOVEMENT', secondary: 'OUR PROJECTS' },
    sequence: {
      baseUrl: 'https://xnuhligbmtlwrzemwgmv.supabase.co/storage/v1/object/public/globe-animation/frame_',
      frameCount: 120,
      padLength: 6,
      fileExtension: '.webp',
    },
    details: {
      heroImage: 'https://xnuhligbmtlwrzemwgmv.supabase.co/storage/v1/object/public/globe-animation/frame_000001.webp',
      sections: [
        {
          title: 'Where?',
          content: 'Starting in Ghana and expanding across Africa.',
          image: 'https://xnuhligbmtlwrzemwgmv.supabase.co/storage/v1/object/public/globe-animation/frame_000001.webp',
        },
        {
          title: 'Why?',
          content: 'Agricultural economies with high dependence on commercial inputs and limited resources. Farmers need sustainable solutions to increase production.',
        },
        {
          title: 'How?',
          content: 'Training workshops, sustainable solutions, financing, and distribution networks. We support farmers with organic and nano-technological farm solutions, micro-financing loans and sustainable techniques, and organize logistics to move produce to consumers.',
        },
      ],
      impact: {
        title: 'Impact',
        metrics: [
          { label: 'Farmers Supported', value: '500+' },
          { label: 'Food Production Increase', value: '40%' },
          { label: 'Communities Reached', value: '25+' },
        ],
      },
    },
    support: {
      heroImage: 'https://xnuhligbmtlwrzemwgmv.supabase.co/storage/v1/object/public/globe-animation/frame_000001.webp',
      description: 'Support food security initiatives. Your donation helps local farmers increase food production sustainably, ensuring communities have access to nutritious food.',
      suggestedAmounts: [20, 50, 100, 200, 500],
      defaultAmount: 50,
    },
  },
  {
    id: 'social',
    name: 'SOCIAL',
    subtitle: 'IMBALANCE',
    description: 'We customized and execute programmes and projects to mitigate imbalance in our society.',
    ctas: { primary: 'GET INVOLVED', secondary: 'READ MORE' },
    sequence: {
      baseUrl: 'https://xnuhligbmtlwrzemwgmv.supabase.co/storage/v1/object/public/socialAnimation/frame_',
      frameCount: 112,
      padLength: 6,
      fileExtension: '.webp',
    },
    details: {
      heroImage: 'https://xnuhligbmtlwrzemwgmv.supabase.co/storage/v1/object/public/socialAnimation/frame_000001.webp',
      sections: [
        {
          title: 'Our Mission',
          content: 'QIA assists minorities to overcome challenges of isolation, migration and economic inequality. We customize practical social programs in affected areas.',
        },
        {
          title: 'Programs',
          content: 'First projects will be initiated and published soon. We focus on creating opportunities for marginalized communities and promoting social balance.',
        },
      ],
      impact: {
        title: 'Impact',
        metrics: [
          { label: 'Programs Launched', value: '5+' },
          { label: 'People Helped', value: '1,000+' },
          { label: 'Communities Served', value: '15+' },
        ],
      },
    },
    support: {
      heroImage: 'https://xnuhligbmtlwrzemwgmv.supabase.co/storage/v1/object/public/socialAnimation/frame_000001.webp',
      description: 'Support social balance initiatives. Your contribution helps us create programs that assist minorities and promote equality in our communities.',
      suggestedAmounts: [30, 75, 150, 300, 750],
      defaultAmount: 75,
    },
  },
];

/**
 * Get project by ID
 */
export function getProjectById(id: ProjectId): Project | undefined {
  return PROJECTS.find((p) => p.id === id);
}

/**
 * Get project by name (uppercase)
 */
export function getProjectByName(name: string): Project | undefined {
  return PROJECTS.find((p) => p.name === name);
}

/**
 * Check if a string is a valid project ID
 */
export function isValidProjectId(id: string): id is ProjectId {
  return PROJECTS.some((p) => p.id === id);
}

