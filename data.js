// Current status
const tabiaData = [
    {
        category: "Acquisition",
        clients: [
            { name: "Mayo Clinic", region: "USA", solutionType: "automated" },
            { name: "Cleveland Clinic", region: "USA", solutionType: "automated" },
            { name: "Johns Hopkins", region: "USA", solutionType: "semiAutomated" },
            { name: "Albert Einstein Israelite Hospital", region: "World", solutionType: "automated" },
            { name: "Sírio-Libanês Hospital", region: "World", solutionType: "semiAutomated" },
            { name: "German Clinic", region: "World", solutionType: "semiAutomated" }
        ]
    },
    {
        category: "Scheduling",
        clients: [
            { name: "Mount Sinai", region: "USA", solutionType: "automated" },
            { name: "NYU Langone", region: "USA", solutionType: "semiAutomated" },
            { name: "University Hospital of Zurich", region: "World", solutionType: "automated" },
            { name: "Charité Hospital", region: "World", solutionType: "semiAutomated" },
            { name: "Karolinska Hospital", region: "World", solutionType: "automated" }
        ]
    },
    {
        category: "No-show prevention",
        clients: [
            { name: "Stanford Health", region: "USA", solutionType: "automated" },
            { name: "UCSF Medical Center", region: "USA", solutionType: "semiAutomated" },
            { name: "UCLA Health", region: "USA", solutionType: "automated" },
            { name: "Pitié-Salpêtrière Hospital", region: "World", solutionType: "semiAutomated" },
            { name: "São Lucas Hospital", region: "World", solutionType: "automated" }
        ]
    },
    {
        category: "No-show recovery",
        clients: [
            { name: "Massachusetts General", region: "USA", solutionType: "automated" },
            { name: "Brigham and Women's", region: "USA", solutionType: "semiAutomated" },
            { name: "University Hospital of Geneva", region: "World", solutionType: "automated" },
            { name: "University Hospital of Oslo", region: "World", solutionType: "semiAutomated" },
            { name: "University Hospital of Copenhagen", region: "World", solutionType: "automated" }
        ]
    },
    {
        category: "Patient recovery",
        clients: [
            { name: "Duke University Hospital", region: "USA", solutionType: "automated" },
            { name: "Vanderbilt University Medical Center", region: "USA", solutionType: "semiAutomated" },
            { name: "Northwestern Memorial", region: "USA", solutionType: "automated" },
            { name: "La Paz University Hospital", region: "World", solutionType: "semiAutomated" },
            { name: "University Hospital of Heidelberg", region: "World", solutionType: "automated" }
        ]
    },
    {
        category: "Care pathway orchestration",
        clients: [
            { name: "Cedars-Sinai", region: "USA", solutionType: "automated" },
            { name: "Houston Methodist", region: "USA", solutionType: "semiAutomated" },
            { name: "University Hospital of Vienna", region: "World", solutionType: "automated" },
            { name: "University Hospital of Stockholm", region: "World", solutionType: "semiAutomated" },
            { name: "University Hospital of Amsterdam", region: "World", solutionType: "automated" }
        ]
    },
    {
        category: "RPM",
        clients: [
            { name: "NewYork-Presbyterian", region: "USA", solutionType: "automated" },
            { name: "Rush University Medical Center", region: "USA", solutionType: "semiAutomated" },
            { name: "Barnes-Jewish Hospital", region: "USA", solutionType: "automated" },
            { name: "University Hospital of Barcelona", region: "World", solutionType: "semiAutomated" },
            { name: "University Hospital of Milan", region: "World", solutionType: "automated" }
        ]
    },
    {
        category: "Platform / Enablers",
        clients: [
            { name: "University of Michigan Hospital", region: "USA", solutionType: "automated" },
            { name: "UPMC", region: "USA", solutionType: "semiAutomated" },
            { name: "University Hospital of Toronto", region: "World", solutionType: "automated" },
            { name: "University Hospital of Sydney", region: "World", solutionType: "semiAutomated" },
            { name: "University Hospital of Singapore", region: "World", solutionType: "automated" }
        ]
    }
];

