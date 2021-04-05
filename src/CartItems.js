import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem.js'
function CartItems({cartItems}) {
    return (
        <Container>
            <Title>Shopping Cart</Title>
            <hr></hr>

            <ItemsContainer>
            {
                    cartItems.map((item)=> (
                        <CartItem 
                        id={item.id}
                        item={item.product}
                        />
                    ))
                }
            </ItemsContainer>
        </Container>
    )
}

export default CartItems

const Container = styled.div`
margin-bottom: 10px;
flex: 0.8;
margin-right: 17px;
padding: 20px;
-webkit-border-radius: 50px; 
border-radius: 20px; 
background: white;
-webkit-box-shadow: 12px 12px 24px #c7c9c9,
-12px -12px 24px #ffffff;
box-shadow: 12px 12px 24px #c7c9c9,
-12px -0px 24px #ffffff;
`

const Title = styled.h3``;

const ItemsContainer = styled.div``;