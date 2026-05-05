// Helper function to generate the common sections to avoid massive code repetition.
// In a real app, you might fetch this from an API.
function generateSections(priceMultiplier = 1) {
    return {
        homes: [
            {
                title: "STRUCTURE",
                note: "*RCC design mix as advised by the structural engineer",
                rows: [
                    { feature: "Steel (Fe 550/Fe 550D)", basic: "Sunvik / Prime gold", classic: "Indus / Jindal Panther", premium: "Indus / Jindal Panther", royale: "Indus / Jindal Panther" },
                    { feature: "Cement", basic: "Zuari / Dalmia", classic: "Zuari / Dalmia", premium: "ACC / Ultratech", royale: "ACC / Ultratech" },
                    { feature: "Aggregates", basic: "20mm & 40mm", classic: "20mm & 40mm", premium: "20mm & 40mm", royale: "20mm & 40mm" },
                    { feature: "Ceiling height", basic: "10 ft", classic: "10 ft", premium: "10 ft", royale: "10 ft" }
                ]
            },
            {
                title: "KITCHEN",
                rows: [
                    { feature: "Ceramic Wall Dado", basic: `Upto ₹${Math.floor(240 * priceMultiplier)}/sqft`, classic: `Upto ₹${Math.floor(260 * priceMultiplier)}/sqft`, premium: `Upto ₹${Math.floor(280 * priceMultiplier)}/sqft`, royale: `Upto ₹${Math.floor(290 * priceMultiplier)}/sqft` },
                    { feature: "Sink", basic: "Upto ₹3000", classic: "Upto ₹6000", premium: "Upto ₹8000", royale: "Upto ₹10000" },
                    { feature: "Sink Faucet", basic: "Upto ₹1300", classic: "Upto ₹2600", premium: "Upto ₹3500", royale: "Upto ₹3500" }
                ]
            },
            {
                title: "BATHROOM",
                rows: [
                    { feature: "Sanitary & CP fittings", basic: "Upto ₹30,000 / 1000 sqft", classic: "Upto ₹250,000 / 1000 sqft", premium: "Upto ₹270,000 / 1000 sqft", royale: "Upto ₹280,000 / 1000 sqft" },
                    { feature: "Bathroom Accessories", basic: false, classic: false, premium: "Worth ₹27,000", royale: "Worth ₹79,000" },
                    { feature: "Solar water heater", basic: false, classic: false, premium: true, royale: true }
                ]
            },
            {
                title: "DOORS & WINDOWS",
                rows: [
                    { feature: "Main Door", basic: "Flush doors upto ₹20,000", classic: "Teak Door worth ₹30,000", premium: "Teak Door worth ₹40,000", royale: "Teak Door worth ₹50,000" },
                    { feature: "Windows", basic: "Aluminium windows", classic: "UPVC windows", premium: "UPVC windows", royale: "UPVC windows (High End)" },
                    { feature: "Window grills", basic: true, classic: true, premium: true, royale: true }
                ]
            },
            {
                title: "WIRING & ELECTRICAL",
                rows: [
                    { feature: "Fireproof Wiring", basic: "Finolex / Anchor", classic: "Finolex / Anchor", premium: "Finolex / Anchor", royale: "Finolex / Anchor" },
                    { feature: "Switch & Socket", basic: "Legrand / GM", classic: "Roma / Havells", premium: "Legrand mylinc", royale: "Schneider / Jaquar" },
                    { feature: "EV Charging point", basic: false, classic: false, premium: false, royale: true }
                ]
            }
        ],
        luxury: [
            {
                title: "STRUCTURE & ARCHITECTURE",
                note: "Engineered for earthquake resistance and premium volumes",
                rows: [
                    { feature: "Steel (Primary)", freesia: "Tata Tiscon / JSW Neosteel", dahlia: "Tata Tiscon / JSW Neosteel", magnolia: "Tata Tiscon / JSW Neosteel" },
                    { feature: "Wall Construction", freesia: "Premium AAC Blocks", dahlia: "Porotherm Smart Bricks", magnolia: "Porotherm Smart Bricks" },
                    { feature: "Ceiling Height", freesia: "11 ft", dahlia: "11.5 ft", magnolia: "12 ft (Grand Volumes)" }
                ]
            },
            {
                title: "SMART HOME & AUTOMATION",
                rows: [
                    { feature: "Home Automation Budget", freesia: `Upto ₹${Math.floor(5 * priceMultiplier)} Lakhs`, dahlia: `Upto ₹${Math.floor(7 * priceMultiplier)} Lakhs`, magnolia: `Upto ₹${Math.floor(10 * priceMultiplier)} Lakhs` },
                    { feature: "Switches & Controls", freesia: "Schneider Smart Range", dahlia: "Smart Touch Panels", magnolia: "Imported Glass Touch Panels" },
                    { feature: "EV Charging Station", freesia: true, dahlia: true, magnolia: "Dual High-Speed EV Stations" }
                ]
            },
            {
                title: "FLOORING & SURFACES",
                rows: [
                    { feature: "Living & Dining (Italian Marble)", freesia: `Value upto ₹${Math.floor(380 * priceMultiplier)}/sqft`, dahlia: `Value upto ₹${Math.floor(450 * priceMultiplier)}/sqft`, magnolia: `Value upto ₹${Math.floor(500 * priceMultiplier)}/sqft` },
                    { feature: "Master Bedroom", freesia: "Premium Wooden Flooring", dahlia: "Imported Wooden Flooring", magnolia: "High-end Hardwood Flooring" }
                ]
            },
            {
                title: "EXCLUSIVE LUXURY AMENITIES",
                rows: [
                    { feature: "Elevator", freesia: "Elevator pit provision", dahlia: "Mitsubishi Elevator Included", magnolia: "Premium Glass Cabin Elevator" },
                    { feature: "Recreation & Landscape", freesia: false, dahlia: "Landscaped Terrace Garden", magnolia: "Private Lap Pool + Designer Landscape" }
                ]
            }
        ]
    };
}

