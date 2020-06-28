import React from 'react'
import {Link} from 'react-router-dom'

function ProductCard(props){
    return (
        <div>
            <div className="border mb-4 p-3 roudned overflow-hidden">
                <Link to={"/products/" + props.product.id}>
                    <h1 className="text-2xl font-bold mb-3">{props.product.name}</h1>
                    <div>
                        <img src={props.product.avatar} alt={props.product.name} />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ProductCard;