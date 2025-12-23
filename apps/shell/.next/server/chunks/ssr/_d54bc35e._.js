module.exports = [
"[project]/packages/types/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/apps/shell/src/lib/data.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-rsc] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-rsc] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-rsc] (ecmascript) <export default as Twitter>");
// Import first, then re-export
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$types$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/types/index.ts [app-rsc] (ecmascript)");
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
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"]
    },
    {
        name: 'Instagram',
        href: '#',
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"]
    },
    {
        name: 'Facebook',
        href: '#',
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"]
    }
];
;
;
const programs = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$types$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PROJECTS"].map((project)=>({
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
"[project]/apps/shell/src/components/footer.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/shell/src/lib/data.ts [app-rsc] (ecmascript) <locals>");
;
;
;
;
const Footer = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["memo"])(function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-muted text-muted-foreground",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-8 md:px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center md:items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "font-headline text-3xl font-black tracking-tighter text-foreground",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["agencyConfig"].name
                                }, void 0, false, {
                                    fileName: "[project]/apps/shell/src/components/footer.tsx",
                                    lineNumber: 15,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 max-w-xs text-sm",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["agencyConfig"].description
                                }, void 0, false, {
                                    fileName: "[project]/apps/shell/src/components/footer.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/shell/src/components/footer.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["socialLinks"].map(({ name, href, Icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: href,
                                    "aria-label": `QIA on ${name}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "h-6 w-6 transition-colors hover:text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/shell/src/components/footer.tsx",
                                        lineNumber: 25,
                                        columnNumber: 17
                                    }, this)
                                }, name, false, {
                                    fileName: "[project]/apps/shell/src/components/footer.tsx",
                                    lineNumber: 24,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/shell/src/components/footer.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/shell/src/components/footer.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 border-t pt-6 text-center text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "italic",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["agencyConfig"].trustNote
                        }, void 0, false, {
                            fileName: "[project]/apps/shell/src/components/footer.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["agencyConfig"].footerCopyright
                        }, void 0, false, {
                            fileName: "[project]/apps/shell/src/components/footer.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/shell/src/components/footer.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/shell/src/components/footer.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/shell/src/components/footer.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
});
}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/node_modules/next/dist/client/app-dir/link.js <module evaluation>"));
}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy)", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/node_modules/next/dist/client/app-dir/link.js"));
}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses,
    "toKebabCase",
    ()=>toKebabCase
]);
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/Icon.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-rsc] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/Icon.js [app-rsc] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toKebabCase"])(iconName)}`, className),
            ...props
        }));
    Component.displayName = `${iconName}`;
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Facebook
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
            key: "1jg4f8"
        }
    ]
];
const Facebook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("Facebook", __iconNode);
;
 //# sourceMappingURL=facebook.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-rsc] (ecmascript) <export default as Facebook>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Facebook",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Instagram
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "rect",
        {
            width: "20",
            height: "20",
            x: "2",
            y: "2",
            rx: "5",
            ry: "5",
            key: "2e1cvw"
        }
    ],
    [
        "path",
        {
            d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
            key: "9exkf1"
        }
    ],
    [
        "line",
        {
            x1: "17.5",
            x2: "17.51",
            y1: "6.5",
            y2: "6.5",
            key: "r4j83e"
        }
    ]
];
const Instagram = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("Instagram", __iconNode);
;
 //# sourceMappingURL=instagram.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-rsc] (ecmascript) <export default as Instagram>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Instagram",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Twitter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
            key: "pff0z6"
        }
    ]
];
const Twitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("Twitter", __iconNode);
;
 //# sourceMappingURL=twitter.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-rsc] (ecmascript) <export default as Twitter>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Twitter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_d54bc35e._.js.map