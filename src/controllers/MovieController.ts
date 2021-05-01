import { Request, Response } from 'express';
import { MovieModel } from '../models/Movie';

class MovieController {
    public async index(_req: Request, res: Response) {
        let movies = await MovieModel.index();
        if(movies?.length === 0){
            movies = await MovieModel.store();
        }
        if(movies && movies.length > 0){
            res.status(200).json({
                movies
            });
        }else{
            res.status(404).json();
        }
    }

    public async getType(req: Request, res: Response) {
        const { type } = req.params;
        const movies = await MovieModel.show(type);
        if(movies && movies.length > 0){
            res.status(200).json({
                movies
            });
        }else{
            res.status(404).json();
        }
    }
}
export const movieController = new MovieController();