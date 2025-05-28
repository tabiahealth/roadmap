// Função para criar um gráfico roadmap
function createRoadmapChart(data, containerId) {
    // Configurar dimensões
    const width = 1260;
    const height = 1260;
    const radius = Math.min(width, height) / 2;

    // Criar escala de cores
    const color = d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, data.children.length + 1));

    // Limpar o container se já existir conteúdo
    d3.select("#" + containerId).html("");

    // Criar o container SVG
    const svg = d3.select("#" + containerId)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);

    // Criar o layout de partição
    const partition = d3.partition()
        .size([Math.PI, radius]);

    // Converter dados para hierarquia
    const root = d3.hierarchy(data)
        .sum(d => d.value || 0)
        .sort((a, b) => b.value - a.value);

    // Calcular o layout de partição
    partition(root);

    // Criar gerador de arco
    const arc = d3.arc()
        .startAngle(d => d.x0 - Math.PI/2)  // Rotacionar para começar à esquerda
        .endAngle(d => d.x1 - Math.PI/2)    // Rotacionar para terminar à direita
        .innerRadius(d => d.y0)
        .outerRadius(d => d.y1);

    // Criar tooltip
    const tooltip = d3.select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    // Adicionar as fatias
    const slice = svg.selectAll("g")
        .data(root.descendants())
        .enter()
        .append("g")
        .attr("class", "slice");

    // Adicionar os caminhos
    slice.append("path")
        .attr("d", arc)
        .style("fill", d => {
            while (d.depth > 1) d = d.parent;
            return color(d.data.name);
        })
        .style("stroke", "white")
        .style("stroke-width", "1px")
        .style("opacity", 0.8)
        .on("mouseover", function(event, d) {
            d3.select(this).style("opacity", 1);

            tooltip.transition()
                .duration(200)
                .style("opacity", 0.9);

            tooltip.html(`<strong>${d.data.name}</strong><br>Valor: ${d.value}`)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", function() {
            d3.select(this).style("opacity", 0.8);

            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });

    // Add labels
    slice.append("text")
        .attr("transform", function(d) {
            // Ajustar o cálculo de rotação para o layout de meio círculo
            const x = (d.x0 + d.x1) / 2 - Math.PI/2;  // Ajustar para a rotação do arco
            const y = (d.y0 + d.y1) / 2;

            // Se for o elemento raiz (d.depth === 0), deixar o texto na horizontal
            if (d.depth === 0) {
                return `translate(${arc.centroid(d)}) rotate(0)`;
            }

            // Para os demais elementos, manter a orientação radial atual
            // Calcular o ângulo para orientação radial (perpendicular ao arco)
            // 90 graus adicional faz o texto seguir a direção radial (do centro para fora)
            let rotation = (x * 180 / Math.PI) + 90;

            // Garantir que o texto seja sempre legível de dentro para fora
            // Ajustar a rotação para que o texto nunca fique de cabeça para baixo
            // quando visto do centro para fora
            if (rotation > 90 && rotation < 270) {
                rotation += 180;  // Girar 180 graus para textos que ficariam de cabeça para baixo
            }

            return `translate(${arc.centroid(d)}) rotate(${rotation})`;
        })
        .attr("text-anchor", "middle")  // Centralizar o texto no segmento
        .attr("dy", "0.35em")
        .text(function(d) {
            // Mostrar texto apenas se a fatia for grande o suficiente
            return (d.x1 - d.x0) > 0.08 ? d.data.name : ""; // Reduced threshold to show more labels
        })
        .style("fill", "white")
        .style("font-size", "14px")
        .style("font-weight", "bold")
        .style("text-shadow", "0px 0px 3px rgba(0,0,0,0.7)") // Add text shadow for better contrast
        .style("pointer-events", "none");
}
