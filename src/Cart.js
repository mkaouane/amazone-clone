import React from 'react'
import styled from 'styled-components'
import CartItems from './CartItems.js'
import CartTotal from './CartTotal.js'

function Cart({cartItems}) {
    const getTotalPrice = () => {
        let price = 0;
        cartItems.forEach(item => {
            price += (item.product.price * item.product.quantity);
        });
        return price;
    }

    const getCount = () => {
        let count = 0;
        cartItems.forEach((item) => {
            count += item.product.quantity
           
        })
        return count;
    }

    return (
        <Container>
            <CartItems cartItems={cartItems}/>
            <CartTotal getTotalPrice={getTotalPrice} getCount={getCount} />
        </Container>
    )
}

export default Cart


const Container = styled.div`
display:flex;
padding: 14px 18px 0 18px;
`