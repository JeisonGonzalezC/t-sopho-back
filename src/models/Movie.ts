import MovieSchema, { IMovie } from '../schemas/MovieSchema';

export class MovieModel{
    public static async index(): Promise<IMovie[] | undefined>{
        try {
            const movies = await MovieSchema.find();
            return movies;
        } catch (error) {
            console.error(error)
        }
    }
    
    public static async store(): Promise<IMovie[] | undefined>{
        try {
            const movies = [
                {title: 'MovieOne', type: 'pelicula'},
                {title: 'MovieTwo', type: 'pelicula'},
                {title: 'MovieThree', type: 'pelicula'},
                {title: 'MovieFour', type: 'pelicula'},
                {title: 'MovieFive', type: 'pelicula'},
                {title: 'SerieOne', type: 'serie'},
                {title: 'SerieTwo', type: 'serie'},
                {title: 'SerieThree', type: 'serie'},
                {title: 'SerieFour', type: 'serie'},
                {title: 'SerieFive', type: 'serie'}
            ]
            for(const movie of movies){
                const newMovie = new MovieSchema(movie);
                await newMovie.save();
            }
            
            const dataMovies = await MovieSchema.find();
            return dataMovies;
        } catch (error) {
            console.error(error)
        }
    }

    public static async show(type: string): Promise<IMovie[] | undefined>{
        try {
            if(!type){ return undefined; }
            const movies = await MovieSchema.find({ type });
            return movies;
        } catch (error) {
            console.error(error)
        }
    }
}