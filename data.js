// Current status
const tabiaData = [
    {
        category: "Acquisition",
        clients: [
            { name: "DASA", region: "World", solutionType: "semiAutomated" },
            { name: "Hapvida", region: "World", solutionType: "semiAutomated" },
            { name: "Medstation", region: "USA", solutionType: "semiAutomated" },
            { name: "Vitalwork", region: "World", solutionType: "semiAutomated" },
            { name: "Hemocione", region: "World", solutionType: "semiAutomated" },
            { name: "Agir", region: "World", solutionType: "semiAutomated" },
        ]
    },
    {
        category: "Scheduling",
        clients: [
            { name: "VER Prime", region: "World", solutionType: "semiAutomated" },
            { name: "VER Anápolis", region: "World", solutionType: "semiAutomated" },
            { name: "HO Tocantins", region: "World", solutionType: "semiAutomated" },
            { name: "Moinhos de Vento", region: "World", solutionType: "semiAutomated" },
            { name: "Medstation", region: "USA", solutionType: "semiAutomated" },
            { name: "AHVI", region: "USA", solutionType: "semiAutomated" },
            { name: "Prontocardio", region: "World", solutionType: "semiAutomated" },
            { name: "Oftalmed", region: "World", solutionType: "semiAutomated" },
            { name: "HCO", region: "World", solutionType: "semiAutomated" },
            { name: "CDO", region: "World", solutionType: "semiAutomated" },
            { name: "IDV", region: "World", solutionType: "semiAutomated" },
            { name: "Prima Pelle", region: "World", solutionType: "semiAutomated" },
            { name: "Agir", region: "World", solutionType: "semiAutomated" },
        ]
    },
    {
        category: "No-show prevention",
        clients: [
            { name: "RVA", region: "World", solutionType: "automated" },
            { name: "VER Prime", region: "World", solutionType: "semiAutomated" },
            { name: "VER Anápolis", region: "World", solutionType: "semiAutomated" },
            { name: "HO Tocantins", region: "World", solutionType: "semiAutomated" },
            { name: "Moinhos de Vento", region: "World", solutionType: "semiAutomated" },
            { name: "Medstation", region: "USA", solutionType: "semiAutomated" },
            { name: "Prontocardio", region: "World", solutionType: "semiAutomated" },
            { name: "Oftalmed", region: "World", solutionType: "semiAutomated" },
            { name: "HCO", region: "World", solutionType: "semiAutomated" },
            { name: "CDO", region: "World", solutionType: "semiAutomated" },
            { name: "IDV", region: "World", solutionType: "semiAutomated" },
            { name: "Prima Pelle", region: "World", solutionType: "semiAutomated" },
            { name: "Agir", region: "World", solutionType: "semiAutomated" },
        ]
    },
    {
        category: "No-show recovery",
        clients: [
            { name: "RVA", region: "World", solutionType: "automated" },
        ]
    },
    {
        category: "Patient recovery",
        clients: [
            { name: "Moinhos de Vento", region: "World", solutionType: "semiAutomated" },
            { name: "Hapvida", region: "World", solutionType: "semiAutomated" },
            { name: "VER Prime", region: "World", solutionType: "semiAutomated" },
            { name: "VER Anápolis", region: "World", solutionType: "semiAutomated" },
            { name: "HO Tocantins", region: "World", solutionType: "semiAutomated" },
            { name: "Medstation", region: "USA", solutionType: "semiAutomated" },
            { name: "AHVI", region: "USA", solutionType: "semiAutomated" },
            { name: "Prontocardio", region: "World", solutionType: "semiAutomated" },
            { name: "Oftalmed", region: "World", solutionType: "semiAutomated" },
            { name: "HCO", region: "World", solutionType: "semiAutomated" },
            { name: "CDO", region: "World", solutionType: "semiAutomated" },
            { name: "IDV", region: "World", solutionType: "semiAutomated" },
            { name: "Prima Pelle", region: "World", solutionType: "semiAutomated" },
            { name: "Agir", region: "World", solutionType: "semiAutomated" },
            { name: "Hemocione", region: "World", solutionType: "semiAutomated" },
        ]
    },
    {
        category: "Care pathway orchestration",
        clients: [
            { name: "Moinhos de Vento", region: "World", solutionType: "semiAutomated" },
            { name: "Hapvida", region: "World", solutionType: "semiAutomated" },
            { name: "VER Prime", region: "World", solutionType: "semiAutomated" },
            { name: "VER Anápolis", region: "World", solutionType: "semiAutomated" },
            { name: "HO Tocantins", region: "World", solutionType: "semiAutomated" },
            { name: "Prontocardio", region: "World", solutionType: "semiAutomated" },
            { name: "Oftalmed", region: "World", solutionType: "semiAutomated" },
            { name: "HCO", region: "World", solutionType: "semiAutomated" },
            { name: "CDO", region: "World", solutionType: "semiAutomated" },
            { name: "IDV", region: "World", solutionType: "semiAutomated" },
            { name: "Prima Pelle", region: "World", solutionType: "semiAutomated" },
            { name: "Agir", region: "World", solutionType: "semiAutomated" },
            { name: "Hemocione", region: "World", solutionType: "semiAutomated" },
        ]
    },
    {
        category: "RPM",
        clients: [

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
        date: new Date(2023, 1, 1),
        milestone: "Care pathway orchestration (semi)",
        description: "deployed first in Brazil"
    },
    {
        date: new Date(2023, 7, 12),
        milestone: "Acquisition (semi)",
        description: "deployed first in Brazil"
    },
    {
        date: new Date(2023, 9, 31),
        milestone: "Scheduling and no-show prevention (semi)",
        description: "deployed first in Brazil"
    },
    {
        date: new Date(2024, 2, 12),
        milestone: "Patient recovery (semi)",
        description: "deployed first at RVA"
    },
    {
        date: new Date(2024, 11, 12),
        milestone: "No-show recovery (auto)",
        description: "deployed first at RVA"
    },
    {
        date: new Date(2025, 3, 28), // Apr 28, 2025
        milestone: "No-show prevention (auto)",
        description: "deployed first at RVA"
    },
    // Future milestones
    {
        date: new Date(2025, 6, 15), // July 15, 2025
        milestone: "Scheduling (auto)",
        description: "Launch in international markets",
        future: true
    },
    {
        date: new Date(2025, 11, 10), // December 10, 2025
        milestone: "Care pathway orchestration (auto) in BR",
        description: "Major version update with new features",
        future: true
    },
    {
        date: new Date(2026, 2, 15),
        milestone: "RPM and similar",
        description: "planned to US",
        future: true
    },
];

// Data for the deliverable functionalities table
const tabiaFunctionalitiesData = [
    {
        deliverable: "Acquisition",
        functionalities: [
            { name: "Messenger" },
            { name: "Subcategory A2" },
            { 
                name: "Subcategory A3",
                subItems: [
                    "Item A3-1",
                    "Item A3-2"
                ]
            }
        ]
    },
    {
        deliverable: "Scheduling",
        functionalities: [
            { name: "Messenger" },
            { name: "Integrations with EHRs" }
        ]
    },
    {
        deliverable: "No-show prevention",
        functionalities: [
            { name: "Productize confirmation" },
            { name: "Subcategory C2" }
        ]
    },
    {
        deliverable: "No-show recovery",
        functionalities: [
            { name: "Subcategory C1" },
            { name: "Subcategory C2" }
        ]
    },
    {
        deliverable: "Patient recovery",
        functionalities: [
            { name: "Subcategory C1" },
            { name: "Subcategory C2" }
        ]
    },
    {
        deliverable: "Care pathway orchestration",
        functionalities: [
            { name: "Better represent procedures" },
            { name: "More pathway capabilities" }
        ]
    },
    {
        deliverable: "RPM",
        functionalities: [
            { name: "Subcategory C1" },
            { name: "Subcategory C2" }
        ]
    },
    {
        deliverable: "Platform / Enablers",
        functionalities: [
            { name: "EHR data sync" },
            { name: "Integrations" },
            { name: "Optimizations" }
        ]
    }
];

// Data for the radial column charts
const tabiaClientData = getClientData();
const tabiaSolutionsData = getSolutionsData();
