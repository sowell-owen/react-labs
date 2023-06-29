import React, { FC, SetStateAction, useMemo, useState } from 'react';
import { useParams } from "react-router-dom";
import { productsMock } from "../../mock/products-mock";
import { ProductPageContainer } from "./styles";
import {
    Button,
    Card,
    CardContent,
    FormControl,
    InputLabel,
    MenuItem,
    Select, TextField,
    Typography
} from "@mui/material";
import { addToCart } from "../../store/cart/cartSlice";
import { useAppDispatch } from "../../store/hooks";
import { USD_IN_UAH } from "../../constants";

enum Currencies {
    USD = 'USD',
    UAH = 'UAH'
}

const Product: FC = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams();

    const [currentCurrency, setCurrentCurrency] = useState(Currencies.USD);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    const productData = useMemo(() => {
        if (!id) return;
        return productsMock.find(p => p.id === Number(id))
    }, [id]);

    const uahPrice = useMemo(() => productData ? productData?.price * USD_IN_UAH : 0, [productData])

    const handleAddToCartClick = () => productData && dispatch(addToCart(productData));
    const handleSubmitClick = () => {
        console.log('Name: ', name);
        console.log('Comment: ', comment);
        alert(`${name}, your comment was added.`);
        setComment('');
        setName('');
    }
    const handleTextareaChange =
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setState: React.Dispatch<SetStateAction<string>>) =>
            setState(e.target.value)

    return (
        <ProductPageContainer>
            <Card>
                <CardContent>
                    <Typography variant="h6" component="div" gutterBottom>
                        {productData?.name}
                    </Typography>
                    <img
                        style={{ maxHeight: '300px' }}
                        src={productData?.img}
                        alt={productData?.name}
                    />
                    {productData?.description && (
                        <Typography variant="body2" color="textSecondary" gutterBottom>
                            {productData?.description}
                        </Typography>
                    )}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h6" component="div">
                            {currentCurrency === Currencies.USD ? '$' + productData?.price : '₴' + uahPrice.toFixed(0)}
                        </Typography>
                        <FormControl>
                            <InputLabel>Currency</InputLabel>
                            <Select
                                value={currentCurrency}
                                label="Currency"
                                onChange={(e) => setCurrentCurrency(e.target.value as Currencies)}
                            >
                                <MenuItem value={Currencies.USD}>USD</MenuItem>
                                <MenuItem value={Currencies.UAH}>UAH</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <Button onClick={handleAddToCartClick} variant="contained" color="primary">
                        Add to cart
                    </Button>
                </CardContent>
            </Card>
            <FormControl style={{
                marginTop: '20px', display: 'flex', flexDirection:
                    'column', gap: '10px'
            }}>
                <TextField onChange={(e) => handleTextareaChange(e, setName)} value={name} label="Name"
                           variant="standard"/>
                <TextField onChange={(e) => handleTextareaChange(e, setComment)} value={comment} label="Comment"
                           variant="standard"/>
                <Button disabled={!comment || !name} onClick={handleSubmitClick} variant="contained" color="primary">
                    Submit
                </Button>
            </FormControl>

        </ProductPageContainer>
    );
};

export default Product;