import { HomeModels } from "./home.model";
import { StoreModels } from "./store.model";
import { NotificacionsModels } from "./notificacions.model";

export namespace Models {
    export import Home = HomeModels;
    export import Store = StoreModels;
    export import Notificacions = NotificacionsModels;
}