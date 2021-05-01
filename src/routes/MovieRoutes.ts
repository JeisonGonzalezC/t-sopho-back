import { Router } from 'express';
import { movieController } from '../controllers/MovieController';

class MovieRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/', movieController.index);
        this.router.get('/:type', movieController.getType);
    }
}
const movieRoutes = new MovieRoutes();
export default movieRoutes.router;