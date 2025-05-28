# D3.js Roadmap Chart

Este projeto apresenta uma visualização de gráfico roadmap implementado com D3.js.

## Sobre o Projeto

O gráfico roadmap é uma visualização hierárquica que mostra relações entre categorias e subcategorias em uma estrutura de dados aninhada. É semelhante a um gráfico de pizza, mas com múltiplos níveis que permitem visualizar hierarquias de dados.

## Funcionalidades

- Visualização interativa de dados hierárquicos
- Tooltips ao passar o mouse sobre os segmentos
- Cores distintas para diferentes categorias
- Rótulos para segmentos suficientemente grandes

## Como Usar

1. Clone este repositório
2. Abra o arquivo `index.html` em um navegador web moderno
3. Interaja com os gráficos passando o mouse sobre os diferentes segmentos

## Estrutura do Projeto

O projeto foi organizado de forma modular para facilitar a manutenção e reutilização:

- `index.html`: Contém a estrutura HTML básica e referências aos arquivos externos
- `styles.css`: Contém todos os estilos CSS para os gráficos
- `data.js`: Contém os conjuntos de dados para os gráficos
- `roadmap.js`: Contém a função para criar gráficos roadmap

## Como Adicionar Novos Gráficos

Para adicionar um novo gráfico roadmap à página:

1. Adicione um novo conjunto de dados em `data.js` ou use um existente
2. Adicione um novo container no HTML: `<div id="meuNovoGrafico"></div>`
3. Chame a função `createRoadmapChart` com os parâmetros apropriados:
   ```javascript
   createRoadmapChart(meuConjuntoDeDados, "meuNovoGrafico");
   ```

## Estrutura de Dados

O gráfico usa uma estrutura de dados hierárquica no formato JSON:

```json
{
    "name": "Raiz",
    "children": [
        {
            "name": "Categoria A",
            "children": [
                { "name": "Subcategoria A1", "value": 20 },
                "..."
            ]
        },
        "..."
    ]
}
```

## Personalização

Para usar seus próprios dados, modifique ou adicione novos conjuntos de dados no arquivo `data.js`. Cada nó deve ter:

- Um nome (`name`)
- Um valor (`value`) para nós folha
- Ou uma matriz de filhos (`children`) para nós internos

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- [D3.js](https://d3js.org/) v7

## Licença

Este projeto está disponível como código aberto sob os termos da [Licença MIT](https://opensource.org/licenses/MIT).
