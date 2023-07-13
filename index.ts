import express, { Express, Request, Response } from 'express';
import { ExampleQueryDocument, ExampleQueryQuery, execute } from './.graphclient/index'
import dotenv from "dotenv"
dotenv.config({ path: './.env' });
const app: Express = express();
app.get('/', (req: Request, res: Response) => {
    execute(ExampleQueryDocument, {}).then((result)=>{
        res.json(result)
    })
  });

app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});