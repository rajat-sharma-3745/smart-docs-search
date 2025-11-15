const categoryKeywords = {
    marketing: ["strategy", "market", "audience", "research"],
    branding: ["logo", "brand", "identity", "guidelines"],
    pricing: ["price", "cost", "discount", "rate"],
    campaigns: ["campaign", "launch", "ads", "promotion"],
    socialmedia: ["instagram", "facebook", "post", "social"],
};

export const autoCategorize = (text) => {
    const categories = []
    const lowerText = text.toLowerCase();
    for (const category in categoryKeywords) {
        let match = categoryKeywords[category].some(word=>lowerText.includes(word))
        if(match) categories.push(category);
    }
    return categories;
}