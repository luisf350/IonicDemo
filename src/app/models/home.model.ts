export namespace HomeModels {

    export interface IArticle {
        id: string;
        title: string;
        description: string;
        image: {
            url: string;
            desc: string;
        }
    }

    export interface IArticulo {
        id?: number;
        title: string;
        body: string;
        userId: number;
    }
}