module.exports = [
"[project]/packages/types/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Project Model - Source of Truth
 * Centralized type definitions for projects across all microfrontends
 */ /**
 * Project ID (slug) - lowercase version of project name
 */ __turbopack_context__.s([
    "PROJECTS",
    ()=>PROJECTS,
    "getProjectById",
    ()=>getProjectById,
    "getProjectByName",
    ()=>getProjectByName,
    "isValidProjectId",
    ()=>isValidProjectId
]);
const PROJECTS = [
    {
        id: 'climate',
        name: 'CLIMATE',
        subtitle: 'CHANGE MITIGATION',
        description: 'We collaborate and partner with corporations, institutions and individuals to repair, reclaim, and revive damaged lands, forests, and water bodies.',
        ctas: {
            primary: 'BECOME A PARTNER',
            secondary: 'LEARN ABOUT US'
        },
        sequence: {
            baseUrl: 'https://xnuhligbmtlwrzemwgmv.supabase.co/storage/v1/object/public/climateChange/frame_',
            frameCount: 80,
            padLength: 6,
            fileExtension: '.webp'
        },
        details: {
            heroImage: 'https://xnuhligbmtlwrzemwgmv.supabase.co/storage/v1/object/public/climateChange/frame_000001.webp',
            sections: [
                {
                    title: 'Where?',
                    content: 'Humjibre, Ghana. A hotspot for illegal gold mining and environmental degradation.',
                    image: 'https://xnuhligbmtlwrzemwgmv.supabase.co/storage/v1/object/public/climateChange/frame_000001.webp'
                },
                {
                    title: 'Why?',
                    content: 'Hotspot for illegal gold mining and environmental degradation. The land has been severely damaged, requiring urgent restoration efforts.'
                },
                {
                    title: 'How?',
                    content: 'Local landowners partner with QIA and grant exclusive rights to restore their land and revive the ecosystem. Focus on soil health, biodiversity conservation and local integration. We create real economic opportunities through carbon offset and healthy ecosystems.'
                }
            ],
            impact: {
                title: 'Impact',
                metrics: [
                    {
                        label: 'Land Restored',
                        value: '500+ hectares'
                    },
                    {
                        label: 'Trees Planted',
                        value: '50,000+'
                    },
                    {
                        label: 'Communities Impacted',
                        value: '10+'
                    }
                ]
            }
        },
        support: {
            heroImage: 'https://xnuhligbmtlwrzemwgmv.supabase.co/storage/v1/object/public/climateChange/frame_000001.webp',
            description: 'Support our climate change mitigation efforts. Your contribution helps restore damaged lands, forests, and water bodies, creating a sustainable future for generations to come.',
            suggestedAmounts: [
                25,
                50,
                100,
                250,
                500
            ],
            defaultAmount: 50
        }
    },
    {
        id: 'food',
        name: 'FOOD',
        subtitle: 'SECURITY',
        description: 'We provide assistance and support to local farmers to increase food production in a more sustainable and organic way.',
        ctas: {
            primary: 'JOIN THE MOVEMENT',
            secondary: 'OUR PROJECTS'
        },
        sequence: {
            baseUrl: 'https://xnuhligbmtlwrzemwgmv.supabase.co/storage/v1/object/public/globe-animation/frame_',
            frameCount: 120,
            padLength: 6,
            fileExtension: '.webp'
        },
        details: {
            heroImage: 'https://xnuhligbmtlwrzemwgmv.supabase.co/storage/v1/object/public/globe-animation/frame_000001.webp',
            sections: [
                {
                    title: 'Where?',
                    content: 'Starting in Ghana and expanding across Africa.',
                    image: 'https://xnuhligbmtlwrzemwgmv.supabase.co/storage/v1/object/public/globe-animation/frame_000001.webp'
                },
                {
                    title: 'Why?',
                    content: 'Agricultural economies with high dependence on commercial inputs and limited resources. Farmers need sustainable solutions to increase production.'
                },
                {
                    title: 'How?',
                    content: 'Training workshops, sustainable solutions, financing, and distribution networks. We support farmers with organic and nano-technological farm solutions, micro-financing loans and sustainable techniques, and organize logistics to move produce to consumers.'
                }
            ],
            impact: {
                title: 'Impact',
                metrics: [
                    {
                        label: 'Farmers Supported',
                        value: '500+'
                    },
                    {
                        label: 'Food Production Increase',
                        value: '40%'
                    },
                    {
                        label: 'Communities Reached',
                        value: '25+'
                    }
                ]
            }
        },
        support: {
            heroImage: 'https://xnuhligbmtlwrzemwgmv.supabase.co/storage/v1/object/public/globe-animation/frame_000001.webp',
            description: 'Support food security initiatives. Your donation helps local farmers increase food production sustainably, ensuring communities have access to nutritious food.',
            suggestedAmounts: [
                20,
                50,
                100,
                200,
                500
            ],
            defaultAmount: 50
        }
    },
    {
        id: 'social',
        name: 'SOCIAL',
        subtitle: 'IMBALANCE',
        description: 'We customized and execute programmes and projects to mitigate imbalance in our society.',
        ctas: {
            primary: 'GET INVOLVED',
            secondary: 'READ MORE'
        },
        sequence: {
            baseUrl: 'https://xnuhligbmtlwrzemwgmv.supabase.co/storage/v1/object/public/socialAnimation/frame_',
            frameCount: 112,
            padLength: 6,
            fileExtension: '.webp'
        },
        details: {
            heroImage: 'https://xnuhligbmtlwrzemwgmv.supabase.co/storage/v1/object/public/socialAnimation/frame_000001.webp',
            sections: [
                {
                    title: 'Our Mission',
                    content: 'QIA assists minorities to overcome challenges of isolation, migration and economic inequality. We customize practical social programs in affected areas.'
                },
                {
                    title: 'Programs',
                    content: 'First projects will be initiated and published soon. We focus on creating opportunities for marginalized communities and promoting social balance.'
                }
            ],
            impact: {
                title: 'Impact',
                metrics: [
                    {
                        label: 'Programs Launched',
                        value: '5+'
                    },
                    {
                        label: 'People Helped',
                        value: '1,000+'
                    },
                    {
                        label: 'Communities Served',
                        value: '15+'
                    }
                ]
            }
        },
        support: {
            heroImage: 'https://xnuhligbmtlwrzemwgmv.supabase.co/storage/v1/object/public/socialAnimation/frame_000001.webp',
            description: 'Support social balance initiatives. Your contribution helps us create programs that assist minorities and promote equality in our communities.',
            suggestedAmounts: [
                30,
                75,
                150,
                300,
                750
            ],
            defaultAmount: 75
        }
    }
];
function getProjectById(id) {
    return PROJECTS.find((p)=>p.id === id);
}
function getProjectByName(name) {
    return PROJECTS.find((p)=>p.name === name);
}
function isValidProjectId(id) {
    return PROJECTS.some((p)=>p.id === id);
}
}),
"[project]/apps/shell/src/lib/data.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "agencyConfig",
    ()=>agencyConfig,
    "content",
    ()=>content,
    "navLinks",
    ()=>navLinks,
    "programs",
    ()=>programs,
    "socialLinks",
    ()=>socialLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.475.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/facebook.js [app-ssr] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.475.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/instagram.js [app-ssr] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.475.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/twitter.js [app-ssr] (ecmascript) <export default as Twitter>");
// Import first, then re-export
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/types/index.ts [app-ssr] (ecmascript)");
;
const agencyConfig = {
    name: "QIA",
    fullName: "Quick Impact Agency",
    description: "We restore damaged ecosystems and empower humanity. We assist Corporations, Institutions and Individuals to solve social and ecological problems.",
    footerCopyright: `© ${new Date().getFullYear()} QIA. All rights reserved.`,
    trustNote: "QIA is not affiliated to any Cult, Religious groups, Governmental or Non-Governmental Organization whatsoever."
};
const navLinks = [
    {
        name: 'Our Agency',
        href: '#our-agency'
    },
    {
        name: 'Together',
        href: '#together'
    },
    {
        name: 'Programs',
        href: '#programs'
    },
    {
        name: 'Project Land',
        href: '#project-land'
    },
    {
        name: 'Mission & Vision',
        href: '#mission-vision'
    },
    {
        name: 'Gallery',
        href: '#gallery'
    },
    {
        name: 'Partner',
        href: '#partner'
    }
];
const socialLinks = [
    {
        name: 'Twitter',
        href: '#',
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"]
    },
    {
        name: 'Instagram',
        href: '#',
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"]
    },
    {
        name: 'Facebook',
        href: '#',
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"]
    }
];
;
;
const programs = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROJECTS"].map((project)=>({
        name: project.name,
        subtitle: project.subtitle,
        description: project.description,
        ctas: project.ctas,
        sequence: project.sequence
    }));
