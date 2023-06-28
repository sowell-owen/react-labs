import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "./store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useProductsInCart = () => useAppSelector(state => state.cart.products);
export const useProductsInCartQuantity = () =>
    useAppSelector(state =>
        state.cart.products.reduce(
            (previousValue, currentValue) =>
                previousValue + currentValue.quantity, 0));

