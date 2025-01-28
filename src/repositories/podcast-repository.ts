import { promises } from 'dns';
import fs from 'fs';
import path from 'path';
import { podcast } from '../models/interface-podcast';



const pathData = path.join(__dirname, "../repositories/podcasts.json")

export const repoPodcast = async (): Promise<podcast[]> => {
    const data = await fs.readFileSync(pathData, {encoding: 'utf-8'});
    const jsonFile = JSON.parse(data);
    return jsonFile;
}