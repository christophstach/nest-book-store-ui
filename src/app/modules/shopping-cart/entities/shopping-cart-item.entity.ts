export enum ShoppingCartItemType {
    Book = 'Book',
    Item = 'Item',
}

export class ShoppingCartItem {
    id: string;
    referenceId: string;
    type: ShoppingCartItemType;
    owner: string;
    title: string;
    referenceUrl: string;
    createdAt: Date;
    updatedAt: Date;
}


