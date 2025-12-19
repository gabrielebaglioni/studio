import { Facebook, Instagram, Twitter } from 'lucide-react';

export const agencyConfig = {
  name: "QIA",
  fullName: "Quick Impact Agency",
  description: "We restore damaged ecosystems and empower humanity. We assist Corporations, Institutions and Individuals to solve social and ecological problems.",
  footerCopyright: `© ${new Date().getFullYear()} QIA. All rights reserved.`,
  trustNote: "QIA is not affiliated to any Cult, Religious groups, Governmental or Non-Governmental Organization whatsoever."
};

export const navLinks = [
  { name: 'Our Agency', href: '#our-agency' },
  { name: 'Together', href: '#together' },
  { name: 'Programs', href: '#programs' },
  { name: 'Project Land', href: '#project-land' },
  { name: 'Mission & Vision', href: '#mission-vision' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Partner', href: '#partner' },
];

export const socialLinks = [
  { name: 'Twitter', href: '#', Icon: Twitter },
  { name: 'Instagram', href: '#', Icon: Instagram },
  { name: 'Facebook', href: '#', Icon: Facebook },
];

export type Program = {
  name: string;
  subtitle: string;
  description: string;
  ctas: {
    primary: string;
    secondary: string;
  };
  sequence: {
    baseUrl: string;
    frameCount: number;
    padLength: number;
    fileExtension: string;
  };
};

export const programs: Program[] = [
  {
    name: "CLIMATE",
    subtitle: "CHANGE MITIGATION",
    description: "We collaborate and partner with corporations, institutions and individuals to repair, reclaim, and revive damaged lands, forests, and water bodies.",
    ctas: { primary: "BECOME A PARTNER", secondary: "LEARN ABOUT US" },
    sequence: {
      baseUrl: "https://xnuhligbmtlwrzemwgmv.supabase.co/storage/v1/object/public/climateChange/frame_",
      frameCount: 80,
      padLength: 6,
      fileExtension: ".webp",
    },
  },
  {
    name: "FOOD",
    subtitle: "SECURITY",
    description: "We provide assistance and support to local farmers to increase food production in a more sustainable and organic way.",
    ctas: { primary: "JOIN THE MOVEMENT", secondary: "OUR PROJECTS" },
    sequence: {
      baseUrl: "https://xnuhligbmtlwrzemwgmv.supabase.co/storage/v1/object/public/globe-animation/frame_",
      frameCount: 120,
      padLength: 6,
      fileExtension: ".webp",
    },
  },
  {
    name: "SOCIAL",
    subtitle: "IMBALANCE",
    description: "We customized and execute programmes and projects to mitigate imbalance in our society.",
    ctas: { primary: "GET INVOLVED", secondary: "READ MORE" },
    sequence: {
      baseUrl: "https://xnuhligbmtlwrzemwgmv.supabase.co/storage/v1/object/public/socialAnimation/frame_",
      frameCount: 160,
      padLength: 6,
      fileExtension: ".webp",
    },
  },
];

export const content = {
  ourAgency: {
    id: "our-agency",
    headline: "We provide customized solutions for devastating situations in our environment and society.",
    body: "As an emerging global catalyst for social and ecological solutions, the work we do at QIA is vital for the protection and preservation of our ecosystem as well as installing balance and harmony in our society. We design and develop Quick Impact Projects to mitigate devastating situations in our global village.",
    cta: "Learn About Us"
  },
  together: {
    id: "together",
    headline: "Together, empowering communities for sustainable development.",
    body: "We are honored to embark on a mission to make our world a better place with those who believe we can.",
    cta: "Become a Partner Now",
    cards: [
      { title: "Local Engagement", description: "We work hand in hand with locals to give them ownership, responsibility, and accountability for long-term sustainable impact." },
      { title: "Collective Action", description: "We work with the general public, institutions, and corporations to amplify efforts and drive meaningful change." },
    ]
  },
  programs: {
    id: "programs",
    intro: "Positively impacting communities through strategically customized and sustainable programs.",
    cards: [
      { title: "Climate Change Mitigation", description: "We collaborate to repair, reclaim, and revive damaged lands, forests, and water bodies." },
      { title: "Food Security", description: "We support local farmers to increase food production in a sustainable and organic way." },
      { title: "Social Imbalance", description: "We customize and execute programmes and projects to mitigate imbalance in our society." },
    ]
  },
  partnerFeature: {
    id: "partner-feature",
    headline: "Revitalize Our Planet: The Power of Ecosystem Restoration for a Greener Future",
    body: "Ecosystem restoration enhances biodiversity and combats climate change, protecting wildlife while creating healthier communities and sustainable livelihoods."
  },
  becomePartner: {
    id: "become-partner",
    headline: "Become an Agent of Positive Impact",
    body: "We are the Earth’s new hope for restoration. We bring balance into our society and the environment.",
    logoMeaning: [
      { id: "partner-logo-1", text: "Two leaves representing vegetation" },
      { id: "partner-logo-2", text: "A circle representing the globe" },
      { id: "partner-logo-3", text: "Together they represent humanity and its environment" }
    ]
  },
  missionVision: {
    id: "mission-vision",
    vision: {
      title: "Vision",
      text: "To co-create a connected, sustainable, and prosperous future for the earth and its inhabitants."
    },
    mission: {
      title: "Mission",
      text: "To restore and revive damaged ecosystems and build thriving communities."
    },
    whatWeDo: {
      title: "What We Do",
      items: [
        "Reclaim and repair degraded lands and water bodies.",
        "Assist local farmers with sustainable farm solutions.",
        "Develop and implement customized social improvement programs.",
      ]
    }
  },
  projectLand: {
    id: "project-land",
    headline: "Project Land — Revive and Thrive",
    closingLine: "Let’s turn devastation into creation.",
    cta: "Become a Partner Now",
    details: [
      { title: "Where?", text: "Humjibre, Ghana." },
      { title: "Why?", text: "Hotspot for illegal gold mining and environmental degradation." },
      { title: "How?", text: "Local landowners partner with QIA and grant exclusive rights to restore their land and revive the ecosystem. Focus on soil health, biodiversity conservation and local integration. We create real economic opportunities through carbon offset and healthy ecosystems." },
    ]
  },
  foodSecurity: {
    id: "food-security",
    headline: "Secure production instead of disruption.",
    body: "QIA helps transform food systems to be climate resilient, nutrition-sensitive and sustainable. We support farmers with organic and nano-technological farm solutions, micro-financing loans and sustainable techniques, and organize logistics to move produce to consumers.",
    cta: "Join the Movement",
    details: [
      { title: "Where?", text: "Starting in Ghana and expanding across Africa." },
      { title: "Why?", text: "Agricultural economies with high dependence on commercial inputs and limited resources." },
      { title: "How?", text: "Training workshops, sustainable solutions, financing, and distribution networks." },
    ]
  },
  socialImbalance: {
    id: "social-imbalance",
    headline: "Practical programs for social balance.",
    body: "QIA assists minorities to overcome challenges of isolation, migration and economic inequality. We customize practical social programs in affected areas; first projects will be initiated and published soon."
  },
  gallery: {
    id: "gallery",
    title: "Gallery",
    imageIds: ["gallery-1", "gallery-2", "gallery-3", "gallery-4", "gallery-5", "gallery-6"]
  },

  partnerForm: {
    id: "partner",
    headline: "Join Us in Making a Difference",
    subtext: "Your support can help restore ecosystems and empower communities. Partner with us or donate today.",
    ctas: {
      primary: "Become a Partner",
      secondary: "Donate Now"
    }
  }
};