const content = {
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
            {
                title: "Local Engagement",
                description: "We work hand in hand with locals to give them ownership, responsibility, and accountability for long-term sustainable impact."
            },
            {
                title: "Collective Action",
                description: "We work with the general public, institutions, and corporations to amplify efforts and drive meaningful change."
            }
        ]
    },
    programs: {
        id: "programs",
        intro: "Positively impacting communities through strategically customized and sustainable programs.",
        cards: [
            {
                title: "Climate Change Mitigation",
                description: "We collaborate to repair, reclaim, and revive damaged lands, forests, and water bodies."
            },
            {
                title: "Food Security",
                description: "We support local farmers to increase food production in a sustainable and organic way."
            },
            {
                title: "Social Imbalance",
                description: "We customize and execute programmes and projects to mitigate imbalance in our society."
            }
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
            {
                id: "partner-logo-1",
                text: "Two leaves representing vegetation"
            },
            {
                id: "partner-logo-2",
                text: "A circle representing the globe"
            },
            {
                id: "partner-logo-3",
                text: "Together they represent humanity and its environment"
            }
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
                "Develop and implement customized social improvement programs."
            ]
        }
    },
    projectLand: {
        id: "project-land",
        headline: "Project Land — Revive and Thrive",
        closingLine: "Let’s turn devastation into creation.",
        cta: "Become a Partner Now",
        details: [
            {
                title: "Where?",
                text: "Humjibre, Ghana."
            },
            {
                title: "Why?",
                text: "Hotspot for illegal gold mining and environmental degradation."
            },
            {
                title: "How?",
                text: "Local landowners partner with QIA and grant exclusive rights to restore their land and revive the ecosystem. Focus on soil health, biodiversity conservation and local integration. We create real economic opportunities through carbon offset and healthy ecosystems."
            }
        ]
    },
    foodSecurity: {
        id: "food-security",
        headline: "Secure production instead of disruption.",
        body: "QIA helps transform food systems to be climate resilient, nutrition-sensitive and sustainable. We support farmers with organic and nano-technological farm solutions, micro-financing loans and sustainable techniques, and organize logistics to move produce to consumers.",
        cta: "Join the Movement",
        details: [
            {
                title: "Where?",
                text: "Starting in Ghana and expanding across Africa."
            },
            {
                title: "Why?",
                text: "Agricultural economies with high dependence on commercial inputs and limited resources."
            },
            {
                title: "How?",
                text: "Training workshops, sustainable solutions, financing, and distribution networks."
            }
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
        imageIds: [
            "gallery-1",
            "gallery-2",
            "gallery-3",
            "gallery-4",
            "gallery-5",
            "gallery-6"
        ]
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
}),
"[project]/apps/shell/src/components/logo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Logo",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$contexts$2f$hero$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/contexts/hero-context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
/**
 * Logo mapping for each hero section
 * Each hero has a different colored logo
 */ const LOGO_MAP = {
    CLIMATE: '/Whisk_f3725ea2aa626e8a15545e2000cf3014dr_preview_rev_1.svg',
    FOOD: '/Whisk_cb0dfa88022716bbd5641ed762889bd0dr_preview_rev_1.svg',
    SOCIAL: '/Whisk_796ac715016ef35a10040fe533c014b2dr_preview_rev_1.svg'
};
const Logo = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function Logo({ className }) {
    const { activeHero } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$contexts$2f$hero$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useHero"])();
    // Memoize logo path to prevent recalculation
    const logoPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>LOGO_MAP[activeHero] || LOGO_MAP.CLIMATE, [
        activeHero
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative h-24 w-24 flex-shrink-0 overflow-hidden flex items-center justify-center ${className || ''}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-full",
            style: {
                // Zoom to crop borders (bottom and right) - scale up to hide edges
                transform: 'scale(1.2)',
                transformOrigin: 'center center'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: logoPath,
                alt: "Quick Impact Agency Logo",
                fill: true,
                className: "object-contain transition-opacity duration-500",
                priority: true,
                unoptimized: true
            }, void 0, false, {
                fileName: "[project]/apps/shell/src/components/logo.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/shell/src/components/logo.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/shell/src/components/logo.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
});
}),
"[project]/apps/shell/src/components/header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/shell/src/lib/data.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/logo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$contexts$2f$hero$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/contexts/hero-context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
/**
 * Color variants for each hero section
 * Based on the 5 brand colors
 */ const HERO_COLORS = {
    CLIMATE: {
        primary: '#10B2D7',
        accent: '#175F8F',
        text: '#10B2D7'
    },
    FOOD: {
        primary: '#BFD380',
        accent: '#9DEE00',
        text: '#BFD380'
    },
    SOCIAL: {
        primary: '#9DEE00',
        accent: '#10B2D7',
        text: '#9DEE00'
    }
};
const Header = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function Header() {
    const { activeHero } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$contexts$2f$hero$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useHero"])();
    // Memoize colors to prevent recalculation on every render
    const colors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>HERO_COLORS[activeHero], [
        activeHero
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-50 w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full flex h-20 items-center justify-center px-4 md:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "flex items-center gap-4 group transition-opacity hover:opacity-80",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logo"], {}, void 0, false, {
                        fileName: "[project]/apps/shell/src/components/header.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-headline text-xl font-black tracking-tight md:text-2xl transition-colors duration-500",
                        style: {
                            color: colors.text
                        },
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["agencyConfig"].fullName
                    }, void 0, false, {
                        fileName: "[project]/apps/shell/src/components/header.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/shell/src/components/header.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/shell/src/components/header.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/shell/src/components/header.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
});
}),
"[project]/apps/shell/src/lib/sequence/sequenceUrl.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildFrameUrl",
    ()=>buildFrameUrl
]);
"use client";
/** Pads a number with leading zeros. */ function pad(num, length) {
    return num.toString().padStart(length, "0");
}
function buildFrameUrl(sequence, frameIndex0) {
    const actualFrameNumber = frameIndex0 + 1; // 1-based filenames
    return `${sequence.baseUrl}${pad(actualFrameNumber, sequence.padLength)}${sequence.fileExtension}`;
}
}),
"[project]/apps/shell/src/lib/sequence/sequenceCache.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAdaptiveConcurrency",
    ()=>getAdaptiveConcurrency,
    "getAdaptiveDpr",
    ()=>getAdaptiveDpr,
    "initSequenceCache",
    ()=>initSequenceCache,
    "sequenceCache",
    ()=>sequenceCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lru$2d$cache$40$11$2e$2$2e$4$2f$node_modules$2f$lru$2d$cache$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lru-cache@11.2.4/node_modules/lru-cache/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$sequence$2f$sequenceUrl$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/lib/sequence/sequenceUrl.ts [app-ssr] (ecmascript)");
