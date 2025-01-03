import { Server } from "socket.io"
import { SocketControllers } from "socket-controllers"
import { Container } from "typedi"
import { Server as HTTPServer } from "http"

export default (httpServer: HTTPServer) => {
    const io = new Server(httpServer, {
        cors: {
            origin: "*"
        }
    });

    new SocketControllers({ io, controllers: [__dirname + 'api/controllers/*.ts'], container: Container })

    return io;
};