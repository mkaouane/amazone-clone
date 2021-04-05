import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


function Header({cartItems, user, signOut}) {

    const getCount = () => {
        let count = 0;
        cartItems.forEach((item) => {
            count += item.product.quantity
           
        })
        return count;
    }

    return (
        <div>
            <Container>
        <Link to="/">

            <HeaderLogo>
                <img src={"https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"} alt=""/>
            </HeaderLogo>
        </Link>
            <HeaderOptionAddress>
                    <HeaderOption>

                <OptionLineOne>Hello</OptionLineOne>
                <OptionLineTwo>Saisissez votre adresse</OptionLineTwo>
                    </HeaderOption>
            </HeaderOptionAddress>

                <HeaderSearch>
                    <HeaderSearchInput type="text" />
                    <HeaderSearchIconContainer >
                        {/* <SearchIcon/> */}
                    </HeaderSearchIconContainer>
                </HeaderSearch>
                <HeaderNavItems>
                    <HeaderOption>
                        <OptionLineOne>Hello 
                           
                            </OptionLineOne>
                        <OptionLineTwo style={{'cursor':'pointer'}} onClick={signOut}>Logout</OptionLineTwo>
                    </HeaderOption>
                    <HeaderOption>
                        <OptionLineOne>Returns</OptionLineOne>
                        <OptionLineTwo>& orders</OptionLineTwo>
                    </HeaderOption>

                        <HeaderOptionCart>
                    <Link to="/cart">
                        {/* <ShoppingCartIcon /> */}
                        <ShoppingCartNumber>{getCount()}</ShoppingCartNumber>
                    </Link>
                        </HeaderOptionCart>
                </HeaderNavItems>
            </Container>
        </div>
    )
}

export default Header

const Container = styled.div`

height: 60px;
background-color: #0F1111;
color: white;
display: flex;
align-items: center;
justify-content: space-between;

`

const HeaderLogo = styled.div`
    img {
        width: 100px;
        margin: 11px;
    }

`

const HeaderOptionAddress = styled.div`
padding-left: 9px;
display: flex;
align-items: center;


`

const OptionLineOne = styled.div``


const OptionLineTwo = styled.div`
font-weight: 600;
`

const HeaderSearch = styled.div`
    display:flex;
    flex-grow: 1;
    height: 40px;
    border-radius: 4px;;
    overflow: hidden;
    margin-left: 9px;
    :focus-within {
        box-shadow: 0 0 0 3px #F90;
    }


`


const HeaderSearchInput = styled.input`
flex-grow: 3;
border: 0;
:focus {
    outline: none;
}

`

const HeaderSearchIconContainer = styled.div`
    background-color: #FDBA67;
    width: 45px;
    color: #343333;
    display:flex;
    justify-content: center;
    align-items: center;

`

const HeaderNavItems = styled.div`
display:flex;
`

const HeaderOption = styled.div`
padding: 9px 9px 10px 10px;


`

const HeaderOptionCart = styled.div`

display: flex;

a {
    display:flex;
    align-items: center;
    padding-right: 9px;
    color:white;
    text-decoration: none;
}`

const ShoppingCartNumber = styled.div`

padding-left: 4px;
color: orange;
font-weight: 600`