"use client";
;
;
/**
 * Best-practice caching (big-brand style):
 * - Pinned cache for "hot window" frames (never evicted, guarantees instant switch).
 * - LRU cache for everything else (adaptive size based on device capabilities).
 * - Deduplication for in-flight loads.
 * - Failed URL short TTL to avoid spam-retry loops on 404.
 *
 * NOTE:
 * - Preloading *decoded* frames for all programs is heavy on low-end devices.
 * - We still support it, but the cache is adaptive, and pinned frames always win.
 */ class SequenceCacheManager {
    /** programName -> precomputed urls */ programs = new Map();
    /** pinned frames (never evicted) */ pinned = new Map();
    /** LRU for non-pinned frames */ lru = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lru$2d$cache$40$11$2e$2$2e$4$2f$node_modules$2f$lru$2d$cache$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LRUCache"]({
        max: 360,
        ttl: 1000 * 60 * 10
    });
    /** URLs that failed recently (avoid infinite retries) */ failed = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lru$2d$cache$40$11$2e$2$2e$4$2f$node_modules$2f$lru$2d$cache$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LRUCache"]({
        max: 4000,
        ttl: 1000 * 30
    });
    /** Deduplicate loads */ inFlight = new Map();
    /** Simple subscription for UI redraw when new frames arrive */ version = 0;
    listeners = new Set();
    /** Device-tuned options */ concurrencyLimit = 6;
    /**
   * Configure cache limits based on device.
   * Brands typically adapt using:
   * - navigator.deviceMemory
   * - network saveData / effectiveType
   * - mobile breakpoint
   */ configureForDevice(isMobile) {
        const deviceMemory = navigator.deviceMemory;
        const conn = navigator.connection;
        const saveData = conn?.saveData;
        // LRU max entries: tuned for "decoded images in memory"
        // (Pinned frames are extra, and should be kept small.)
        let max = 480;
        if (isMobile) max = 260;
        if (deviceMemory && deviceMemory <= 2) max = isMobile ? 160 : 240;
        if (saveData) max = Math.min(max, 180);
        // Concurrency: avoid decode/GC spikes on low-end
        let conc = 6;
        const cores = navigator.hardwareConcurrency || 4;
        conc = Math.max(2, Math.min(10, Math.floor(cores / 2)));
        if (isMobile) conc = Math.min(conc, 4);
        if (deviceMemory && deviceMemory <= 2) conc = Math.min(conc, 3);
        if (saveData) conc = Math.min(conc, 2);
        this.lru = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lru$2d$cache$40$11$2e$2$2e$4$2f$node_modules$2f$lru$2d$cache$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LRUCache"]({
            max,
            ttl: 1000 * 60 * 10
        });
        this.concurrencyLimit = conc;
        // Keep pinned as-is (small hot windows)
        this.bump();
    }
    /**
   * Initialize programs registry and precompute URLs.
   * Must be called once at app start.
   */ init(programList) {
        this.programs.clear();
        for (const p of programList){
            const urls = new Array(p.sequence.frameCount);
            for(let i = 0; i < p.sequence.frameCount; i++){
                urls[i] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$sequence$2f$sequenceUrl$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildFrameUrl"])(p.sequence, i);
            }
            this.programs.set(p.name, {
                sequence: p.sequence,
                urls
            });
        }
        this.bump();
    }
    /**
   * Subscribe to cache updates (frames arriving).
   * Used by Hero to redraw even without scroll.
   */ subscribe = (listener)=>{
        this.listeners.add(listener);
        return ()=>this.listeners.delete(listener);
    };
    /**
   * Version counter for useSyncExternalStore.
   */ getVersion = ()=>this.version;
    /**
   * Notify UI that cache changed.
   */ bump() {
        this.version++;
        for (const l of this.listeners)l();
    }
    /**
   * Get url for program/frame (0-based index).
   */ urlFor(programName, frameIndex0) {
        const entry = this.programs.get(programName);
        if (!entry) throw new Error(`sequenceCache: program not initialized: ${programName}`);
        const idx = Math.max(0, Math.min(entry.urls.length - 1, frameIndex0));
        return entry.urls[idx];
    }
    /**
   * Get a frame synchronously from cache (pinned first, then LRU).
   */ getFrame(programName, frameIndex0) {
        const url = this.urlFor(programName, frameIndex0);
        return this.pinned.get(url) ?? this.lru.get(url);
    }
    /**
   * Check if frame exists in cache (pinned or LRU).
   */ hasFrame(programName, frameIndex0) {
        const url = this.urlFor(programName, frameIndex0);
        return this.pinned.has(url) || this.lru.has(url);
    }
    /**
   * Pin a range of frames so they can NEVER be evicted.
   * This guarantees instant switching and "no flashing".
   *
   * Keep this window small (e.g. 0..24) per program.
   */ pinRange(programName, from0, to0) {
        const entry = this.programs.get(programName);
        if (!entry) return;
        const from = Math.max(0, from0);
        const to = Math.min(entry.urls.length - 1, to0);
        for(let i = from; i <= to; i++){
            const url = entry.urls[i];
            // If already in LRU, move it to pinned to protect it.
            const existing = this.lru.get(url);
            if (existing) {
                this.lru.delete(url);
                this.pinned.set(url, existing);
            }
        }
        this.bump();
    }
    /**
   * True if URL is being loaded.
   */ isInFlightUrl(url) {
        return this.inFlight.has(url);
    }
    /**
   * Ensure a frame is loaded & cached.
   * If the frame belongs to a pinned range, it will be stored in pinned.
   */ ensureFrame(programName, frameIndex0, signal) {
        const url = this.urlFor(programName, frameIndex0);
        const pinned = this.pinned.get(url);
        if (pinned) return Promise.resolve(pinned);
        const cached = this.lru.get(url);
        if (cached) return Promise.resolve(cached);
        if (this.failed.has(url)) {
            return Promise.reject(new Error(`sequenceCache: url previously failed: ${url}`));
        }
        const inflight = this.inFlight.get(url);
        if (inflight) return inflight;
        const p = this.loadImageElement(url, signal).then((img)=>{
            // Store in pinned if it is pinned OR if caller later pins it (we keep it simple:
            // if already pinned by URL, store pinned; else LRU)
            if (this.pinned.has(url)) this.pinned.set(url, img);
            else this.lru.set(url, img);
            this.inFlight.delete(url);
            this.bump();
            return img;
        }).catch((err)=>{
            this.inFlight.delete(url);
            if (!(err instanceof DOMException && err.name === "AbortError")) this.failed.set(url, true);
            throw err;
        });
        this.inFlight.set(url, p);
        return p;
    }
    /**
   * Preload around a frame (useful while scrolling).
   */ preloadAround(programName, center0, ahead, behind) {
        const entry = this.programs.get(programName);
        if (!entry) return;
        const from = Math.max(0, center0 - behind);
        const to = Math.min(entry.urls.length - 1, center0 + ahead);
        const urls = [];
        for(let i = from; i <= to; i++){
            const url = entry.urls[i];
            if (this.pinned.has(url) || this.lru.has(url) || this.inFlight.has(url) || this.failed.has(url)) continue;
            urls.push(url);
        }
        if (!urls.length) return;
        void this.preloadUrls(urls);
    }
    /**
   * Preload ALL frames (decoded).
   * Use with adaptive limits — pinned windows ensure UX even if LRU evicts older frames.
   */ async preloadAll(opts) {
        const { concurrency, signal, onProgress } = opts;
        // Respect device cap
        const conc = Math.max(1, Math.min(concurrency, this.concurrencyLimit));
        const urls = [];
        for (const [, entry] of this.programs){
            for (const url of entry.urls){
                if (this.pinned.has(url) || this.lru.has(url) || this.failed.has(url)) continue;
                urls.push(url);
            }
        }
        const total = urls.length;
        if (total === 0) {
            onProgress?.(100);
            return;
        }
        let done = 0;
        const bump = ()=>onProgress?.(Math.min(100, done / total * 100));
        await this.asyncPool(conc, urls, async (url)=>{
            if (signal?.aborted) return;
            try {
                // We do not know programName here, but pinned is URL-based:
                // if URL exists in pinned set, it will be stored pinned.
                await this.ensureUrl(url, signal);
            } catch  {
            // ignore per-url failures
            } finally{
                done++;
                bump();
            }
        });
        onProgress?.(100);
    }
    /**
   * Ensure URL directly (internal).
   * This is used by preloadAll which already has URLs.
   */ ensureUrl(url, signal) {
        const pinned = this.pinned.get(url);
        if (pinned) return Promise.resolve(pinned);
        const cached = this.lru.get(url);
        if (cached) return Promise.resolve(cached);
        if (this.failed.has(url)) {
            return Promise.reject(new Error(`sequenceCache: url previously failed: ${url}`));
        }
        const inflight = this.inFlight.get(url);
        if (inflight) return inflight;
        const p = this.loadImageElement(url, signal).then((img)=>{
            if (this.pinned.has(url)) this.pinned.set(url, img);
            else this.lru.set(url, img);
            this.inFlight.delete(url);
            this.bump();
            return img;
        }).catch((err)=>{
            this.inFlight.delete(url);
            if (!(err instanceof DOMException && err.name === "AbortError")) this.failed.set(url, true);
            throw err;
        });
        this.inFlight.set(url, p);
        return p;
    }
    /**
   * Internal helper: preload a list of URLs with concurrency limit.
   */ async preloadUrls(urls) {
        const conc = Math.max(1, this.concurrencyLimit);
        await this.asyncPool(conc, urls, async (url)=>{
            try {
                await this.ensureUrl(url);
            } catch  {
            // ignore
            }
        });
    }
    /**
   * Concurrency pool.
   */ async asyncPool(limit, items, worker) {
        const executing = new Set();
        for (const item of items){
            const p = worker(item);
            executing.add(p);
            const cleanup = ()=>executing.delete(p);
            p.then(cleanup).catch(cleanup);
            if (executing.size >= limit) {
                await Promise.race(executing);
            }
        }
        await Promise.allSettled([
            ...executing
        ]);
    }
    /**
   * Image loader using HTMLImageElement.
   * No forced crossOrigin to avoid hard failures with missing CORS headers.
   */ loadImageElement(url, signal) {
        return new Promise((resolve, reject)=>{
            const img = new Image();
            const onAbort = ()=>{
                img.src = "";
                reject(new DOMException("Aborted", "AbortError"));
            };
            if (signal) signal.addEventListener("abort", onAbort, {
                once: true
            });
            img.onload = ()=>{
                if (signal) signal.removeEventListener("abort", onAbort);
                resolve(img);
            };
            img.onerror = (e)=>{
                if (signal) signal.removeEventListener("abort", onAbort);
                reject(e);
            };
            img.src = url;
        });
    }
}
const sequenceCache = new SequenceCacheManager();
function getAdaptiveDpr(isMobile) {
    const dpr = window.devicePixelRatio || 1;
    if (!isMobile) return Math.min(2, dpr);
    const deviceMemory = navigator.deviceMemory;
    if (deviceMemory && deviceMemory <= 2) return Math.min(1.25, dpr);
    return Math.min(1.5, dpr);
}
function getAdaptiveConcurrency(isMobile) {
    const conn = navigator.connection;
    const saveData = conn?.saveData;
    const effectiveType = conn?.effectiveType;
    const deviceMemory = navigator.deviceMemory;
    const cores = navigator.hardwareConcurrency || 4;
    let base = Math.max(2, Math.min(10, Math.floor(cores / 2)));
    if (isMobile) base = Math.min(base, 4);
    if (deviceMemory && deviceMemory <= 2) base = Math.min(base, 3);
    if (saveData) base = Math.min(base, 2);
    if (effectiveType === "2g" || effectiveType === "slow-2g") base = 1;
    return Math.max(1, base);
}
function initSequenceCache(programs) {
    sequenceCache.init(programs);
}
}),
"[project]/apps/shell/src/hooks/useScrollSequence.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollSequence",
    ()=>useScrollSequence
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function clamp(n, min, max) {
    return Math.min(max, Math.max(min, n));
}
function ease(mode, t) {
    const x = clamp(t, 0, 1);
    if (mode === "linear") return x;
    if (mode === "easeOut") return 1 - Math.pow(1 - x, 3);
    return x * x * (3 - 2 * x); // smoothstep
}
/**
 * Best practice: Use Intersection Observer to detect when element is in viewport
 * This reduces unnecessary scroll calculations when element is off-screen
 */ function useIntersectionObserver(elementRef, callback, options) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const element = elementRef.current;
        if (!element) return;
        const observer = new IntersectionObserver(([entry])=>{
            callback(entry.isIntersecting);
        }, {
            root: null,
            rootMargin: "50%",
            threshold: [
                0,
                0.25,
                0.5,
                0.75,
                1
            ],
            ...options
        });
        observer.observe(element);
        return ()=>{
            observer.disconnect();
        };
    }, [
        elementRef,
        callback,
        options
    ]);
}
function useScrollSequence({ program, heroRef, easing = "linear" }) {
    const [currentFrame, setCurrentFrame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const currentFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [isInViewport, setIsInViewport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const lockFrame0Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    /**
   * Set frame immediately (bypasses scroll computation).
   */ const setFrameImmediate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((idx)=>{
        currentFrameRef.current = idx;
        setCurrentFrame(idx);
    }, []);
    /**
   * Force frame 0 and lock it (no mid-frame flash).
   */ const forceFrame0Lock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        lockFrame0Ref.current = true;
        setFrameImmediate(0);
    }, [
        setFrameImmediate
    ]);
    /**
   * Unlock scroll-driven updates.
   */ const unlockAfterSwitch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        lockFrame0Ref.current = false;
    }, []);
    /**
   * Compute frame based on scroll position inside hero.
   * Optimized with early returns and viewport detection.
   */ const computeFrameIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const el = heroRef.current;
        if (!el || !program) return;
        if (lockFrame0Ref.current) {
            if (currentFrameRef.current !== 0) setFrameImmediate(0);
            return;
        }
        // Early return if element is not in viewport (performance optimization)
        if (!isInViewport) return;
        const { top, height } = el.getBoundingClientRect();
        const scrollable = Math.max(1, height - window.innerHeight);
        // Early return if element is completely off-screen
        if (top > window.innerHeight || top + height < 0) return;
        const distance = clamp(-top, 0, scrollable);
        const fraction = distance / scrollable;
        const mapped = ease(easing, fraction);
        const next = Math.round(mapped * (program.sequence.frameCount - 1));
        if (next !== currentFrameRef.current) {
            setFrameImmediate(next);
        }
    }, [
        heroRef,
        program,
        easing,
        setFrameImmediate,
        isInViewport
    ]);
    /**
   * Use Intersection Observer to detect when hero section is in viewport.
   * This prevents unnecessary scroll calculations when off-screen.
   */ useIntersectionObserver(heroRef, setIsInViewport, {
        rootMargin: "50%"
    });
    /**
   * RAF-throttled scroll listener with passive event listener for better performance.
   * Best practice: Use passive listeners to improve scroll performance.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let raf = 0;
        let ticking = false;
        const onScroll = ()=>{
            if (!ticking) {
                cancelAnimationFrame(raf);
                raf = requestAnimationFrame(()=>{
                    computeFrameIndex();
                    ticking = false;
                });
                ticking = true;
            }
        };
        // Use passive listener for better scroll performance
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        // Also listen to resize events for responsive behavior
        window.addEventListener("resize", onScroll, {
            passive: true
        });
        // Initial calculation
        onScroll();
        return ()=>{
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            cancelAnimationFrame(raf);
        };
    }, [
        computeFrameIndex
    ]);
    /**
   * On program change we default to frame 0.
   * (Hero switch logic will also do an atomic frame0 draw.)
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setFrameImmediate(0);
    }, [
        program,
        setFrameImmediate
    ]);
    return {
        currentFrame,
        setFrameImmediate,
        forceFrame0Lock,
        unlockAfterSwitch
    };
}
}),
"[project]/apps/shell/src/domain/constants/hero.constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Hero Section Constants
 * Single Responsibility: Centralized configuration values
 */ __turbopack_context__.s([
    "CANVAS_CONFIG",
    ()=>CANVAS_CONFIG,
    "MOBILE_PRELOAD_WINDOWS",
    ()=>MOBILE_PRELOAD_WINDOWS,
    "PARALLAX_CONFIG",
    ()=>PARALLAX_CONFIG,
    "PINNED_WINDOW_SIZES",
    ()=>PINNED_WINDOW_SIZES,
    "UI_TIMINGS",
    ()=>UI_TIMINGS
]);
const UI_TIMINGS = {
    SWITCH_FADE_MS: 220
};
const PARALLAX_CONFIG = [
    {
        scrollVh: 260,
        easing: "easeOut"
    },
    {
        scrollVh: 300,
        easing: "linear"
    },
    {
        scrollVh: 340,
        easing: "easeInOut"
    }
];
const PINNED_WINDOW_SIZES = {
    CLIMATE: 26,
    FOOD: 32,
    SOCIAL: 40
};
const MOBILE_PRELOAD_WINDOWS = {
    CLIMATE: {
        ahead: 14,
        behind: 6
    },
    FOOD: {
        ahead: 20,
        behind: 8
    },
    SOCIAL: {
        ahead: 26,
        behind: 10
    }
};
const CANVAS_CONFIG = {
    ZOOM_FACTOR: 1.05,
    MOBILE_ZOOM_FACTOR: 0.95,
    BACKGROUND_COLOR: 'hsl(175, 85%, 9%)'
};
}),
"[project]/apps/shell/src/services/sequence/sequence-initialization.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Sequence Initialization Service
 * Single Responsibility: Sequence cache initialization logic
 * Separation of Concerns: Isolated initialization operations
 */ __turbopack_context__.s([
    "getMobilePreloadWindow",
    ()=>getMobilePreloadWindow,
    "initializeSequenceCache",
    ()=>initializeSequenceCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$domain$2f$constants$2f$hero$2e$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/domain/constants/hero.constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$sequence$2f$sequenceCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/lib/sequence/sequenceCache.ts [app-ssr] (ecmascript)");
;
;
async function initializeSequenceCache(options) {
    const { isMobile, programs, onProgress, signal } = options;
    // Configure cache for device type
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$sequence$2f$sequenceCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sequenceCache"].configureForDevice(isMobile);
    // Register sequences and precompute URLs
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$sequence$2f$sequenceCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initSequenceCache"])(programs);
    // Pin critical windows for instant switching
    for (const program of programs){
        const pinnedSize = getPinnedWindowSize(program.name);
        const maxFrame = Math.min(program.sequence.frameCount - 1, pinnedSize);
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$sequence$2f$sequenceCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sequenceCache"].pinRange(program.name, 0, maxFrame);
    }
    // Preload all frames
    const concurrency = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$sequence$2f$sequenceCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAdaptiveConcurrency"])(isMobile);
    await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$sequence$2f$sequenceCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sequenceCache"].preloadAll({
        concurrency,
        signal,
        onProgress
    });
}
/**
 * Get pinned window size for program
 * Factory pattern: Centralized configuration retrieval
 */ function getPinnedWindowSize(programName) {
    switch(programName){
        case 'CLIMATE':
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$domain$2f$constants$2f$hero$2e$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PINNED_WINDOW_SIZES"].CLIMATE;
        case 'FOOD':
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$domain$2f$constants$2f$hero$2e$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PINNED_WINDOW_SIZES"].FOOD;
        case 'SOCIAL':
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$domain$2f$constants$2f$hero$2e$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PINNED_WINDOW_SIZES"].SOCIAL;
        default:
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$domain$2f$constants$2f$hero$2e$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PINNED_WINDOW_SIZES"].CLIMATE;
    }
}
function getMobilePreloadWindow(programName) {
    switch(programName){
        case 'CLIMATE':
            return {
                ahead: 14,
                behind: 6
            };
        case 'FOOD':
            return {
                ahead: 20,
                behind: 8
            };
        case 'SOCIAL':
            return {
                ahead: 26,
                behind: 10
            };
        default:
            return {
                ahead: 14,
                behind: 6
            };
    }
}
}),
"[project]/apps/shell/src/hooks/use-mobile.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsMobile",
    ()=>useIsMobile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
    const [isMobile, setIsMobile] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](undefined);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
        const onChange = ()=>{
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        };
        mql.addEventListener("change", onChange);
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        return ()=>mql.removeEventListener("change", onChange);
    }, []);
    return !!isMobile;
}
}),
"[project]/apps/shell/src/hooks/useHeroBoot.hook.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * useHeroBoot Hook
 * Single Responsibility: Hero section boot/preload logic
 * Separation of Concerns: Isolated initialization state management
 */ __turbopack_context__.s([
    "useHeroBoot",
    ()=>useHeroBoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/shell/src/lib/data.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$services$2f$sequence$2f$sequence$2d$initialization$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/services/sequence/sequence-initialization.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/hooks/use-mobile.tsx [app-ssr] (ecmascript)");
;
;
;
;
function useHeroBoot() {
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const [bootReady, setBootReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bootProgress, setBootProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const abortController = new AbortController();
        const initialize = async ()=>{
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$services$2f$sequence$2f$sequence$2d$initialization$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initializeSequenceCache"])({
                    isMobile,
                    programs: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["programs"],
                    onProgress: setBootProgress,
                    signal: abortController.signal
                });
                if (!abortController.signal.aborted) {
                    setBootProgress(100);
                    setBootReady(true);
                }
            } catch (error) {
                // Silently handle errors - ensure UI is always shown
                if (!abortController.signal.aborted) {
                    setBootProgress(100);
                    setBootReady(true);
                }
            }
        };
        void initialize();
        return ()=>{
            abortController.abort();
        };
    }, [
        isMobile
    ]);
    return {
        bootReady,
        bootProgress
    };
}
}),
"[project]/apps/shell/src/services/canvas/canvas-renderer.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Canvas Renderer Service
 * Single Responsibility: Canvas drawing logic
 * Separation of Concerns: Isolated rendering logic
 */ __turbopack_context__.s([
    "calculateCanvasDimensions",
    ()=>calculateCanvasDimensions,
    "calculateImagePosition",
    ()=>calculateImagePosition,
    "drawFrameOnCanvas",
    ()=>drawFrameOnCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$domain$2f$constants$2f$hero$2e$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/domain/constants/hero.constants.ts [app-ssr] (ecmascript)");
;
function calculateCanvasDimensions(viewportWidth, viewportHeight, dpr) {
    return {
        width: Math.floor(viewportWidth * dpr),
        height: Math.floor(viewportHeight * dpr)
    };
}
function calculateImagePosition(frame, canvasWidth, canvasHeight, isMobile = false) {
    const zoomFactor = isMobile ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$domain$2f$constants$2f$hero$2e$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CANVAS_CONFIG"].MOBILE_ZOOM_FACTOR : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$domain$2f$constants$2f$hero$2e$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CANVAS_CONFIG"].ZOOM_FACTOR;
    const imgAspect = frame.width / frame.height;
    const canvasAspect = canvasWidth / canvasHeight;
    let renderWidth;
    let renderHeight;
    let x;
    let y;
    if (isMobile) {
        // Mobile: Scale to full width with slight zoom to eliminate any side gaps
        // Use small zoom to ensure complete coverage
        renderWidth = canvasWidth * 1.02; // 2% zoom to eliminate side gaps
        renderHeight = renderWidth / imgAspect;
        x = (canvasWidth - renderWidth) / 2; // Center horizontally (will be slightly negative to cover edges)
        y = (canvasHeight - renderHeight) / 2; // Center vertically
    } else {
        // Desktop: Use "cover" strategy with zoom for full coverage
        if (imgAspect > canvasAspect) {
            // Image is wider - scale to cover height with zoom
            renderHeight = canvasHeight * zoomFactor;
            renderWidth = renderHeight * imgAspect;
            x = (canvasWidth - renderWidth) / 2;
            y = (canvasHeight - renderHeight) / 2;
        } else {
            // Image is taller - scale to cover width with zoom
            renderWidth = canvasWidth * zoomFactor;
            renderHeight = renderWidth / imgAspect;
            x = (canvasWidth - renderWidth) / 2;
            y = (canvasHeight - renderHeight) / 2;
        }
    }
    return {
        x,
        y,
        width: renderWidth,
        height: renderHeight
    };
}
function drawFrameOnCanvas(ctx, frame, canvasWidth, canvasHeight, dpr, isMobile = false) {
    // Set canvas size if needed
    const canvas = ctx.canvas;
    const viewportWidth = canvasWidth / dpr;
    const viewportHeight = canvasHeight / dpr;
    if (canvas.width !== canvasWidth || canvas.height !== canvasHeight) {
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.width = `${viewportWidth}px`;
        canvas.style.height = `${viewportHeight}px`;
    }
    // Set transform for DPR
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    // Calculate position first
    const position = calculateImagePosition(frame, viewportWidth, viewportHeight, isMobile);
    // Fill background - on mobile only fill top/bottom if image doesn't cover full height
    if (isMobile && position.width >= viewportWidth) {
        // Mobile: Image covers full width, only fill top/bottom if needed
        if (position.y > 0) {
            ctx.fillStyle = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$domain$2f$constants$2f$hero$2e$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CANVAS_CONFIG"].BACKGROUND_COLOR;
            ctx.fillRect(0, 0, viewportWidth, position.y);
        }
        if (position.y + position.height < viewportHeight) {
            ctx.fillStyle = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$domain$2f$constants$2f$hero$2e$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CANVAS_CONFIG"].BACKGROUND_COLOR;
            ctx.fillRect(0, position.y + position.height, viewportWidth, viewportHeight - (position.y + position.height));
        }
    } else {
        // Desktop: fill entire background
        ctx.fillStyle = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$domain$2f$constants$2f$hero$2e$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CANVAS_CONFIG"].BACKGROUND_COLOR;
        ctx.fillRect(0, 0, viewportWidth, viewportHeight);
    }
    // Draw image
    ctx.drawImage(frame, position.x, position.y, position.width, position.height);
}
}),
"[project]/apps/shell/src/hooks/useCanvasRenderer.hook.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * useCanvasRenderer Hook
 * Single Responsibility: Canvas rendering logic
 * Separation of Concerns: Isolated canvas operations
 */ __turbopack_context__.s([
    "useCanvasRenderer",
    ()=>useCanvasRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$sequence$2f$sequenceCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/lib/sequence/sequenceCache.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/hooks/use-mobile.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$services$2f$canvas$2f$canvas$2d$renderer$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/services/canvas/canvas-renderer.service.ts [app-ssr] (ecmascript)");
;
;
;
;
;
function useCanvasRenderer(options) {
    const { canvasRef, programName, currentFrame, bootReady, freezeDraw } = options;
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsMobile"])();
    // Calculate DPR based on device
    const dpr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return 1;
        //TURBOPACK unreachable
        ;
    }, [
        isMobile
    ]);
    // Draw frame on canvas
    const drawFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((targetProgramName, frameIndex)=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const frame = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$sequence$2f$sequenceCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sequenceCache"].getFrame(targetProgramName, frameIndex);
        if (!frame) return;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const dimensions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$services$2f$canvas$2f$canvas$2d$renderer$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateCanvasDimensions"])(viewportWidth, viewportHeight, dpr);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$services$2f$canvas$2f$canvas$2d$renderer$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["drawFrameOnCanvas"])(ctx, frame, dimensions.width, dimensions.height, dpr, isMobile);
    }, [
        canvasRef,
        dpr,
        isMobile
    ]);
    // Auto-draw current frame
    const drawAuto = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!bootReady || freezeDraw === true) return;
        drawFrame(programName, currentFrame);
    }, [
        bootReady,
        freezeDraw,
        drawFrame,
        programName,
        currentFrame
    ]);
    return {
        drawFrame,
        drawAuto,
        dpr
    };
}
}),
"[project]/apps/shell/src/utils/animation.utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Animation Utilities
 * Single Responsibility: Animation helper functions
 * Separation of Concerns: Isolated animation logic
 */ /**
 * Wait for next animation frame
 * Utility for async animation operations
 */ __turbopack_context__.s([
    "scrollToPageTop",
    ()=>scrollToPageTop,
    "waitForAnimationFrame",
    ()=>waitForAnimationFrame
]);
function waitForAnimationFrame() {
    return new Promise((resolve)=>{
        requestAnimationFrame(()=>resolve());
    });
}
async function scrollToPageTop() {
    // Immediate attempt
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    // Wait for paint/layout to settle
    await waitForAnimationFrame();
    await waitForAnimationFrame();
    // Final force
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}
}),
"[project]/apps/shell/src/hooks/useProgramSwitch.hook.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * useProgramSwitch Hook
 * Single Responsibility: Program switching logic
 * Separation of Concerns: Isolated program navigation state
 */ __turbopack_context__.s([
    "useProgramSwitch",
    ()=>useProgramSwitch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/shell/src/lib/data.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$sequence$2f$sequenceCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/lib/sequence/sequenceCache.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$utils$2f$animation$2e$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/utils/animation.utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$domain$2f$constants$2f$hero$2e$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/domain/constants/hero.constants.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
function useProgramSwitch(options) {
    const { bootReady, programIndex, setProgramIndex, forceFrame0Lock, setFrameImmediate, unlockAfterSwitch, drawFrame, setIndexPulse, freezeDrawRef } = options;
    const [isSwitching, setIsSwitching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const switchTokenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const switchProgram = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (direction)=>{
        if (!bootReady || isSwitching) return;
        const token = ++switchTokenRef.current;
        const nextIndex = (programIndex + direction + __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["programs"].length) % __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["programs"].length;
        const nextProgram = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["programs"][nextIndex];
        setIsSwitching(true);
        freezeDrawRef.current = true;
        // 1) Lock frame 0 immediately
        forceFrame0Lock();
        setFrameImmediate(0);
        // 2) Ensure next frame 0 exists
        const ensure0 = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$sequence$2f$sequenceCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sequenceCache"].ensureFrame(nextProgram.name, 0).catch(()=>null);
        // 3) Hard reset to page top
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$utils$2f$animation$2e$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scrollToPageTop"])();
        if (token !== switchTokenRef.current) return;
        // 4) Commit the new program
        setProgramIndex(nextIndex);
        // 5) Wait for React commit
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$utils$2f$animation$2e$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["waitForAnimationFrame"])();
        if (token !== switchTokenRef.current) return;
        // 6) Wait for frame 0
        await ensure0;
        // 7) Draw frame 0 immediately
        drawFrame(nextProgram.name, 0);
        // 8) Trigger index pulse animation
        setIndexPulse((v)=>v + 1);
        // 9) Unlock after frame 0 is drawn
        freezeDrawRef.current = false;
        unlockAfterSwitch();
        // 10) Clear switching state after fade
        window.setTimeout(()=>{
            if (token !== switchTokenRef.current) return;
            setIsSwitching(false);
        }, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$domain$2f$constants$2f$hero$2e$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI_TIMINGS"].SWITCH_FADE_MS);
    }, [
        bootReady,
        isSwitching,
        programIndex,
        setProgramIndex,
        forceFrame0Lock,
        setFrameImmediate,
        unlockAfterSwitch,
        drawFrame,
        setIndexPulse
    ]);
    return {
        isSwitching,
        switchProgram
    };
}
}),
"[project]/apps/shell/src/lib/analytics.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Google Analytics utility functions
 * Provides type-safe event tracking and Web Vitals reporting
 */ __turbopack_context__.s([
    "trackButtonClick",
    ()=>trackButtonClick,
    "trackEvent",
    ()=>trackEvent,
    "trackPageView",
    ()=>trackPageView,
    "trackProgramSwitch",
    ()=>trackProgramSwitch,
    "trackScrollDepth",
    ()=>trackScrollDepth
]);
function trackEvent(action, category, label, value) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function trackPageView(url) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function trackProgramSwitch(programName) {
    trackEvent('program_switch', 'navigation', programName);
}
function trackButtonClick(buttonLabel, location) {
    trackEvent('button_click', 'engagement', `${location}_${buttonLabel}`);
}
function trackScrollDepth(depth) {
    trackEvent('scroll_depth', 'engagement', undefined, depth);
}
}),
"[project]/apps/shell/src/domain/models/hero-colors.model.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Hero Colors Domain Model
 * Single Responsibility: Hero color mapping and retrieval
 */ __turbopack_context__.s([
    "getHeroColors",
    ()=>getHeroColors
]);
/**
 * Color variants for each hero section
 * Based on the 5 brand colors
 */ const HERO_COLORS_MAP = {
    CLIMATE: {
        primary: '#10B2D7',
        accent: '#175F8F',
        text: '#10B2D7'
    },
    FOOD: {
        primary: '#BFD380',
        accent: '#9DEE00',
        text: '#BFD380'
    },
    SOCIAL: {
        primary: '#9DEE00',
        accent: '#10B2D7',
        text: '#9DEE00'
    }
};
function getHeroColors(heroName) {
    return HERO_COLORS_MAP[heroName] || HERO_COLORS_MAP.CLIMATE;
}
}),
"[project]/packages/utils/routes.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Route Helpers - URL generation for microfrontends
 * Source of truth for routing paths
 * 
 * Supports two development modes:
 * - Gateway mode: Single URL (3024), relative links
 * - Standalone mode: Separate ports (3000/3001/3002), absolute links with ports
 */ __turbopack_context__.s([
    "getCancelHref",
    ()=>getCancelHref,
    "getDetailsHref",
    ()=>getDetailsHref,
    "getDevMode",
    ()=>getDevMode,
    "getSuccessHref",
    ()=>getSuccessHref,
    "getSupportHref",
    ()=>getSupportHref
]);
/**
 * Get the origin for a specific app
 * Used in standalone mode to generate absolute URLs with correct ports
 */ function getAppOrigin(appName) {
    const envVar = {
        shell: process.env.NEXT_PUBLIC_SHELL_ORIGIN,
        details: process.env.NEXT_PUBLIC_DETAILS_ORIGIN,
        checkout: process.env.NEXT_PUBLIC_CHECKOUT_ORIGIN
    }[appName];
    // Default ports if env var not set
    const defaultPorts = {
        shell: '3000',
        details: '3001',
        checkout: '3002'
    }[appName];
    if (envVar) {
        return envVar;
    }
    // Fallback to default localhost with default port
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return `http://localhost:${defaultPorts}`;
}
/**
 * Get the base URL for cross-app navigation
 * Determines whether to use relative paths (gateway/prod) or absolute URLs (standalone)
 */ function getBaseUrl(targetApp) {
    // Client-side detection
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Server-side: check env vars
    const devMode = process.env.NEXT_PUBLIC_DEV_MODE || undefined;
    const nodeEnv = ("TURBOPACK compile-time value", "development");
    // Production: always use relative URLs
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // In standalone mode server-side, we still generate absolute URLs
    // (Next.js Link will handle them correctly)
    if (devMode === 'standalone') {
        return getAppOrigin(targetApp);
    }
    // Gateway mode or auto: use relative URLs (client will handle routing)
    return '';
}
function getDetailsHref(projectId) {
    const baseUrl = getBaseUrl('details');
    return `${baseUrl}/projects/${projectId}`;
}
function getSupportHref(projectId) {
    const baseUrl = getBaseUrl('checkout');
    return `${baseUrl}/support/${projectId}`;
}
function getSuccessHref() {
    const baseUrl = getBaseUrl('checkout');
    return `${baseUrl}/support/success`;
}
function getCancelHref() {
    const baseUrl = getBaseUrl('checkout');
    return `${baseUrl}/support/cancel`;
}
function getDevMode() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const devMode = process.env.NEXT_PUBLIC_DEV_MODE;
    if (devMode === 'gateway' || devMode === 'standalone') {
        return devMode;
    }
    return 'auto';
}
}),
"[project]/packages/utils/eventBus.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Event Bus - Communication between microfrontends
 * Optional enhancement for UX, not required for core functionality
 * Source of truth remains the URL (slug in path)
 */ __turbopack_context__.s([
    "PROJECT_CHANGED_EVENT",
    ()=>PROJECT_CHANGED_EVENT,
    "emitProjectChanged",
    ()=>emitProjectChanged,
    "onProjectChanged",
    ()=>onProjectChanged
]);
const PROJECT_CHANGED_EVENT = 'mfe:activeProjectChanged';
function emitProjectChanged(projectId, previousProjectId) {
    const detail = {
        projectId,
        previousProjectId,
        timestamp: Date.now()
    };
    // CustomEvent for same-window communication
    const event = new CustomEvent(PROJECT_CHANGED_EVENT, {
        detail
    });
    window.dispatchEvent(event);
    // BroadcastChannel for cross-tab communication (fallback)
    try {
        const channel = new BroadcastChannel('mfe-project-channel');
        channel.postMessage({
            type: PROJECT_CHANGED_EVENT,
            detail
        });
        channel.close();
    } catch (error) {
        // BroadcastChannel not supported, silently fail
        console.debug('BroadcastChannel not available:', error);
    }
}
function onProjectChanged(callback) {
    const handler = (event)=>{
        const customEvent = event;
        if (customEvent.detail) {
            callback(customEvent.detail);
        }
    };
    window.addEventListener(PROJECT_CHANGED_EVENT, handler);
    // Also listen to BroadcastChannel
    let channel = null;
    try {
        channel = new BroadcastChannel('mfe-project-channel');
        channel.onmessage = (event)=>{
            if (event.data?.type === PROJECT_CHANGED_EVENT && event.data?.detail) {
                callback(event.data.detail);
            }
        };
    } catch (error) {
        console.debug('BroadcastChannel not available:', error);
    }
    // Return cleanup function
    return ()=>{
        window.removeEventListener(PROJECT_CHANGED_EVENT, handler);
        if (channel) {
            channel.close();
        }
    };
}
}),
"[project]/apps/shell/src/components/ui/progress.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Progress",
    ()=>Progress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$progress$40$1$2e$1$2e$8_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$7_$5f40$types$2b$react$40$19$2e$2_bg2sfste25jl4hqe2424sxheju$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-progress@1.1.8_@types+react-dom@19.2.3_@types+react@19.2.7__@types+react@19.2_bg2sfste25jl4hqe2424sxheju/node_modules/@radix-ui/react-progress/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/shell/src/lib/utils.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Progress = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"](/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, value, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$progress$40$1$2e$1$2e$8_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$7_$5f40$types$2b$react$40$19$2e$2_bg2sfste25jl4hqe2424sxheju$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$progress$40$1$2e$1$2e$8_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$7_$5f40$types$2b$react$40$19$2e$2_bg2sfste25jl4hqe2424sxheju$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Indicator"], {
            className: "h-full w-full flex-1 bg-primary transition-all",
            style: {
                transform: `translateX(-${100 - (value || 0)}%)`
            }
        }, void 0, false, {
            fileName: "[project]/apps/shell/src/components/ui/progress.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/shell/src/components/ui/progress.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0))));
Progress.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$progress$40$1$2e$1$2e$8_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$7_$5f40$types$2b$react$40$19$2e$2_bg2sfste25jl4hqe2424sxheju$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
;
}),
"[project]/apps/shell/src/components/loading-screen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingScreen",
    ()=>LoadingScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/ui/progress.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const LoadingScreen = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function LoadingScreen({ progress }) {
    const [display, setDisplay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Memoize rounded display value to prevent unnecessary recalculations
    const roundedDisplay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Math.round(display), [
        display
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const target = Math.max(0, Math.min(100, progress));
        const tick = ()=>{
            setDisplay((prev)=>{
                const next = prev + (target - prev) * 0.12;
                return Math.abs(target - next) < 0.2 ? target : next;
            });
            rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
        return ()=>{
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [
        progress
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex flex-col items-center justify-center bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-4 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-32 w-32 flex-shrink-0 overflow-hidden flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full h-full",
                        style: {
                            // Same zoom approach as Logo component to hide borders (bottom and right)
                            transform: 'scale(1.25)',
                            transformOrigin: 'center center'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/Whisk_796ac715016ef35a10040fe533c014b2dr_preview_rev_1.svg",
                            alt: "Quick Impact Agency Logo",
                            fill: true,
                            className: "object-contain",
                            priority: true,
                            unoptimized: true
                        }, void 0, false, {
                            fileName: "[project]/apps/shell/src/components/loading-screen.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/shell/src/components/loading-screen.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/shell/src/components/loading-screen.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-64",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Progress"], {
                            value: display,
                            className: "h-2"
                        }, void 0, false, {
                            fileName: "[project]/apps/shell/src/components/loading-screen.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-sm font-medium text-foreground",
                            children: [
                                "Loading ",
                                roundedDisplay,
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/shell/src/components/loading-screen.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/shell/src/components/loading-screen.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/shell/src/components/loading-screen.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/shell/src/components/loading-screen.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
});
}),
"[project]/apps/shell/src/components/hero-section/hero-canvas.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroCanvas",
    ()=>HeroCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$domain$2f$constants$2f$hero$2e$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/domain/constants/hero.constants.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const HeroCanvas = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function HeroCanvas({ canvasRef }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "pointer-events-none absolute inset-0 h-full w-full",
                style: {
                    willChange: 'contents',
                    imageRendering: 'auto',
                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$domain$2f$constants$2f$hero$2e$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CANVAS_CONFIG"].BACKGROUND_COLOR
                }
            }, void 0, false, {
                fileName: "[project]/apps/shell/src/components/hero-section/hero-canvas.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 bg-black/30"
            }, void 0, false, {
                fileName: "[project]/apps/shell/src/components/hero-section/hero-canvas.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
});
}),
"[project]/apps/shell/src/components/hero-section/hero-content.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroContent",
    ()=>HeroContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/ui/src/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/shell/src/lib/utils.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/lib/analytics.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$utils$2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/utils/routes.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const HeroContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function HeroContent({ program, projectId, heroColors, isSwitching }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('space-y-4 transition-opacity duration-200', isSwitching ? 'opacity-0' : 'opacity-100'),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden space-y-4 mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-headline text-5xl font-black uppercase tracking-tighter",
                            children: program.name
                        }, void 0, false, {
                            fileName: "[project]/apps/shell/src/components/hero-section/hero-content.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-body text-base font-light tracking-widest",
                            children: program.subtitle
                        }, void 0, false, {
                            fileName: "[project]/apps/shell/src/components/hero-section/hero-content.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-body text-sm",
                            children: program.description
                        }, void 0, false, {
                            fileName: "[project]/apps/shell/src/components/hero-section/hero-content.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/shell/src/components/hero-section/hero-content.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:block space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-headline text-5xl font-black uppercase tracking-tighter sm:text-6xl md:text-9xl",
                            children: program.name
                        }, void 0, false, {
                            fileName: "[project]/apps/shell/src/components/hero-section/hero-content.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-body text-base font-light tracking-widest sm:text-lg md:text-2xl",
                            children: program.subtitle
                        }, void 0, false, {
                            fileName: "[project]/apps/shell/src/components/hero-section/hero-content.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "max-w-md font-body text-sm sm:text-base md:text-lg",
                            children: program.description
                        }, void 0, false, {
                            fileName: "[project]/apps/shell/src/components/hero-section/hero-content.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/shell/src/components/hero-section/hero-content.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3 md:flex-row md:gap-4 md:mt-0 mt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            asChild: true,
                            size: "lg",
                            variant: "outline",
                            className: "rounded-full border-2 bg-transparent/10 backdrop-blur-sm text-white transition-all px-8 py-3",
                            style: {
                                borderColor: `${heroColors.primary}80`,
                                color: 'white'
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.backgroundColor = heroColors.primary;
                                e.currentTarget.style.color = '#022D2B';
                                e.currentTarget.style.borderColor = heroColors.primary;
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = 'white';
                                e.currentTarget.style.borderColor = `${heroColors.primary}80`;
                            },
                            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackButtonClick"])(program.ctas.secondary, 'hero'),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$utils$2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDetailsHref"])(projectId),
                                children: program.ctas.secondary
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/hero-section/hero-content.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/shell/src/components/hero-section/hero-content.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            asChild: true,
                            size: "lg",
                            className: "rounded-full text-white transition-all px-8 py-3",
                            style: {
                                backgroundColor: heroColors.accent,
                                color: '#022D2B',
                                boxShadow: `0 10px 15px -3px ${heroColors.accent}40`
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.opacity = '0.9';
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.opacity = '1';
                            },
                            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackButtonClick"])(program.ctas.primary, 'hero'),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$utils$2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSupportHref"])(projectId),
                                children: program.ctas.primary
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/hero-section/hero-content.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/shell/src/components/hero-section/hero-content.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/shell/src/components/hero-section/hero-content.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/shell/src/components/hero-section/hero-content.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/shell/src/components/hero-section/hero-content.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
});
}),
"[project]/apps/shell/src/components/hero-section/hero-navigation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroNavigation",
    ()=>HeroNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.475.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.475.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.475.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.475.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/shell/src/lib/utils.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
