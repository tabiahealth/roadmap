// Dados de exemplo para o gráfico roadmap
const tabiaRoadmapData = {
    name: "Tabia",
    children: [
        {
            name: "Acquisition",
            children: [
                { name: "Subcategoria A1", value: 20 },
                { name: "Subcategoria A2", value: 30 },
                { 
                    name: "Subcategoria A3", 
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
                { name: "Subcategoria C1", value: 40 },
                { name: "Subcategoria C2", value: 20 }
            ]
        },
        {
            name: "No-show recovery",
            children: [
                { name: "Subcategoria C1", value: 40 },
                { name: "Subcategoria C2", value: 20 }
            ]
        },
        {
            name: "Patient recovery",
            children: [
                { name: "Subcategoria C1", value: 40 },
                { name: "Subcategoria C2", value: 20 }
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
                { name: "Subcategoria C1", value: 40 },
                { name: "Subcategoria C2", value: 20 }
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

// Dados para o gráfico de colunas radial
const tabiaClientData = [
    { 
        category: "Acquisition", 
        usClients: ["Mayo Clinic", "Cleveland Clinic", "Johns Hopkins"],
        worldClients: ["Hospital Israelita Albert Einstein", "Hospital Sírio-Libanês", "Clínica Alemana"]
    },
    { 
        category: "Scheduling", 
        usClients: ["Mount Sinai", "NYU Langone"],
        worldClients: ["Hospital Universitário de Zurique", "Hospital Charité", "Hospital Karolinska"]
    },
    { 
        category: "No-show prevention", 
        usClients: ["Stanford Health", "UCSF Medical Center", "UCLA Health"],
        worldClients: ["Hospital Pitié-Salpêtrière", "Hospital São Lucas"]
    },
    { 
        category: "No-show recovery", 
        usClients: ["Massachusetts General", "Brigham and Women's"],
        worldClients: ["Hospital Universitário de Genebra", "Hospital Universitário de Oslo", "Hospital Universitário de Copenhague"]
    },
    { 
        category: "Patient recovery", 
        usClients: ["Duke University Hospital", "Vanderbilt University Medical Center", "Northwestern Memorial"],
        worldClients: ["Hospital Universitário La Paz", "Hospital Universitário de Heidelberg"]
    },
    { 
        category: "Care pathway orchestration", 
        usClients: ["Cedars-Sinai", "Houston Methodist"],
        worldClients: ["Hospital Universitário de Viena", "Hospital Universitário de Estocolmo", "Hospital Universitário de Amsterdã"]
    },
    { 
        category: "RPM", 
        usClients: ["NewYork-Presbyterian", "Rush University Medical Center", "Barnes-Jewish Hospital"],
        worldClients: ["Hospital Universitário de Barcelona", "Hospital Universitário de Milão"]
    },
    { 
        category: "Platform / Enablers", 
        usClients: ["University of Michigan Hospital", "UPMC"],
        worldClients: ["Hospital Universitário de Toronto", "Hospital Universitário de Sydney", "Hospital Universitário de Singapura"]
    }
];
