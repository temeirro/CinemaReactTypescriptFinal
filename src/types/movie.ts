import { IGenre } from "./genre";

export interface IMovie {
    id : number,
    title : string,
    year : number,
    imageUrl : string,
    description : string,
    genres: IGenre[];
    loading?: boolean; 
}

