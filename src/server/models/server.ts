import express, { type Express } from "express";
import { createProductController } from "../../dragontech/domain/controllers/createProductController.js";
import { envs } from "../../shared/models/env.js";

export class Server {
    private app: Express;
    private port: Number;

    constructor() {
        this.app = express();
        this.port = envs.PORT;
    }

    applyRoutes() {
        this.app.use('/products', createProductController);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`)
        });
    }
}