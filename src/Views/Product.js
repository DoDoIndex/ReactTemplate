import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Product() {
    const {id } = useParams()
    let content = null

    const url = 'https://5ef7c0cdb3a11b0016d2ec6f.mockapi.io/api/v1/Products/'+id
    let product = useAxiosGet(url)

    if(product.loading){
        content = <Loader />
    }
    if(product.data && !product.error){
        content =             
        <div>
            <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
            <div>
                <img src={product.data.avatar} alt={product.data.name} />
            </div>
            <div className="font-bold text-xl mb-3">
                {product.data.createdAt}
            </div>
        </div>
    }
    if(product.error){
        content =  
        <p>{product.data}</p>
    }

    return (
        <div className="p-3">{content}</div>
    )
}

export default Product;
