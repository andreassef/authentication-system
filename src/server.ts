import express, { Request, Response } from 'express';
const app = express();

app.get('/', (res: Request, resp: Response) => {
    return resp.json({message: 'Hello World'})
});

app.listen(3333, () => {
    console.log('Server Up on Port 3333')
})
