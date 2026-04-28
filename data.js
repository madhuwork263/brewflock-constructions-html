const locationData = {
    bengaluru: {
        name: "Bengaluru",
        homes: [
            { id: "basic", name: "Basic", price: "1940", description: "A budget package with no compromise on quality that includes all construction essentials", highlights: ["Trusted brand steel & cement", "Standard floor tiles upto ₹50/sqft", "Standard flush doors and window finish", "Tractor Emulsion finish", "Essential kitchen & bathroom fittings"], popular: false, logos: ["SUNVIK", "Dalmia", "ap", "CERA"] },
            { id: "classic", name: "Classic", price: "2070", description: "Our best seller package with upgraded brands like Jindal Steels, Hindware etc at a considerable price", highlights: ["Superior brand steel & cement", "Refined floor tiles upto ₹100/sqft", "Elegant teak doors and window finish", "Tractor Shyne Emulsion finish", "Stylish kitchen & bathroom"], popular: true, logos: ["Anjani", "Dalmia", "ap", "hindware"] },
            { id: "premium", name: "Premium", price: "2400", description: "An elegant package crafted for modern living with extra provisions like solar heater setup, puja room door etc", highlights: ["Superior Brand steel & cement", "Premium floor tiles upto ₹140/sqft", "Designer teak doors and window finish", "Apcolite Premium finish", "Quality kitchen & bathroom"], popular: false, logos: ["Anjani", "UltraTech", "ap", "Jaquar"] },
            { id: "royale", name: "Royale", price: "2640", description: "An ultimate plan with high-end finishes with amenities like EV charging, copper gas connection etc", highlights: ["Superior brand steel & cement", "Lavish floor tiles upto ₹160/sqft", "Designer teak doors and window finish", "Apex Ultima Exterior finish", "Lavish Fittings for kitchen & bathroom"], popular: false, logos: ["Anjani", "UltraTech", "ap", "KOHLER"] }
        ],
        luxury: [
            { id: "freesia", name: "Freesia", price: "3990", description: "A top-tier luxury package with marble flooring, home automation ensuring earthquake resistant designs", highlights: ["Burma teak door worth ₹80K", "Italian marble floor tiles value upto ₹380/sqft", "Home automation worth upto ₹5L", "Premium bathroom brands like Kohler/Grohe", "Soundproofed UPVC/wood windows"], popular: false, logos: ["Jaquar", "UltraTech", "ap", "KOHLER"] },
            { id: "dahlia", name: "Dahlia", price: "5180", description: "An ultra-luxury package with premium amenities like smart automation, elegant interiors, and Mitsubishi elevator.", highlights: ["Burma teak door worth ₹1.2L", "Italian marble floor tiles value upto ₹450/sqft", "Smart home automation worth upto ₹7L", "Premium bathroom brands like Kohler/Grohe", "Soundproofed UPVC/wood windows with mesh shutters"], popular: false, logos: ["Jaquar", "UltraTech", "ap", "GROHE"] },
            { id: "magnolia", name: "Magnolia", price: "6340", description: "The pinnacle of opulence with indulgence features like private lap pool, advanced automation, and premium designer finishes.", highlights: ["Burma teak door worth ₹1.5L", "Italian marble floor tiles value upto ₹500/sqft", "Advanced automation + VDP upto ₹10L", "Jacuzzi with luxurious sanitary fittings of AS", "Double-glazed windows, sound + weather proof"], popular: false, logos: ["Jaquar", "UltraTech", "ap", "American Standard"] }
        ]
    },
    mysuru: {
        name: "Mysuru",
        homes: [
            { id: "basic", name: "Basic", price: "1750", description: "A budget package with no compromise on quality that includes all construction essentials", highlights: ["Trusted brand steel & cement", "Standard floor tiles upto ₹40/sqft", "Standard flush doors", "Tractor Emulsion finish"], popular: false, logos: ["SUNVIK", "Dalmia", "ap", "CERA"] },
            { id: "classic", name: "Classic", price: "1890", description: "Our best seller package with upgraded brands like Jindal Steels, Hindware etc at a considerable price", highlights: ["Superior brand steel & cement", "Refined floor tiles upto ₹80/sqft", "Elegant teak doors", "Tractor Shyne Emulsion finish"], popular: true, logos: ["Anjani", "Dalmia", "ap", "hindware"] },
            { id: "premium", name: "Premium", price: "2150", description: "An elegant package crafted for modern living with extra provisions like solar heater setup, puja room door etc", highlights: ["Superior Brand steel & cement", "Premium floor tiles upto ₹120/sqft", "Designer teak doors", "Apcolite Premium finish"], popular: false, logos: ["Anjani", "UltraTech", "ap", "Jaquar"] },
            { id: "royale", name: "Royale", price: "2450", description: "An ultimate plan with high-end finishes with amenities like EV charging, copper gas connection etc", highlights: ["Superior brand steel & cement", "Lavish floor tiles upto ₹140/sqft", "Designer teak doors", "Apex Ultima Exterior finish"], popular: false, logos: ["Anjani", "UltraTech", "ap", "KOHLER"] }
        ],
        luxury: [
            { id: "freesia", name: "Freesia", price: "3600", description: "A top-tier luxury package with marble flooring, home automation ensuring earthquake resistant designs", highlights: ["Burma teak door worth ₹70K", "Italian marble floor tiles value upto ₹320/sqft", "Home automation worth upto ₹4L"], popular: false, logos: ["Jaquar", "UltraTech", "ap", "KOHLER"] },
            { id: "dahlia", name: "Dahlia", price: "4800", description: "An ultra-luxury package with premium amenities like smart automation, elegant interiors.", highlights: ["Burma teak door worth ₹1L", "Italian marble floor tiles value upto ₹400/sqft", "Smart home automation worth upto ₹6L"], popular: false, logos: ["Jaquar", "UltraTech", "ap", "GROHE"] },
            { id: "magnolia", name: "Magnolia", price: "5900", description: "The pinnacle of opulence with indulgence features like private lap pool, advanced automation.", highlights: ["Burma teak door worth ₹1.3L", "Italian marble floor tiles value upto ₹450/sqft", "Advanced automation + VDP upto ₹8L"], popular: false, logos: ["Jaquar", "UltraTech", "ap", "American Standard"] }
        ]
    },
    hassan: {
        name: "Hassan",
        homes: [
            { id: "basic", name: "Basic", price: "1650", description: "A budget package with no compromise on quality that includes all construction essentials", highlights: ["Trusted brand steel & cement", "Standard floor tiles upto ₹40/sqft", "Standard flush doors"], popular: false, logos: ["SUNVIK", "Dalmia", "ap"] },
            { id: "classic", name: "Classic", price: "1780", description: "Our best seller package with upgraded brands", highlights: ["Superior brand steel & cement", "Refined floor tiles upto ₹80/sqft", "Elegant teak doors"], popular: true, logos: ["Anjani", "Dalmia", "ap"] },
            { id: "premium", name: "Premium", price: "1950", description: "An elegant package crafted for modern living", highlights: ["Superior Brand steel & cement", "Premium floor tiles upto ₹110/sqft", "Designer teak doors"], popular: false, logos: ["Anjani", "UltraTech", "ap"] },
            { id: "royale", name: "Royale", price: "2200", description: "An ultimate plan with high-end finishes", highlights: ["Superior brand steel & cement", "Lavish floor tiles upto ₹130/sqft", "Designer teak doors"], popular: false, logos: ["Anjani", "UltraTech", "ap"] }
        ],
        luxury: [
            { id: "freesia", name: "Freesia", price: "3400", description: "A top-tier luxury package with marble flooring", highlights: ["Burma teak door worth ₹60K", "Italian marble floor tiles value upto ₹300/sqft", "Home automation worth upto ₹3L"], popular: false, logos: ["Jaquar", "UltraTech", "ap"] },
            { id: "dahlia", name: "Dahlia", price: "4500", description: "An ultra-luxury package with premium amenities", highlights: ["Burma teak door worth ₹90K", "Italian marble floor tiles value upto ₹380/sqft", "Smart home automation worth upto ₹5L"], popular: false, logos: ["Jaquar", "UltraTech", "ap"] },
            { id: "magnolia", name: "Magnolia", price: "5500", description: "The pinnacle of opulence with indulgence features", highlights: ["Burma teak door worth ₹1.2L", "Italian marble floor tiles value upto ₹420/sqft", "Advanced automation + VDP upto ₹7L"], popular: false, logos: ["Jaquar", "UltraTech", "ap"] }
        ]
    },
    pune: {
        name: "Pune",
        homes: [
            { id: "basic", name: "Basic", price: "1900", description: "A budget package with no compromise on quality that includes all construction essentials", highlights: ["Trusted brand steel & cement", "Standard floor tiles upto ₹50/sqft", "Standard flush doors", "Tractor Emulsion finish"], popular: false, logos: ["SUNVIK", "Dalmia", "ap", "CERA"] },
            { id: "classic", name: "Classic", price: "2050", description: "Our best seller package with upgraded brands like Jindal Steels, Hindware etc at a considerable price", highlights: ["Superior brand steel & cement", "Refined floor tiles upto ₹100/sqft", "Elegant teak doors", "Tractor Shyne Emulsion finish"], popular: true, logos: ["Anjani", "Dalmia", "ap", "hindware"] },
            { id: "premium", name: "Premium", price: "2350", description: "An elegant package crafted for modern living with extra provisions like solar heater setup, puja room door etc", highlights: ["Superior Brand steel & cement", "Premium floor tiles upto ₹140/sqft", "Designer teak doors", "Apcolite Premium finish"], popular: false, logos: ["Anjani", "UltraTech", "ap", "Jaquar"] },
            { id: "royale", name: "Royale", price: "2600", description: "An ultimate plan with high-end finishes with amenities like EV charging, copper gas connection etc", highlights: ["Superior brand steel & cement", "Lavish floor tiles upto ₹160/sqft", "Designer teak doors", "Apex Ultima Exterior finish"], popular: false, logos: ["Anjani", "UltraTech", "ap", "KOHLER"] }
        ],
        luxury: [
            { id: "freesia", name: "Freesia", price: "3950", description: "A top-tier luxury package with marble flooring, home automation ensuring earthquake resistant designs", highlights: ["Burma teak door worth ₹80K", "Italian marble floor tiles value upto ₹380/sqft", "Home automation worth upto ₹5L"], popular: false, logos: ["Jaquar", "UltraTech", "ap", "KOHLER"] },
            { id: "dahlia", name: "Dahlia", price: "5100", description: "An ultra-luxury package with premium amenities like smart automation, elegant interiors.", highlights: ["Burma teak door worth ₹1.2L", "Italian marble floor tiles value upto ₹450/sqft", "Smart home automation worth upto ₹7L"], popular: false, logos: ["Jaquar", "UltraTech", "ap", "GROHE"] },
            { id: "magnolia", name: "Magnolia", price: "6250", description: "The pinnacle of opulence with indulgence features like private lap pool, advanced automation.", highlights: ["Burma teak door worth ₹1.5L", "Italian marble floor tiles value upto ₹500/sqft", "Advanced automation + VDP upto ₹10L"], popular: false, logos: ["Jaquar", "UltraTech", "ap", "American Standard"] }
        ]
    }
};