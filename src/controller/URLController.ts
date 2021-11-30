import { config } from "config/Constants";
import { Request, response, Response } from "express";
import { URLModel } from "model/URL";
import shortId from 'shortid';

export default class URLController {
    public async shorten(req: Request, res: Response): Promise<void> {
        const { originURL } = req.body;
        const url = await URLModel.findOne({ originURL })
        if (url) {
            response.json(url);
            return
        }
        const hash = shortId.generate();
        const shortURl = `${config.API_URL}/${hash}`;
        const newUrl = await URLModel.create({ hash, shortURl, originURL });


        response.json({ originURL, hash, shortURl });
    }
    public async redirect(req: Request, res: Response): Promise<void> {

        const hash = req.params;
        const url = await URLModel.findOne({ hash });

        if (url) {
            response.redirect(url.originURL);
            return;
        }

        response.status(400).json({ error: 'URL not found' });



    }
}