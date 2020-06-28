import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Home() {
    let content = null

    const url = 'https://5ef7c0cdb3a11b0016d2ec6f.mockapi.io/api/v1/Products?page=1&limit=10'
    let products = useAxiosGet(url)
 
    if(products.loading){
        content = <Loader />
    }
    if(products.data && !products.error){
        content = 
        products.data.map((product, key) => 
            <div key={product.id}>
                <ProductCard product={product} />
            </div>
        )
    }
    if(products.error){
        content =  
        <p>{products.data}</p>
    }

    return (
        <div className="p-3">{content}</div>
    )
}

export default Home;
