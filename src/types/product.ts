export interface Product {
    products: [];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum ProductActionTypes {
    CREATE_PRODUCT = 'CREATE_PRODUCT',
    FETCH_PRODUCT = 'FETCH_PRODUCT',
    FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS',
    FETCH_PRODUCT_ERROR = 'FETCH_PRODUCT_ERROR',
}

interface CreateProductAction {
    type: ProductActionTypes.CREATE_PRODUCT;
    payload: { name: string; category: number; };
}

interface FetchProductAction {
    type: ProductActionTypes.FETCH_PRODUCT;
}

interface FetchProductSuccessAction {
    type: ProductActionTypes.FETCH_PRODUCT_SUCCESS;
    payload: any[];
}

interface FetchProductErrorAction {
    type: ProductActionTypes.FETCH_PRODUCT_ERROR;
    payload: string;
}

export type ProductAction =
    CreateProductAction
    | FetchProductAction
    | FetchProductSuccessAction
    | FetchProductErrorAction;