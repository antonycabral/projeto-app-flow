import * as http from "http";
import {getListEspisodes} from "./controllers/podcasts-controller";

const server = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) =>{

        if(req.method === 'GET'){
            await getListEspisodes(req, res);
        }
    }
);

const port = process.env.PORT;

server.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
});