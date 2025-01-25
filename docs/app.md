# Podcast Menager

### Descrição
um app ao estilo netflix, aonde possa centralizar diferentes episodios podcastes separados por categorias

### Dominio
podcasts feitos em video

### Features
- Listar os episodios podcasts em sessões de categorias
    - [saúde, fitness, mentalidade, humor]
- filtrar episodios por nome de podcast

## Como

### Feature:
- Listar os episodios podcasts em sessões de categorias

### Como vou implementar:
vou reportar em uma api rest (json) o nome do podcast, nome do episodio, imagem de capa, link

    ```
    [
        {
            podcastName: "flow",
            episodio: "CBUM - flow#319",
            cover: "https://flow.com.br/wp-content/uploads/2021/09/flow-logo-300x300.png",
            link: "https://flow.com.br/podcast/flow-319-cbum/",
            category: ["saude", "bodybuilding"]
        },
        {
            podcastName: "flow",
            episodio: "barrichello - flow#339",
            cover: "https://flow.com.br/wp-content/uploads/2021/09/flow-logo-300x300.png",
            link: "https://flow.com.br/podcast/flow-339-barrichello/",
            category: ["esporte", "corrida"]
        }
    ]

    ```