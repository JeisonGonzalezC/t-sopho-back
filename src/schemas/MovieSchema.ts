import { Schema, model, Document } from 'mongoose';

const MovieSchema = new Schema({
    title: {
        type: String,
        required: true,
        lowercase: true
    },
    year: { 
        type: Number,
        default: Date.now,
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum : ['serie','pelicula'],
    }
});

export interface IMovie extends Document {
    _id: String,
    title: String,
    year: String,
    type: String
};

export default model<IMovie>('Movie', MovieSchema);