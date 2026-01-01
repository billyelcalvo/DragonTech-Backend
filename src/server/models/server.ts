import express, { type Express } from "express";

export class Server {
    private app: Express;
    private port: Number;

    constructor() {
        this.app = express();
        this.port = 3000;
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`)
        });
    }
}