import React, { useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Product } from "../../types/product";
import { useAppDispatch, useProductsInCartQuantity } from "../../store/hooks";
import { addToCart } from "../../store/cart/cartSlice";
import { useNavigate } from 'react-router-dom'

const ProductCard: React.FC<Product> = (props) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const inCartQuantity = useProductsInCartQuantity();

    const handleAddToCartClick = () => dispatch(addToCart(props));

    function sleep(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    useEffect(() => {
        console.log('Products in cart: ', inCartQuantity);
        sleep(3000)
            .then(() => {
                handleAddToCartClick();
                console.log('Products in cart (after adding): ', inCartQuantity);
            })
    }, []);


    const { name, description, img, price, id } = props;
    return (
        <Card>
            <CardMedia
                onClick={() => navigate(`product/${id}`)}
                component="img"
                height="200"
                image={img}
                alt={name}
            />
            <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                    {name}
                </Typography>
                {description && (
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                        {description}
                    </Typography>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" component="div">
                        ${price}
                    </Typography>
                    <Button onClick={handleAddToCartClick} variant="contained" color="primary">
                        Add to cart
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