// Utility function to transform the centralized data structure for client distribution chart
function getClientData() {
    return tabiaData.map(category => {
        const usClients = category.clients
            .filter(client => client.region === "USA")
            .map(client => client.name);

        const worldClients = category.clients
            .filter(client => client.region === "World")
            .map(client => client.name);

        return {
            category: category.category,
            usClients: usClients,
            worldClients: worldClients
        };
    });
}

// Roadmap
const tabiaRoadmapData = {
    name: "Tabia",
    children: [
        {
            name: "Acquisition",
            children: [
                { name: "Subcategory A1", value: 20 },
                { name: "Subcategory A2", value: 30 },
                {
                    name: "Subcategory A3",
                    children: [
                        { name: "Item A3-1", value: 10 },
                        { name: "Item A3-2", value: 15 }
                    ]
                }
            ]
        },
        {
            name: "Scheduling",
            children: [
                { name: "Scheduling AI Agent", value: 25 },
                { name: "Integrations with EHRs", value: 15 }
            ]
        },
        {
            name: "No-show prevention",
            children: [
                { name: "Productize confirmation", value: 40 },
                { name: "Subcategory C2", value: 20 }
            ]
        },
        {
            name: "No-show recovery",
            children: [
                { name: "Subcategory C1", value: 40 },
                { name: "Subcategory C2", value: 20 }
            ]
        },
        {
            name: "Patient recovery",
            children: [
                { name: "Subcategory C1", value: 40 },
                { name: "Subcategory C2", value: 20 }
            ]
        },
        {
            name: "Care pathway orchestration",
            children: [
                { name: "Better represent procedures", value: 40 },
                { name: "More pathway capabilities", value: 20 }
            ]
        },
        {
            name: "RPM",
            children: [
                { name: "Subcategory C1", value: 40 },
                { name: "Subcategory C2", value: 20 }
            ]
        },
        {
            name: "Platform / Enablers",
            children: [
                { name: "EHR data sync", value: 20 },
                { name: "Integrations", value: 20 },
                { name: "Optimizations", value: 20 }
            ]
        }
    ]
};

// Utility function to transform the centralized data structure for solutions chart
function getSolutionsData() {
    return tabiaData.map(category => {
        const automated = category.clients
            .filter(client => client.solutionType === "automated")
            .map(client => client.name);

        const semiAutomated = category.clients
            .filter(client => client.solutionType === "semiAutomated")
            .map(client => client.name);

        return {
            category: category.category,
            automated: automated,
            semiAutomated: semiAutomated
        };
    });
}

// Data for the product timeline
const tabiaTimelineData = [
    {
        date: new Date(2024, 0, 15), // January 15, 2024
        milestone: "Product Conception",
        description: "Initial concept and planning phase for the new product"
    },
    {
        date: new Date(2024, 2, 10), // March 10, 2024
        milestone: "Prototype Development",
        description: "First working prototype completed"
    },
    {
        date: new Date(2024, 5, 22), // June 22, 2024
        milestone: "Alpha Release",
        description: "Alpha version released for internal testing"
    },
    {
        date: new Date(2024, 8, 5), // September 5, 2024
        milestone: "Beta Launch",
        description: "Beta version launched for selected customers"
    },
    {
        date: new Date(2024, 11, 12), // December 12, 2024
        milestone: "Official Release",
        description: "Version 1.0 officially released to the market"
    },
    {
        date: new Date(2025, 4, 1), // May 1, 2025
        milestone: "Feature Update",
        description: "Major feature update released (version 1.5)"
    },
    // Future milestones
    {
        date: new Date(2025, 7, 15), // August 15, 2025
        milestone: "Global Expansion",
        description: "Launch in international markets",
        future: true
    },
    {
        date: new Date(2025, 11, 10), // December 10, 2025
        milestone: "Version 2.0",
        description: "Major version update with new features",
        future: true
    },
    {
        date: new Date(2026, 2, 20), // March 20, 2026
        milestone: "Mobile App Launch",
        description: "Release of companion mobile application",
        future: true
    }
];

// Data for the radial column charts
const tabiaClientData = getClientData();
const tabiaSolutionsData = getSolutionsData();
