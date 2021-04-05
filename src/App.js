import { useState, useEffect } from 'react'
import './App.css';
import Header from './Header'
import Cart from './Cart'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import styled from 'styled-components'
import { auth, db } from './firebase'
import Login from './Login'

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
      }))

      setCartItems(tempItems);
    })
  }

  

  useEffect(() => {
    getCartItems();
  }, [])

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('user')
      setUser(null);
    })
  }

  return (
    <Router>
      
          <Container>
            <Header 
              cartItems={cartItems} user={user} signOut={signOut} />

            <Switch>

              <Route path="/cart">
                <Cart cartItems={cartItems} />
              </Route>

              <Route path="/">
                <Home />
              </Route>

              <Route path="/login">
                <Login  setUser={setUser} />
              </Route>

            </Switch>
          </Container>
        
      
    </Router>
  );
}

export default App;

const Container = styled.div`
  background-color: #EAEDED;
  height: 100vh;`