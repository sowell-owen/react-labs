import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Product } from "../../types/product";
import { useAppDispatch } from "../../store/hooks";
import { addToCart } from "../../store/cart/cartSlice";

const ProductCard: React.FC<Product> = (props) => {
    const dispatch = useAppDispatch();

    const handleAddToCartClick = () => dispatch(addToCart(props));


    const { name, description, img, price } = props;
    return (
        <Card>
            <CardMedia
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
