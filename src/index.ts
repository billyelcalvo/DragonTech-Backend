import { Server } from "./server/models/server.js";

const server = new Server();

server.applyRoutes();
server.listen();