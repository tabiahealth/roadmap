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
    name: "Tabia 2025",
    children: [
        {
            name: "Acquisition",
            children: [
                { name: "AI Agents", value: 20 },
            ]
        },
        {
            name: "Scheduling",
            children: [
                { name: "AI Agents", value: 10,  planned: true },
                { name: "Interoperability", value: 15,  planned: true },
            ]
        },
        {
            name: "No-show prevention",
            children: [
                { name: "Milestone management", value: 7, planned: true },
                { name: "Experience management", value: 7 },
                { name: "SDOH", value: 7, planned: true },
                { name: "Smart scheduling", value: 7, planned: true },
                { name: "Smart waitlist", value: 7, planned: true },
                { name: "Appointment confirmation", value: 7 },
                { name: "RAF", value: 7, planned: true },
            ]
        },
        {
            name: "No-show recovery",
            children: [
                { name: "AI Agents", value: 20 },
            ]
        },
        {
            name: "Patient recovery",
            children: [
                { name: "Human phone calls", value: 7 },
                { name: "AI Voice", value: 7, planned: true },
                { name: "Email", value: 7, planned: true },
            ]
        },
        {
            name: "Care pathway orchestration",
            children: [
                { name: "Care gap closure", value: 6 },
                { name: "Care execution", value: 6, planned: true },
                { name: "Care coordination", value: 6, planned: true },
                { name: "Treatment adherence", value: 6 },
                { name: "Protocol compliance", value: 6, planned: true },
                { name: "Medication adherence", value: 6, planned: true },
                { name: "Patient education", value: 6 },
                { name: "Clinical management", value: 6, planned: true },
            ]
        },
        {
            name: "Platform / Enablers",
            children: [
                { name: "Improve interoperability", value: 10, planned: true },
                { name: "Accelerate delivery", value: 10, planned: true },
                { name: "Optimize performance", value: 10, planned: true },
            ]
        },
        // {
        //     name: "RPM",
        //     children: [
        //         { name: "Subcategory C1", value: 40 },
        //         { name: "Subcategory C2", value: 20 }
        //     ]
        // },

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

// Define reusable functionality blocks
const tabiaFunctionalities = {
    messenger: {
        id: "messenger",
        name: "Messenger"
    },
    flow: {
        id: "flow",
        name: "Flow engine"
    },
    survey: {
        id: "survey",
        name: "Survey"
    },
    aiAgents: {
        id: "aiAgents",
        name: "AI Agents"
    },
    staticDatasets: {
        id: "staticDatasets",
        name: "Static datasets"
    },
    pathway: {
        id: "pathway",
        name: "Pathway engine",
    },
    medicalCodes: {
        id: "medicalCodes",
        name: "Medical codes",
    },
    insurance: {
        id: "insurance",
        name: "Insurance plans",
    },
    tasks: {
        id: "tasks",
        name: "Task Management"
    },
    integrations: {
        id: "interop",
        name: "Interoperability",
        subItems: [
            "FHIR",
            "SQL",
            "HTTP"
        ]
    },
    tabiaScore: {
        id: "tabiaScore",
        name: "Tabia Score"
    }
};

// Data for the deliverable functionalities table
const tabiaFunctionalitiesData = [
    {
        deliverable: "Acquisition",
        functionalities: [
            { id: "messenger", checkmarkType: "gray" },
            { id: "flow", checkmarkType: "gray" },
            { id: "staticDatasets", checkmarkType: "gray" },
            { id: "tasks", checkmarkType: "gray" },
            { id: "survey", checkmarkType: "gray" },
        ]
    },
    {
        deliverable: "Scheduling",
        functionalities: [
            { id: "messenger", checkmarkType: "gray" },
            { id: "tasks", checkmarkType: "gray" },
            { id: "staticDatasets", checkmarkType: "gray" },
        ]
    },
    {
        deliverable: "No-show prevention",
        functionalities: [
            { id: "messenger", checkmarkType: "both" },
            { id: "tasks", checkmarkType: "gray" },
            { id: "flow", checkmarkType: "both" },
            { id: "aiAgents", checkmarkType: "blue" },
            { id: "staticDatasets", checkmarkType: "gray" },
            { id: "interop", checkmarkType: "blue" },
            { id: "tabiaScore", checkmarkType: "both" },
        ]
    },
    {
        deliverable: "No-show recovery",
        functionalities: [
            { id: "messenger", checkmarkType: "blue" },
            { id: "flow", checkmarkType: "blue" },
            { id: "survey", checkmarkType: "blue" },
            { id: "aiAgents", checkmarkType: "blue" },
            { id: "interop", checkmarkType: "blue" },
            { id: "tabiaScore", checkmarkType: "blue" },
        ]
    },
    {
        deliverable: "Patient recovery",
        functionalities: [
            { id: "messenger", checkmarkType: "gray" },
            { id: "tasks", checkmarkType: "gray" },
            { id: "survey", checkmarkType: "gray" },
        ]
    },
    {
        deliverable: "Care pathway orchestration",
        functionalities: [
            { id: "messenger", checkmarkType: "gray" },
            { id: "tasks", checkmarkType: "gray" },
            { id: "pathway", checkmarkType: "gray" },
            { id: "manual", checkmarkType: "gray" },
            { id: "medicalCodes", checkmarkType: "gray" },
            { id: "insurance", checkmarkType: "gray" }
        ]
    },
    {
        deliverable: "RPM",
        functionalities: []
    }
];

// Data for the radial column charts
const tabiaClientData = getClientData();
const tabiaSolutionsData = getSolutionsData();
