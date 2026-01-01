import express, { type Express } from "express";
import { createProductController } from "../../dragontech/controllers/createProductController.js";

export class Server {
    private app: Express;
    private port: Number;

    constructor() {
        this.app = express();
        this.port = 3000;
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