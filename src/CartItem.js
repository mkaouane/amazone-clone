import React from 'react'
import styled from 'styled-components'
import {db} from './firebase'
function CartItem({id,item}) {


    let options = []

    for (let i =1; i<Math.max(item.quantity+1, 20); i++) {
        options.push(<option value={i}> Qty: {i}</option>)
    }

    const changeQuantity = (newQuantity) => {
        db.collection('cartItems').doc(id).update({
            quantity: parseInt(newQuantity)
        })
    }

    const deleteItem = (e) => {
        e.preventDefault();
        db.collection('cartItems').doc(id).delete();
    }

    return (
        <Container>
            <ImageContainer>
                <img src={item.image} />
            </ImageContainer>
            <CartItemInfo>
                <CartItemInfoTop>
                    <h2>{item.name}</h2>
                </CartItemInfoTop>
                <CartItemInfoBottom>
                     <CartItemQuantityContainer>
                        <select name="quantity" id="quantity" value={item.quantity} onChange={(e) => changeQuantity(e.target.value)}>
                            {options}

                        </select>
                        </CartItemQuantityContainer>
                    <CartItemDeleteContainer onClick={deleteItem}>Delete</CartItemDeleteContainer>
                    
                </CartItemInfoBottom>
            </CartItemInfo>
            <CartItemPrice>${item.price}</CartItemPrice>
        </Container>
    )
}

export default CartItem


const Container = styled.div`
    padding-top: 12px;
    padding-bottom: 12px;
    display:flex;
    border-bottom: 1px solid #DDD;
    
`

const ImageContainer = styled.div`
    width: 180px;
    height: 180px;
    img{
        object-fit: contain;
        height: 100%;
        width: 100%;
    }
    flex-shrink: 0;
    flex-grow: 0;
`

const CartItemInfo = styled.div`
margin-left: 20px;
`

const CartItemInfoTop = styled.div`
color:#3A8695;
h2 {
    font-size: 18px;
}
cursor: pointer;

`

const CartItemInfoBottom = styled.div`
    display: flex;
`

const CartItemQuantityContainer = styled.div`
    select {
        border-radius: 7px;
        background-color:#F0F2F2;
        padding: 5px;
        box-shadow: 0 2px 6px rgba(15,17,17,.15)
    }
    select:focus {
        outline: none;
    }
`

const CartItemDeleteContainer = styled.div`
    color: #3A8695;
    margin-left: 16px;
    cursor: pointer;
`

const CartItemPrice = styled.div`
    font-size: 18px;
    font-weight: 700;
`