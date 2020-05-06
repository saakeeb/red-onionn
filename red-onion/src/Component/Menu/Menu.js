import React, { useState } from 'react';
import foodFakeData from '../../Resources/foodFakeData';
import './Menu.css';
import FoodItem from '../FoodItem/FoodItem';
import Cart from '../Cart/Cart';
import NavBar from '../NavBar/NavBar';

const Menu = () => {
    const first6 = foodFakeData.slice(0, 6);

    const [products, setProducts] = useState(first6);
    const [cart, setCart] = useState([]);

    const handleAddProduct = product=>{
        console.log('food item added', product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='container-fluid'>
            <ul className='item'>
                <li><a href="/">Breakfast</a></li>
                <li><a href="/">Launch</a></li>
                <li><a href="/">Dinner</a></li>
                <h3>{cart.length}</h3>
            </ul>

            <div>
                <Cart cart={cart}>

                </Cart>
            </div>
            
            <div className='container'>
                <div>
                    {
                        products.map( item=> 
                        <FoodItem 
                            handleAddProduct={handleAddProduct}
                            product={item}
                        ></FoodItem>)
                    }
                </div>
            </div>
            div
            

        </div>
    );
};

export default Menu;