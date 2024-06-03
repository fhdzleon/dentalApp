import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata"
import { AppDataSource } from "./config/data-source";
 
const port = PORT || 8080


AppDataSource.initialize()
    .then(res=> {
        console.log("Base de datos conectada");
        server.listen(port, ()=> {
        console.log(`Servidor escuchando en el puerto ${port} `);
    })
})
 
 
