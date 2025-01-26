import {IncomingMessage, request, ServerResponse} from 'http'

export const getListEspisodes = async (req: IncomingMessage, res: ServerResponse) =>{
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(
        JSON.stringify([
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
        ])
    )
}