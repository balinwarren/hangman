import { ConnectedSocket, OnConnect, SocketController, SocketIO } from "socket-controllers";
import { Service } from "typedi";
import { Server, Socket } from "socket.io";

@SocketController()
@Service()
class MainController {

    @OnConnect()
    public onConnection(
        @ConnectedSocket() socket: Socket,
        @SocketIO() io: Server
    ) {
        console.log("New Socket connected: ", socket.id)
    }
}