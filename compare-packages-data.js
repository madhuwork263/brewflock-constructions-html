// Helper function to generate the common sections to avoid massive code repetition.
// In a real app, you might fetch this from an API.
// Helper function to generate the common sections to avoid massive code repetition.
// In a real app, you might fetch this from an API.
function generateSections(priceMultiplier = 1) {
    return {
        homes: [
            {
                title: "STRUCTURE",
                note: "*RCC design mix as advised by the structural engineer",
                rows: [
                    { feature: "Steel (Fe 550/Fe 550D)", basic: "Sunvik / Prime gold", classic: "Indus / Jindal Panther", premium: "Indus / Jindal Panther", royale: "Tata Tiscon / JSW" },
                    { feature: "Cement", basic: "Zuari / Dalmia", classic: "Zuari / Dalmia", premium: "ACC / Ultratech", royale: "ACC / Ultratech" },
                    { feature: "Aggregates", basic: "20mm & 40mm", classic: "20mm & 40mm", premium: "20mm & 40mm", royale: "20mm & 40mm" },
                    { feature: "Blocks / Bricks", basic: "Standard Solid Blocks", classic: "Standard Solid Blocks", premium: "Premium AAC Blocks", royale: "Wire-cut Red Bricks / AAC" },
                    { feature: "Ceiling height", basic: "10 ft", classic: "10 ft", premium: "10 ft", royale: "10.5 ft" }
                ]
            },
            {
                title: "FLOORING",
                rows: [
                    { feature: "Living & Dining", basic: `Vitrified Tiles upto ₹${Math.floor(60 * priceMultiplier)}/sqft`, classic: `Vitrified Tiles upto ₹${Math.floor(80 * priceMultiplier)}/sqft`, premium: `Vitrified Tiles upto ₹${Math.floor(120 * priceMultiplier)}/sqft`, royale: `Granite / Tiles upto ₹${Math.floor(160 * priceMultiplier)}/sqft` },
                    { feature: "Bedrooms", basic: `Tiles upto ₹${Math.floor(50 * priceMultiplier)}/sqft`, classic: `Tiles upto ₹${Math.floor(60 * priceMultiplier)}/sqft`, premium: `Tiles upto ₹${Math.floor(90 * priceMultiplier)}/sqft`, royale: `Wooden Laminate / Tiles upto ₹${Math.floor(130 * priceMultiplier)}/sqft` },
                    { feature: "Balcony & Parking", basic: "Anti-skid Tiles", classic: "Anti-skid Tiles", premium: "Heavy Duty Parking Tiles", royale: "Designer Pavers / Granite" },
                    { feature: "Staircase", basic: "Sadahalli Granite", classic: "Sadahalli Granite", premium: "Premium Granite", royale: "Premium Granite / Marble" }
                ]
            },
            {
                title: "KITCHEN",
                rows: [
                    { feature: "Countertop", basic: "Black Granite (20mm)", classic: "Premium Granite (20mm)", premium: "Premium Granite / Quartz", royale: "High-end Quartz" },
                    { feature: "Ceramic Wall Dado", basic: `Upto ₹${Math.floor(240 * priceMultiplier)}/sqft`, classic: `Upto ₹${Math.floor(260 * priceMultiplier)}/sqft`, premium: `Upto ₹${Math.floor(280 * priceMultiplier)}/sqft`, royale: `Upto ₹${Math.floor(350 * priceMultiplier)}/sqft` },
                    { feature: "Sink", basic: "Stainless Steel (Upto ₹3000)", classic: "SS Single Bowl (Upto ₹6000)", premium: "SS Double Bowl (Upto ₹8000)", royale: "Franke / Carysil (Upto ₹15000)" },
                    { feature: "Sink Faucet", basic: "Upto ₹1300", classic: "Upto ₹2600", premium: "Upto ₹3500", royale: "Upto ₹5000 (Pull-out style)" }
                ]
            },
            {
                title: "BATHROOM",
                rows: [
                    { feature: "Sanitary & CP fittings", basic: "Upto ₹30,000 / 1000 sqft", classic: "Upto ₹50,000 / 1000 sqft", premium: "Upto ₹80,000 / 1000 sqft", royale: "Upto ₹120,000 / 1000 sqft" },
                    { feature: "Brands", basic: "Cera / Parryware", classic: "Hindware / Jaguar", premium: "Jaguar / Kohler", royale: "Kohler / Grohe" },
                    { feature: "Bathroom Accessories", basic: false, classic: false, premium: "Worth ₹27,000", royale: "Worth ₹79,000" },
                    { feature: "Wall Tiles Dado", basic: "Upto 7 ft height", classic: "Upto 7 ft height", premium: "Upto 8 ft height", royale: "Full ceiling height" },
                    { feature: "Solar water heater", basic: false, classic: false, premium: true, royale: true }
                ]
            },
            {
                title: "DOORS & WINDOWS",
                rows: [
                    { feature: "Main Door", basic: "Flush door upto ₹20,000", classic: "Teak Veneer worth ₹30,000", premium: "Teak Wood worth ₹40,000", royale: "Heavy Teak worth ₹60,000" },
                    { feature: "Internal Doors", basic: "Flush doors", classic: "Skin doors", premium: "Laminated doors", royale: "Veneer finish doors" },
                    { feature: "Windows", basic: "Aluminium sliding (2 track)", classic: "UPVC (2.5 track)", premium: "UPVC (3 track + mosquito mesh)", royale: "Premium UPVC / Domal Aluminium" },
                    { feature: "Window grills", basic: "MS Grills (Standard)", classic: "MS Grills (Standard)", premium: "Designer MS Grills", royale: "Heavy Designer MS Grills" }
                ]
            },
            {
                title: "PAINTING & FINISHES",
                rows: [
                    { feature: "Interior Walls", basic: "2 Coats Putty + Tractor Emulsion", classic: "2 Coats Putty + Premium Emulsion", premium: "2 Coats Putty + Royale Emulsion", royale: "3 Coats Putty + Royale Luxury" },
                    { feature: "Exterior Walls", basic: "Asian Paints Ace", classic: "Asian Paints Apex", premium: "Asian Paints Apex Ultima", royale: "Apex Ultima Protek (Waterproof)" }
                ]
            },
            {
                title: "WIRING & ELECTRICAL",
                rows: [
                    { feature: "Fireproof Wiring", basic: "Finolex / Anchor", classic: "Finolex / Anchor", premium: "Finolex / V-Guard", royale: "Polycab / Havells" },
                    { feature: "Switch & Socket", basic: "Anchor Roma / GM", classic: "Legrand Linc / Havells", premium: "Legrand Mylinc / Panasonic", royale: "Schneider / Norisys" },
                    { feature: "EV Charging point", basic: false, classic: false, premium: false, royale: true },
                    { feature: "Inverter Provision", basic: true, classic: true, premium: true, royale: "Full Home UPS Integration" }
                ]
            }
        ],
        luxury: [
            {
                title: "STRUCTURE & ARCHITECTURE",
                note: "Engineered for earthquake resistance and premium volumes",
                rows: [
                    { feature: "Steel (Primary)", freesia: "Tata Tiscon / JSW Neosteel", dahlia: "Tata Tiscon / JSW Neosteel", magnolia: "Tata Tiscon / JSW (Fe 550D Super Ductile)" },
                    { feature: "Wall Construction", freesia: "Premium AAC Blocks", dahlia: "Porotherm Smart Bricks", magnolia: "Porotherm Smart Bricks / Wienerberger" },
                    { feature: "Ceiling Height", freesia: "11 ft", dahlia: "11.5 ft", magnolia: "12 ft+ (Grand Volumes & Double Heights)" },
                    { feature: "Termite Treatment", freesia: "Standard Piping", dahlia: "Advanced Reticulated System", magnolia: "Comprehensive Reticulated + Warranty" }
                ]
            },
            {
                title: "FLOORING & SURFACES",
                rows: [
                    { feature: "Living & Dining", freesia: `Italian Marble upto ₹${Math.floor(380 * priceMultiplier)}/sqft`, dahlia: `Imported Marble upto ₹${Math.floor(450 * priceMultiplier)}/sqft`, magnolia: `Onyx / High-End Marble upto ₹${Math.floor(650 * priceMultiplier)}/sqft` },
                    { feature: "Master Bedroom", freesia: "Premium Wooden Laminate", dahlia: "Engineered Hardwood", magnolia: "Imported Solid Hardwood Flooring" },
                    { feature: "Staircase", freesia: "Italian Marble", dahlia: "Italian Marble + Cove Lighting", magnolia: "Cantilevered stairs / Glass steps" },
                    { feature: "Balconies / Decks", freesia: "Premium Wood-finish Tiles", dahlia: "WPC Decking", magnolia: "Natural Teak / Thermo-pine Decking" }
                ]
            },
            {
                title: "KITCHEN & WARDROBES",
                rows: [
                    { feature: "Countertop Surface", freesia: "Premium Quartz", dahlia: "Dekton / Neolith Surfaces", magnolia: "Custom Imported Sintered Stone" },
                    { feature: "Modular Kitchen Budget", freesia: `Upto ₹${Math.floor(8 * priceMultiplier)} Lakhs`, dahlia: `Upto ₹${Math.floor(12 * priceMultiplier)} Lakhs`, magnolia: `Upto ₹${Math.floor(20 * priceMultiplier)} Lakhs (Hettich / Blum)` },
                    { feature: "Appliance Integration", freesia: "Basic Provisioning", dahlia: "Built-in Oven/Microwave Space", magnolia: "Fully Integrated Smart Appliances" }
                ]
            },
            {
                title: "BATHROOM & WELLNESS",
                rows: [
                    { feature: "Fixtures & Fittings", freesia: "Kohler / Grohe", dahlia: "Hansgrohe / Toto", magnolia: "Gessi / Dornbracht / Villeroy & Boch" },
                    { feature: "CP Budget (Per Bath)", freesia: `Upto ₹${Math.floor(1.5 * priceMultiplier)} Lakhs`, dahlia: `Upto ₹${Math.floor(2.5 * priceMultiplier)} Lakhs`, magnolia: `Upto ₹${Math.floor(4.5 * priceMultiplier)} Lakhs` },
                    { feature: "Shower System", freesia: "Rain Shower Enclosure", dahlia: "Thermostatic Shower Panels", magnolia: "Multi-jet Spa / Steam Enclosure" },
                    { feature: "Wellness", freesia: false, dahlia: "Master Bath Jacuzzi Provision", magnolia: "Custom Jacuzzi & Sauna Room" }
                ]
            },
            {
                title: "SMART HOME & HVAC",
                rows: [
                    { feature: "Home Automation Budget", freesia: `Upto ₹${Math.floor(5 * priceMultiplier)} Lakhs`, dahlia: `Upto ₹${Math.floor(7 * priceMultiplier)} Lakhs`, magnolia: `Upto ₹${Math.floor(12 * priceMultiplier)} Lakhs (Control4 / Savant)` },
                    { feature: "Switches & Controls", freesia: "Schneider Smart Range", dahlia: "Smart Touch Panels", magnolia: "Imported Glass Touch Panels" },
                    { feature: "Climate Control", freesia: "Split AC Provisions", dahlia: "Concealed Ducting Provision", magnolia: "Central VRV/VRF System (Daikin/Ogeneral)" },
                    { feature: "EV Charging Station", freesia: true, dahlia: true, magnolia: "Dual High-Speed EV Stations" }
                ]
            },
            {
                title: "DOORS & FENESTRATIONS",
                rows: [
                    { feature: "Main Door", freesia: "8ft Teak Wood (₹1.5L)", dahlia: "8ft Custom Carved Teak (₹2.5L)", magnolia: "9ft Pivot Door / Armored Door (₹4L+)" },
                    { feature: "Windows & Sliders", freesia: "Heavy Duty UPVC", dahlia: "Schuco / Fenesta Aluminium", magnolia: "Thermal Break Slimline Aluminium" },
                    { feature: "Glass Specification", freesia: "Toughened Glass", dahlia: "Double Glazed Unit (DGU)", magnolia: "Soundproof Low-E DGU Glass" }
                ]
            },
            {
                title: "EXCLUSIVE LUXURY AMENITIES",
                rows: [
                    { feature: "Elevator", freesia: "Elevator pit provision", dahlia: "Mitsubishi / Schindler (Standard)", magnolia: "Premium Glass Cabin / Vacuum Elevator" },
                    { feature: "Recreation & Landscape", freesia: "Basic Planters", dahlia: "Landscaped Terrace & Pergola", magnolia: "Private Lap Pool + Designer Landscape" },
                    { feature: "Security System", freesia: "Video Door Phone + 4 Cameras", dahlia: "Complete Perimeter Security", magnolia: "Biometric Access + AI Surveillance" }
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