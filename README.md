# D3.js Sunburst Chart

Este projeto apresenta uma visualização de gráfico sunburst (gráfico de explosão solar) implementado com D3.js.

## Sobre o Projeto

O gráfico sunburst é uma visualização hierárquica que mostra relações entre categorias e subcategorias em uma estrutura de dados aninhada. É semelhante a um gráfico de pizza, mas com múltiplos níveis que permitem visualizar hierarquias de dados.

## Funcionalidades

- Visualização interativa de dados hierárquicos
- Tooltips ao passar o mouse sobre os segmentos
- Cores distintas para diferentes categorias
- Rótulos para segmentos suficientemente grandes

## Como Usar

1. Clone este repositório
2. Abra o arquivo `index.html` em um navegador web moderno
3. Interaja com o gráfico passando o mouse sobre os diferentes segmentos

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

Para usar seus próprios dados, modifique a constante `data` no arquivo `index.html`. Cada nó deve ter:

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
