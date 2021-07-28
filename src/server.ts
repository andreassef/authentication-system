import "reflect-metadata";
import express, { Request, Response } from "express";

import { router } from "./shared/infra/http/routes";
import createConnection from "./shared/infra/typeorm/connectiondb";
import "./shared/container";

createConnection();
const app = express();

app.get("/", (res: Request, resp: Response) =>
  resp.json({ message: "Hello World" })
);

app.use(express.json());
app.use(router);

app.listen(3333, () => {
  console.log("Server Up on Port 3333");
});
