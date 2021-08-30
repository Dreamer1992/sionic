import Model, {attr, fk, ModelType} from "redux-orm";
import {OrmSession} from "redux-orm/Session";
import {ProductAction, ProductActionTypes} from "../../../types/product";

// =====MODEL=====
export class Product extends Model {
    static modelName = "Product" as const;

    static get fields() {
        return {
            id: attr(),
            name: attr(),
            category: fk("Category", "products"),
        };
    }

    static reducer(action: ProductAction, Product: ModelType<Product>, session: OrmSession<any>) {
        switch (action.type) {
            case ProductActionTypes.CREATE_PRODUCT:
                Product.create(action.payload);
                break;
            default:
                break;
        }
    }
}