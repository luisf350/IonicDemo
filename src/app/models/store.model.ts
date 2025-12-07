export namespace StoreModels {

    export interface IItem {
        id?: string;
        name: string;
        price: number;
        description: string;
        image?: string;
    }

    export interface IPedido { }

    export interface ICarrito {
        total: number;
        items: {
            item: IItem;
            cant: number;
        }[];
    }
}