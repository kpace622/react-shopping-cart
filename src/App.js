import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

import ProuctContext from '../src/contexts/ProductContext';
import CartContext from '../src/contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart({...cart, cart: item})
		// add the given item to the cart
	};


	return (
		<ProuctContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value={cart}>
				<div className="App">
					<Navigation cart={cart} />

					{/* Routes */}
					{/* <Route
						exact
						path="/"
						render={() => (
							<Products
								products={products}
								addItem={addItem}
							/>
						)}
					/> */}

					<Route exact path='/' component={Products} />

					{/*
					 <Route></Route>
						path="/cart"
						render={() => <ShoppingCart cart={cart} />}
					/>
					*/}

					<Route path='/cart' component={cart} />

				</div>
			</CartContext.Provider>
		</ProuctContext.Provider>
	);
}

export default App;
