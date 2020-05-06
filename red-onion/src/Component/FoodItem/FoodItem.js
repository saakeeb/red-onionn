import React from 'react';
import './FoodItem.css';

const FoodItem = (props) => {
    // console.log(props);
    const { img, title, subtitle, price} = props.product;

    return (

        <div className="container-fluid card">
            <div className='row ' onClick={()=>props.handleAddProduct(props.product)}>
                <div className="col-sm" >
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5>{title}</h5>
                        <p><small>{subtitle}</small></p>
                        <h5>${price}</h5>
                    </div>
                </div>
            </div>
        </div>
           
    );
};

export default FoodItem;