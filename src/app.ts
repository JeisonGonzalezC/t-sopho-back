import express from 'express';
import config from '../src/config/config';
import cors from 'cors';
// Routes
import MovieRoutes from './routes/MovieRoutes';

class Applicaction {
    app: express.Application;

    constructor() {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings() {
        this.app.set('port', config.PORT || 3001);
        this.app.use(cors())
    }

    middlewares() {
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/movie', MovieRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('>>> Server is running at', this.app.get('port'));
        });
    }
}

export default Applicaction;