/**
 * Desktop Navigation Component
 * Single Responsibility: Desktop program navigation
 */ const DesktopNavigation = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function DesktopNavigation({ programIndex, isSwitching, onSwitch }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute right-4 top-1/2 hidden -translate-y-1/2 items-center gap-4 md:flex md:right-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-headline text-6xl font-black sm:text-7xl md:text-9xl",
                    children: (programIndex + 1).toString().padStart(2, '0')
                }, void 0, false, {
                    fileName: "[project]/apps/shell/src/components/hero-section/hero-navigation.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/shell/src/components/hero-section/hero-navigation.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>void onSwitch(-1),
                        disabled: isSwitching,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(isSwitching && 'opacity-60'),
                        "aria-label": "Previous Program",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                className: "h-6 w-6 transition-transform hover:scale-125"
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/hero-section/hero-navigation.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold uppercase",
                                children: "Prev"
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/hero-section/hero-navigation.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/shell/src/components/hero-section/hero-navigation.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-16 w-px bg-white/50"
                    }, void 0, false, {
                        fileName: "[project]/apps/shell/src/components/hero-section/hero-navigation.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>void onSwitch(1),
                        disabled: isSwitching,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(isSwitching && 'opacity-60'),
                        "aria-label": "Next Program",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold uppercase",
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/hero-section/hero-navigation.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: "h-6 w-6 transition-transform hover:scale-125"
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/hero-section/hero-navigation.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/shell/src/components/hero-section/hero-navigation.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/shell/src/components/hero-section/hero-navigation.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/shell/src/components/hero-section/hero-navigation.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
});
/**
 * Mobile Navigation Component
 * Single Responsibility: Mobile program navigation
 */ const MobileNavigation = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function MobileNavigation({ programIndex, isSwitching, indexPulse, onSwitch }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none relative z-20 w-full md:hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-auto mx-auto w-full max-w-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>void onSwitch(-1),
                        disabled: isSwitching,
                        "aria-label": "Previous Program",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('group inline-flex min-h-[44px] items-center gap-2', 'touch-manipulation select-none', 'text-white/80 transition', 'active:scale-[0.98] active:text-white', 'disabled:opacity-40 disabled:active:scale-100'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                className: "h-5 w-5 transition-transform group-active:-translate-x-0.5"
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/hero-section/hero-navigation.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold uppercase tracking-[0.18em]",
                                children: "Prev"
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/hero-section/hero-navigation.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/shell/src/components/hero-section/hero-navigation.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-h-[44px] items-center justify-center px-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('font-headline text-3xl font-black tabular-nums', 'text-white/90', 'animate-[pulse_260ms_ease-out_1]'),
                            children: (programIndex + 1).toString().padStart(2, '0')
                        }, indexPulse, false, {
                            fileName: "[project]/apps/shell/src/components/hero-section/hero-navigation.tsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/shell/src/components/hero-section/hero-navigation.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>void onSwitch(1),
                        disabled: isSwitching,
                        "aria-label": "Next Program",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('group inline-flex min-h-[44px] items-center gap-2', 'touch-manipulation select-none', 'text-white/80 transition', 'active:scale-[0.98] active:text-white', 'disabled:opacity-40 disabled:active:scale-100'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold uppercase tracking-[0.18em]",
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/hero-section/hero-navigation.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "h-5 w-5 transition-transform group-active:translate-x-0.5"
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/hero-section/hero-navigation.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/shell/src/components/hero-section/hero-navigation.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/shell/src/components/hero-section/hero-navigation.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/shell/src/components/hero-section/hero-navigation.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/shell/src/components/hero-section/hero-navigation.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
});
const HeroNavigation = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function HeroNavigation(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DesktopNavigation, {
                ...props
            }, void 0, false, {
                fileName: "[project]/apps/shell/src/components/hero-section/hero-navigation.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileNavigation, {
                ...props
            }, void 0, false, {
                fileName: "[project]/apps/shell/src/components/hero-section/hero-navigation.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
});
}),
"[project]/apps/shell/src/components/hero-section/social-links.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SocialLinks",
    ()=>SocialLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/shell/src/lib/data.ts [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
const SocialLinks = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function SocialLinks() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 flex items-center justify-center gap-4 md:hidden",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["socialLinks"].map(({ name, href, Icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: href,
                        "aria-label": `QIA on ${name}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: "h-5 w-5 transition-colors hover:text-accent"
                        }, void 0, false, {
                            fileName: "[project]/apps/shell/src/components/hero-section/social-links.tsx",
                            lineNumber: 17,
                            columnNumber: 13
                        }, this)
                    }, name, false, {
                        fileName: "[project]/apps/shell/src/components/hero-section/social-links.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/shell/src/components/hero-section/social-links.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-6 md:flex sm:bottom-8",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["socialLinks"].map(({ name, href, Icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: href,
                        "aria-label": `QIA on ${name}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: "h-6 w-6 transition-colors hover:text-accent"
                        }, void 0, false, {
                            fileName: "[project]/apps/shell/src/components/hero-section/social-links.tsx",
                            lineNumber: 26,
                            columnNumber: 13
                        }, this)
                    }, name, false, {
                        fileName: "[project]/apps/shell/src/components/hero-section/social-links.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/shell/src/components/hero-section/social-links.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
});
}),
"[project]/apps/shell/src/components/hero-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * HeroSection Component
 * 
 * Clean Code Principles Applied:
 * - Single Responsibility: Orchestrates hero section UI
 * - Separation of Concerns: Business logic in hooks/services
 * - Dependency Inversion: Uses abstractions (hooks, services)
 * - Composition: Uses smaller components
 * 
 * Design Patterns Applied:
 * - Strategy Pattern: Parallax effects via services
 * - Factory Pattern: Color/model retrieval
 * - Observer Pattern: Cache subscription
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/shell/src/lib/data.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/types/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$sequence$2f$sequenceCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/lib/sequence/sequenceCache.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$hooks$2f$useScrollSequence$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/hooks/useScrollSequence.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$hooks$2f$useHeroBoot$2e$hook$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/hooks/useHeroBoot.hook.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$hooks$2f$useCanvasRenderer$2e$hook$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/hooks/useCanvasRenderer.hook.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$hooks$2f$useProgramSwitch$2e$hook$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/hooks/useProgramSwitch.hook.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$contexts$2f$hero$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/contexts/hero-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/lib/analytics.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$domain$2f$models$2f$hero$2d$colors$2e$model$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/domain/models/hero-colors.model.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$domain$2f$constants$2f$hero$2e$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/domain/constants/hero.constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$services$2f$sequence$2f$sequence$2d$initialization$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/services/sequence/sequence-initialization.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$utils$2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/utils/routes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$utils$2f$eventBus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/utils/eventBus.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$loading$2d$screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/loading-screen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$hero$2d$section$2f$hero$2d$canvas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/hero-section/hero-canvas.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$hero$2d$section$2f$hero$2d$content$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/hero-section/hero-content.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$hero$2d$section$2f$hero$2d$navigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/hero-section/hero-navigation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$hero$2d$section$2f$social$2d$links$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/hero-section/social-links.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/ui/src/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/shell/src/lib/utils.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function HeroSection() {
    const { setActiveHero } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$contexts$2f$hero$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useHero"])();
    // Boot/preload state management
    const { bootReady, bootProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$hooks$2f$useHeroBoot$2e$hook$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useHeroBoot"])();
    // Program state
    const [programIndex, setProgramIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [indexPulse, setIndexPulse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // DOM refs
    const heroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Cache subscription for redraws
    const cacheVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$sequence$2f$sequenceCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sequenceCache"].subscribe, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$sequence$2f$sequenceCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sequenceCache"].getVersion, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$sequence$2f$sequenceCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sequenceCache"].getVersion);
    // Current program and parallax config
    const program = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["programs"][programIndex];
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROJECTS"][programIndex];
    const projectId = project?.id || 'climate';
    const parallax = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$domain$2f$constants$2f$hero$2e$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PARALLAX_CONFIG"][programIndex % __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$domain$2f$constants$2f$hero$2e$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PARALLAX_CONFIG"].length];
    // Hero colors (memoized)
    const heroColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$domain$2f$models$2f$hero$2d$colors$2e$model$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHeroColors"])(program.name), [
        program.name
    ]);
    // Update active hero in context, track analytics, and emit event
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const previousProjectId = programIndex > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROJECTS"][programIndex - 1]?.id : undefined;
        setActiveHero(program.name);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackProgramSwitch"])(program.name);
        // Emit project changed event for cross-app communication (optional, URL is source of truth)
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$utils$2f$eventBus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emitProjectChanged"])(projectId, previousProjectId);
        }
    }, [
        program.name,
        programIndex,
        projectId,
        setActiveHero
    ]);
    // Scroll sequence management
    const easingMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>parallax.easing, [
        parallax.easing
    ]);
    const { currentFrame, setFrameImmediate, forceFrame0Lock, unlockAfterSwitch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$hooks$2f$useScrollSequence$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollSequence"])({
        program,
        heroRef,
        easing: easingMode
    });
    // Freeze draw ref for program switching
    const freezeDrawRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Canvas rendering
    const { drawFrame, drawAuto } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$hooks$2f$useCanvasRenderer$2e$hook$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasRenderer"])({
        canvasRef,
        programName: program.name,
        currentFrame,
        bootReady,
        freezeDraw: freezeDrawRef.current
    });
    // Program switching
    const { isSwitching, switchProgram } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$hooks$2f$useProgramSwitch$2e$hook$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProgramSwitch"])({
        bootReady,
        programIndex,
        setProgramIndex,
        forceFrame0Lock,
        setFrameImmediate,
        unlockAfterSwitch,
        drawFrame,
        setIndexPulse,
        freezeDrawRef
    });
    // Auto-draw on frame/cache changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        drawAuto();
    }, [
        drawAuto,
        cacheVersion
    ]);
    // Redraw on resize
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleResize = ()=>drawAuto();
        window.addEventListener('resize', handleResize, {
            passive: true
        });
        return ()=>window.removeEventListener('resize', handleResize);
    }, [
        drawAuto
    ]);
    // Mobile preload window management
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!bootReady) return;
        const { ahead, behind } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$services$2f$sequence$2f$sequence$2d$initialization$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMobilePreloadWindow"])(program.name);
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$sequence$2f$sequenceCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sequenceCache"].preloadAround(program.name, currentFrame, ahead, behind);
    }, [
        bootReady,
        program.name,
        currentFrame
    ]);
    // Loading state
    if (!bootReady) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$loading$2d$screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadingScreen"], {
            progress: bootProgress
        }, void 0, false, {
            fileName: "[project]/apps/shell/src/components/hero-section.tsx",
            lineNumber: 145,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: heroRef,
        className: "relative w-full parallax-container",
        style: {
            height: `${parallax.scrollVh}vh`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sticky top-0 h-screen w-full overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$hero$2d$section$2f$hero$2d$canvas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeroCanvas"], {
                    canvasRef: canvasRef
                }, void 0, false, {
                    fileName: "[project]/apps/shell/src/components/hero-section.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 h-full w-full text-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-full flex-col gap-4 overflow-hidden md:hidden sm:gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "flex-shrink-0 pt-20 pb-6 px-4 sm:px-6 sm:pb-8 md:pb-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('space-y-2 transition-opacity duration-200', isSwitching ? 'opacity-0' : 'opacity-100'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "font-headline text-3xl font-black uppercase tracking-tighter leading-tight sm:text-4xl",
                                                children: program.name
                                            }, void 0, false, {
                                                fileName: "[project]/apps/shell/src/components/hero-section.tsx",
                                                lineNumber: 173,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-body text-xs font-light tracking-widest sm:text-sm",
                                                children: program.subtitle
                                            }, void 0, false, {
                                                fileName: "[project]/apps/shell/src/components/hero-section.tsx",
                                                lineNumber: 176,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-body text-xs leading-relaxed sm:text-sm",
                                                children: program.description
                                            }, void 0, false, {
                                                fileName: "[project]/apps/shell/src/components/hero-section.tsx",
                                                lineNumber: 179,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/shell/src/components/hero-section.tsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/shell/src/components/hero-section.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "flex-1 min-h-0 w-full",
                                    "aria-label": "Canvas frame area"
                                }, void 0, false, {
                                    fileName: "[project]/apps/shell/src/components/hero-section.tsx",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "flex-shrink-0 px-4 pb-4 space-y-3 sm:px-6 sm:pb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('transition-opacity duration-200', isSwitching ? 'opacity-0' : 'opacity-100'),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$hero$2d$section$2f$hero$2d$navigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeroNavigation"], {
                                                programIndex: programIndex,
                                                isSwitching: isSwitching,
                                                indexPulse: indexPulse,
                                                onSwitch: switchProgram
                                            }, void 0, false, {
                                                fileName: "[project]/apps/shell/src/components/hero-section.tsx",
                                                lineNumber: 199,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/shell/src/components/hero-section.tsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2 transition-opacity duration-200 sm:gap-3', isSwitching ? 'opacity-0' : 'opacity-100'),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    asChild: true,
                                                    size: "default",
                                                    variant: "outline",
                                                    className: "rounded-full border-2 bg-transparent/10 backdrop-blur-sm text-white transition-all text-xs py-1.5 h-auto sm:text-sm sm:py-2",
                                                    style: {
                                                        borderColor: `${heroColors.primary}80`,
                                                        color: 'white'
                                                    },
                                                    onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackButtonClick"])(program.ctas.secondary, 'hero'),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$utils$2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDetailsHref"])(projectId),
                                                        children: program.ctas.secondary
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/shell/src/components/hero-section.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/shell/src/components/hero-section.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    asChild: true,
                                                    size: "default",
                                                    className: "rounded-full text-white transition-all text-xs py-1.5 h-auto sm:text-sm sm:py-2",
                                                    style: {
                                                        backgroundColor: heroColors.accent,
                                                        color: '#022D2B',
                                                        boxShadow: `0 10px 15px -3px ${heroColors.accent}40`
                                                    },
                                                    onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackButtonClick"])(program.ctas.primary, 'hero'),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$utils$2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSupportHref"])(projectId),
                                                        children: program.ctas.primary
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/shell/src/components/hero-section.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/shell/src/components/hero-section.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/shell/src/components/hero-section.tsx",
                                            lineNumber: 208,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('transition-opacity duration-200', isSwitching ? 'opacity-0' : 'opacity-100'),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$hero$2d$section$2f$social$2d$links$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SocialLinks"], {}, void 0, false, {
                                                fileName: "[project]/apps/shell/src/components/hero-section.tsx",
                                                lineNumber: 254,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/shell/src/components/hero-section.tsx",
                                            lineNumber: 248,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/shell/src/components/hero-section.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/shell/src/components/hero-section.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container relative z-10 mx-auto hidden h-full items-center px-4 md:flex md:px-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$hero$2d$section$2f$hero$2d$content$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeroContent"], {
                                    program: program,
                                    projectId: projectId,
                                    heroColors: heroColors,
                                    isSwitching: isSwitching
                                }, void 0, false, {
                                    fileName: "[project]/apps/shell/src/components/hero-section.tsx",
                                    lineNumber: 262,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$hero$2d$section$2f$hero$2d$navigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeroNavigation"], {
                                    programIndex: programIndex,
                                    isSwitching: isSwitching,
                                    indexPulse: indexPulse,
                                    onSwitch: switchProgram
                                }, void 0, false, {
                                    fileName: "[project]/apps/shell/src/components/hero-section.tsx",
                                    lineNumber: 269,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$hero$2d$section$2f$social$2d$links$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SocialLinks"], {}, void 0, false, {
                                    fileName: "[project]/apps/shell/src/components/hero-section.tsx",
                                    lineNumber: 277,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/shell/src/components/hero-section.tsx",
                            lineNumber: 261,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/shell/src/components/hero-section.tsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/shell/src/components/hero-section.tsx",
            lineNumber: 154,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/shell/src/components/hero-section.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_8c7718da._.js.map