// Dados de exemplo para o gráfico sunburst
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

