import { ShoppingCartItemType } from '../entities/shopping-cart-item.entity';

export class AddToShoppingCartDto {
    title: string;
    referenceId: string;
    referenceUrl: string;
    type: ShoppingCartItemType;
}
