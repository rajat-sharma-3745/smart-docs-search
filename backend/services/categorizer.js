const categoryKeywords = {
    Marketing: [
        "campaign",
        "strategy",
        "branding",
        "advertising",
        "promotion",
        "market",
        "audience",
        "reach",
        "engagement",
        "conversion"
    ],

    Product: [
        "feature",
        "release",
        "roadmap",
        "specification",
        "update",
        "prototype",
        "design",
        "development",
        "architecture",
        "testing"
    ],

    Research: [
        "analysis",
        "survey",
        "study",
        "data",
        "report",
        "insights",
        "metrics",
        "benchmark",
        "evaluation",
        "findings"
    ],

    Finance: [
        "budget",
        "investment",
        "cost",
        "profit",
        "loss",
        "expense",
        "revenue",
        "audit",
        "valuation",
        "forecast"
    ],

    HR: [
        "hiring",
        "employee",
        "training",
        "onboarding",
        "policy",
        "team",
        "recruitment",
        "salary",
        "culture",
        "performance"
    ],

    Sales: [
        "leads",
        "pipeline",
        "crm",
        "deal",
        "closing",
        "proposal",
        "quote",
        "client",
        "revenue",
        "target"
    ],

    Technical: [
        "server",
        "api",
        "database",
        "infrastructure",
        "deployment",
        "backend",
        "frontend",
        "algorithm",
        "cloud",
        "system"
    ],

    Legal: [
        "contract",
        "agreement",
        "compliance",
        "policy",
        "terms",
        "conditions",
        "privacy",
        "rights",
        "regulation",
        "liability"
    ],

    Content: [
        "article",
        "blog",
        "copywriting",
        "script",
        "content",
        "post",
        "message",
        "editorial",
        "media",
        "creative"
    ],

    Operations: [
        "workflow",
        "process",
        "operations",
        "productivity",
        "sop",
        "management",
        "efficiency",
        "monitoring",
        "tracking",
        "coordination"
    ],

    Support: [
        "ticket",
        "issue",
        "help",
        "customer",
        "query",
        "response",
        "support",
        "complaint",
        "resolution",
        "service"
    ]
};


export const autoCategorize = (text) => {
    const categories = []
    const lowerText = text.toLowerCase();
    for (const category in categoryKeywords) {
        let match = categoryKeywords[category].some(word => lowerText.includes(word.toLowerCase()))
        if (match) categories.push(category);
    }
    return categories;
}