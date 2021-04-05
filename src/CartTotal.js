import React from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format';


function CartTotal({getTotalPrice, getCount}) {

   

    return (
        <Container>
            <h2>Subtotal: ({getCount()} items)</h2>
            <p> <NumberFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={'$'} />
</p>
            <CheckoutButton>Proceed to checkout</CheckoutButton>
        </Container>
    )
}

export default CartTotal

const Container = styled.div`
    height: 200px;
    flex: 0.2;
    padding: 20px;
    -webkit-border-radius: 50px; 
    border-radius: 20px; 
    background: white;
    -webkit-box-shadow: 12px 12px 24px #c7c9c9,
    -12px -12px 24px #ffffff;
    box-shadow: 12px 12px 24px #c7c9c9,
    -12px -0px 24px #ffffff;
`

const CheckoutButton = styled.button`
    background-color: #f0c14b;
    width: 100%;
    // vertical - horizontal
    padding: 4px 8px;
    border: 2px solid #a88734;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    :hover {
        background:  #ddb347;
    }
    `