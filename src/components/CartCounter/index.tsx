import React from 'react';
import { CartCounterContainer, StyledCounter } from "./styles";
import CartIcon from '../../assets/cart-icon.png'
import { useProductsInCartQuantity } from "../../store/hooks";

const CartCounter = () => {
    const productsInCartQuantity = useProductsInCartQuantity();
    return (
        <CartCounterContainer>
            <img src={CartIcon} alt={''} width={20} height={20}/>
            <StyledCounter>{productsInCartQuantity}</StyledCounter>
        </CartCounterContainer>
    );
};

export default CartCounter;