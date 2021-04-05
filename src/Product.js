import React from 'react'
import styled from'styled-components'
import {Link} from 'react-router-dom'
import {db} from './firebase'
 
function Product({title, price, rating, image, id}) {
    const addToCart = () => {
        console.log(id);
        const cartItem = db.collection("cartItems").doc(id);
        cartItem.get()
        .then((doc)=>{
            console.log(doc);
            if(doc.exists){
                cartItem.update({
                    quantity: doc.data().quantity + 1
                })
                console.log(cartItem.quantity)
            } else {
                db.collection("cartItems").doc(id).set({
                    name: title,
                    image: image,
                    price: price,
                    quantity: 1,
                })
            }
        })
    }


    return (
        <Container>
            <Image src={image}/>
                <Link>
                    <Title>
                    {title}
                    </Title>
                </Link>
            <Rating>
                {
                    Array(rating).fill().map(rating=><p>⭐</p> )
                }
            </Rating>
            <Price>
                ${price}
            </Price>
            <ActionSection>
                <AddToCartButton onClick={addToCart}>
                    Add to cart
                </AddToCartButton>
            </ActionSection>
        </Container>
    )
}

export default Product

const Container = styled.div`

-webkit-border-radius: 50px; 
border-radius: 20px; 
background: #ebeeee;
-webkit-box-shadow: 12px 12px 24px #c8caca,
px -12px 24px #ffffff;
box-shadow: 12px 12px 12px #c8caca,
-0px 0px 0px #ffffff;
z-index: 100;
max-width: 400px;
padding: 20px;
margin: 10px;
display:flex;
flex-direction: column;
`

const Title = styled.div`
margin-top: 10px;

`
const Price = styled.span`
    font-weight: 500;
    margin-top: 3px;
    color: #B12704;

`
const Rating = styled.div`
display:flex;
`
const Image = styled.img`
max-width: 200px;
object-fit: contain;
`
const AddToCartButton = styled.button`

  background-position: center;
  transition: background 0.8s;

:hover {
  background: #FDBA67 radial-gradient(circle, transparent 1%, #cda240 1%) center/15000%;
}
:active {
  background-color: #CDA240;
  background-size: 100%;
  transition: background 0s;
}


  border: none;
  border-radius: 2px;
  padding: 6px 9px;
  font-size: 15px;
  cursor: pointer;
  color: black;
  background-color: #CDA240;
  box-shadow: 0 0 4px #999;
  outline: none;
  


 

`

const ActionSection = styled.div`
display: grid;
place-items:center;
margin-top: 12px;

`