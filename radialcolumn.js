// Função para criar um gráfico de colunas radial
function createRadialColumnChart(data, containerId, firstProp = "usClients", secondProp = "worldClients", firstLabel = "EUA", secondLabel = "Mundo") {
    // Configurar dimensões
    const width = 1260;
    const height = 1260;
    const innerRadius = 180;
    const outerRadius = Math.min(width, height) / 2 - 60;

    // Limpar o container se já existir conteúdo
    d3.select("#" + containerId).html("");

    // Criar o container SVG
    const svg = d3.select("#" + containerId)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);

    // Extrair categorias e criar escala x
    const categories = data.map(d => d.category);
    const x = d3.scaleBand()
        .domain(categories)
        .range([0, Math.PI])
        .padding(0.1);

    // Encontrar o valor máximo para a escala y (agora baseado no número de itens em cada array)
    const maxValue = d3.max(data, d => Math.max(d[firstProp].length, d[secondProp].length));
    const y = d3.scaleRadial()
        .domain([0, maxValue])
        .range([innerRadius, outerRadius]);

    // Criar escala de cores
    const color = d3.scaleOrdinal()
        .domain([firstProp, secondProp])
        .range(["#4e79a7", "#f28e2c"]);

    // Adicionar eixo x (categorias) - um label para cada coluna
    // Primeiro, criar um array com todas as colunas (primeira e segunda propriedade para cada categoria)
    const columnData = [];
    categories.forEach(category => {
        columnData.push({ category: category, type: firstProp, label: firstLabel });
        columnData.push({ category: category, type: secondProp, label: secondLabel });
    });

    // Adicionar labels para as colunas
    svg.append("g")
        .selectAll("g")
        .data(columnData)
        .enter()
        .append("g")
        .attr("text-anchor", "middle") // Centralizar o texto
        .attr("transform", function(d) {
            // Calcular o ângulo baseado na posição da coluna
            const offset = d.type === firstProp ? 0 : x.bandwidth() / 2;
            const barWidth = x.bandwidth() / 2 * 0.9;
            const angle = x(d.category) + offset + barWidth / 2 - Math.PI/2;
            // Posicionar exatamente no innerRadius para ficar na base das colunas
            return `rotate(${angle * 180 / Math.PI}) translate(${innerRadius},0)`;
        })
        .append("text")
        .text(d => d.label) // Mostrar o label (primeiro ou segundo)
        .attr("transform", function(d) {
            // Calcular o ângulo baseado na posição da coluna
            const offset = d.type === firstProp ? 0 : x.bandwidth() / 2;
            const barWidth = x.bandwidth() / 2 * 0.9;
            const angle = x(d.category) + offset + barWidth / 2 - Math.PI/2;
            // Ajustar a rotação para alinhar com a direção da coluna
            return angle > 0 && angle < Math.PI ? "rotate(0)" : "rotate(180)";
        })
        .style("font-size", "14px") // Aumentar o tamanho da fonte
        .style("font-weight", "bold")
        .style("fill", d => d.type === firstProp ? color(firstProp) : color(secondProp)) // Colorir o texto de acordo com a coluna
        .attr("alignment-baseline", "middle")
        .attr("dy", "0.35em"); // Ajuste fino para centralização vertical

    // Adicionar labels para as categorias no círculo externo
    svg.append("g")
        .selectAll("g")
        .data(categories)
        .enter()
        .append("g")
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
            // Posicionar no centro da categoria
            const angle = x(d) + x.bandwidth() / 2 - Math.PI/2;
            // Posicionar mais próximo do raio externo (reduzido de 20 para 5)
            return `rotate(${angle * 180 / Math.PI}) translate(0,${-outerRadius - 5})`;
        })
        .append("text")
        .text(d => d)
        .attr("transform", function(d) {
            const angle = x(d) + x.bandwidth() / 2 - Math.PI/2;
            // Rotacionar o texto para que fique legível
            let rotation = 0;
            if (angle > 0 && angle < Math.PI) {
                rotation = 90 - angle * 180 / Math.PI;
            } else {
                rotation = 270 - angle * 180 / Math.PI;
            }
            return `rotate(${rotation})`;
        })
        .style("font-size", "16px")
        .style("font-weight", "bold")
        .style("fill", "#333");

    // Adicionar eixo y (valores)
    const yAxis = svg.append("g");

    // Adicionar linhas de grade circulares
    const yTicks = y.ticks(5);
    yAxis.selectAll(".grid-circle")
        .data(yTicks)
        .enter()
        .append("circle")
        .attr("class", "grid-circle")
        .attr("r", d => y(d))
        .attr("fill", "none")
        .attr("stroke", "#e0e0e0")
        .attr("stroke-dasharray", "4,4");

    // Adicionar rótulos para os valores do eixo y
    yAxis.selectAll(".y-label")
        .data(yTicks)
        .enter()
        .append("text")
        .attr("class", "y-label")
        .attr("y", d => -y(d))
        .attr("dy", "0.35em")
        .attr("text-anchor", "middle")
        .text(d => d)
        .style("font-size", "10px");

    // Criar tooltip
    const tooltip = d3.select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    // Função para criar barras
    function createBars(data, key, offset, color, label) {
        const barWidth = x.bandwidth() / 2 * 0.9; // Largura da barra (metade do espaço disponível)

        svg.append("g")
            .selectAll("path")
            .data(data)
            .enter()
            .append("path")
            .attr("fill", color)
            .attr("d", d => {
                const startAngle = x(d.category) + offset;
                const endAngle = startAngle + barWidth;

                const arc = d3.arc()
                    .innerRadius(innerRadius)
                    .outerRadius(y(d[key].length)) // Usar o comprimento do array para determinar a altura da barra
                    .startAngle(startAngle - Math.PI/2)
                    .endAngle(endAngle - Math.PI/2);

                return arc();
            })
            .style("opacity", 0.8)
            .on("mouseover", function(event, d) {
                d3.select(this).style("opacity", 1);

                tooltip.transition()
                    .duration(200)
                    .style("opacity", 0.9);

                // Criar uma lista HTML com os nomes dos itens
                const itemList = d[key].map(item => `<li>${item}</li>`).join('');

                tooltip.html(`<strong>${d.category}</strong><br>${label}:<ul style="margin: 5px 0; padding-left: 20px;">${itemList}</ul>`)
                    .style("left", (event.pageX + 10) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", function() {
                d3.select(this).style("opacity", 0.8);

                tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            });
    }

    // Criar barras para a primeira propriedade
    createBars(data, firstProp, 0, color(firstProp), firstLabel);

    // Criar barras para a segunda propriedade
    createBars(data, secondProp, x.bandwidth() / 2, color(secondProp), secondLabel);

    // Adicionar legenda
    const legend = svg.append("g")
        .attr("transform", `translate(${-width/4}, ${-height/2 + 40})`);

    const legendData = [
        { key: firstProp, label: firstLabel },
        { key: secondProp, label: secondLabel }
    ];

    // Adicionar texto explicativo abaixo da legenda
    legend.append("text")
        .attr("x", 0)
        .attr("y", 60)
        .text("* A altura das barras representa o número de itens")
        .style("font-size", "12px")
        .style("font-style", "italic");

    legend.selectAll("rect")
        .data(legendData)
        .enter()
        .append("rect")
        .attr("x", 0)
        .attr("y", (d, i) => i * 25)
        .attr("width", 20)
        .attr("height", 20)
        .attr("fill", d => color(d.key));

    legend.selectAll("text")
        .data(legendData)
        .enter()
        .append("text")
        .attr("x", 30)
        .attr("y", (d, i) => i * 25 + 15)
        .text(d => d.label)
        .style("font-size", "14px");
}
