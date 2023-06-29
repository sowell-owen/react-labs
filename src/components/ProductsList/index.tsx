import React, { useState, useEffect, useMemo } from 'react';
import { FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import axios from 'axios';

import ProductCard from '../ProductCard';
import { Product } from "../../types/product";
import { productsMock } from "../../mock/products-mock";

enum Categories {
    ALL = 'ALL',
    UNDER_1000 = 'UNDER_1000'
}

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [currentCategory, setCurrentCategory] = useState<Categories>(Categories.ALL)

    useEffect(() => {
        // todo: add fetching from backend
        axios.get('/api/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching product data:', error);
            }).finally(() => setProducts(productsMock));
    }, []);

    const filteredProducts = useMemo<Product[]>(() => {
        if (currentCategory === Categories.UNDER_1000) return products.filter(p => p.price < 1000)
        return products;
    }, [products, currentCategory])

    const handleCategoryChange = (e: SelectChangeEvent<Categories>) => setCurrentCategory(e.target.value as Categories);

    return (
        <>
            <FormControl style={{ marginBottom: '20px' }}>
                <InputLabel>Category</InputLabel>
                <Select
                    value={currentCategory}
                    label="Category"
                    onChange={handleCategoryChange}
                >
                    <MenuItem value={Categories.ALL}>All</MenuItem>
                    <MenuItem value={Categories.UNDER_1000}>Under 1000$</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={2}>
                {filteredProducts.map(product => (
                    <Grid item xs={12} sm={6} md={4} key={product.name}>
                        <ProductCard {...product} />
                    </Grid>
                ))}
            </Grid>
            <Typography style={{ margin: '20px 0' }} variant="body2" color="textSecondary">
                Total products: {filteredProducts.length}
            </Typography>
        </>
    );
};

export default ProductList;
