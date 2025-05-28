// Example data for the roadmap chart
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
                { name: "Subcategory C1", value: 40 },
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
                { name: "Integrations", value: 40 },
                { name: "Optimizations", value: 20 }
            ]
        }
    ]
};

// Data for the radial column chart
const tabiaClientData = [
    { 
        category: "Acquisition", 
        usClients: ["Mayo Clinic", "Cleveland Clinic", "Johns Hopkins"],
        worldClients: ["Albert Einstein Israelite Hospital", "Sírio-Libanês Hospital", "German Clinic"]
    },
    { 
        category: "Scheduling", 
        usClients: ["Mount Sinai", "NYU Langone"],
        worldClients: ["University Hospital of Zurich", "Charité Hospital", "Karolinska Hospital"]
    },
    { 
        category: "No-show prevention", 
        usClients: ["Stanford Health", "UCSF Medical Center", "UCLA Health"],
        worldClients: ["Pitié-Salpêtrière Hospital", "São Lucas Hospital"]
    },
    { 
        category: "No-show recovery", 
        usClients: ["Massachusetts General", "Brigham and Women's"],
        worldClients: ["University Hospital of Geneva", "University Hospital of Oslo", "University Hospital of Copenhagen"]
    },
    { 
        category: "Patient recovery", 
        usClients: ["Duke University Hospital", "Vanderbilt University Medical Center", "Northwestern Memorial"],
        worldClients: ["La Paz University Hospital", "University Hospital of Heidelberg"]
    },
    { 
        category: "Care pathway orchestration", 
        usClients: ["Cedars-Sinai", "Houston Methodist"],
        worldClients: ["University Hospital of Vienna", "University Hospital of Stockholm", "University Hospital of Amsterdam"]
    },
    { 
        category: "RPM", 
        usClients: ["NewYork-Presbyterian", "Rush University Medical Center", "Barnes-Jewish Hospital"],
        worldClients: ["University Hospital of Barcelona", "University Hospital of Milan"]
    },
    { 
        category: "Platform / Enablers", 
        usClients: ["University of Michigan Hospital", "UPMC"],
        worldClients: ["University Hospital of Toronto", "University Hospital of Sydney", "University Hospital of Singapore"]
    }
];

// Data for the automated and semi-automated solutions chart
const tabiaSolutionsData = [
    { 
        category: "Acquisition", 
        automated: ["Online Scheduling", "Triage Chatbot", "Patient Portal"],
        semiAutomated: ["Virtual Assistant", "Smart Forms"]
    },
    { 
        category: "Scheduling", 
        automated: ["Optimization Algorithm", "Reminder System"],
        semiAutomated: ["Scheduling Assistant", "Schedule Recommender", "Queue Manager"]
    },
    { 
        category: "No-show prevention", 
        automated: ["SMS Reminder System", "Automatic Confirmation"],
        semiAutomated: ["Predictive Analysis", "Engagement Manager"]
    },
    { 
        category: "No-show recovery", 
        automated: ["Automatic Slot Filling", "Availability Notification"],
        semiAutomated: ["Rescheduling Assistant", "Patient Prioritizer"]
    },
    { 
        category: "Patient recovery", 
        automated: ["Remote Monitoring", "Medication Reminders"],
        semiAutomated: ["Recovery Assistant", "Progress Analysis", "Personalized Care Plan"]
    },
    { 
        category: "Care pathway orchestration", 
        automated: ["Automated Workflow", "System Integration"],
        semiAutomated: ["Care Assistant", "Protocol Manager", "Team Coordinator"]
    },
    { 
        category: "RPM", 
        automated: ["Automatic Data Collection", "Anomaly Alerts", "Real-time Dashboard"],
        semiAutomated: ["Trend Analysis", "Intervention Recommender"]
    },
    { 
        category: "Platform / Enablers", 
        automated: ["Integration APIs", "Batch Data Processing", "Secure Authentication"],
        semiAutomated: ["Analysis Tools", "Flow Configurator", "Permissions Manager"]
    }
];