const compareData = {
    bengaluru: {
        name: "Bengaluru",
        homes: {
            packages: [
                { id: 'basic', name: 'Basic', price: '1940' },
                { id: 'classic', name: 'Classic', price: '2070' },
                { id: 'premium', name: 'Premium', price: '2400' },
                { id: 'royale', name: 'Royale', price: '2640' }
            ],
            sections: generateSections(1).homes
        },
        luxury: {
            packages: [
                { id: 'freesia', name: 'Freesia', price: '3990' },
                { id: 'dahlia', name: 'Dahlia', price: '5180' },
                { id: 'magnolia', name: 'Magnolia', price: '6340' }
            ],
            sections: generateSections(1).luxury
        }
    },
    mysuru: {
        name: "Mysuru",
        homes: {
            packages: [
                { id: 'basic', name: 'Basic', price: '1750' },
                { id: 'classic', name: 'Classic', price: '1890' },
                { id: 'premium', name: 'Premium', price: '2150' },
                { id: 'royale', name: 'Royale', price: '2450' }
            ],
            sections: generateSections(0.9).homes
        },
        luxury: {
            packages: [
                { id: 'freesia', name: 'Freesia', price: '3600' },
                { id: 'dahlia', name: 'Dahlia', price: '4800' },
                { id: 'magnolia', name: 'Magnolia', price: '5900' }
            ],
            sections: generateSections(0.9).luxury
        }
    },
    hassan: {
        name: "Hassan",
        homes: {
            packages: [
                { id: 'basic', name: 'Basic', price: '1650' },
                { id: 'classic', name: 'Classic', price: '1780' },
                { id: 'premium', name: 'Premium', price: '1950' },
                { id: 'royale', name: 'Royale', price: '2200' }
            ],
            sections: generateSections(0.85).homes
        },
        luxury: {
            packages: [
                { id: 'freesia', name: 'Freesia', price: '3400' },
                { id: 'dahlia', name: 'Dahlia', price: '4500' },
                { id: 'magnolia', name: 'Magnolia', price: '5500' }
            ],
            sections: generateSections(0.85).luxury
        }
    },
    pune: {
        name: "Pune",
        homes: {
            packages: [
                { id: 'basic', name: 'Basic', price: '1900' },
                { id: 'classic', name: 'Classic', price: '2050' },
                { id: 'premium', name: 'Premium', price: '2350' },
                { id: 'royale', name: 'Royale', price: '2600' }
            ],
            sections: generateSections(0.98).homes
        },
        luxury: {
            packages: [
                { id: 'freesia', name: 'Freesia', price: '3950' },
                { id: 'dahlia', name: 'Dahlia', price: '5100' },
                { id: 'magnolia', name: 'Magnolia', price: '6250' }
            ],
            sections: generateSections(0.98).luxury
        }
    }
};