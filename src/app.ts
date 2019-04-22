import express, { Request, Response } from 'express';

import db from '../models';
import { UserModelStatic } from '../models/user';

const app: express.Application = express();

app.get('/', (req: Request, res: Response) => {
    (db.User as UserModelStatic).findAll()
        .then((data) => {
            res.status(200).json(data[0]);
        });
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
});
