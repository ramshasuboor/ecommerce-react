import React, { useState, useEffect } from 'react'
import ProductImg from '../../assets/images/eight.jpg'


const FeaturedProduct = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => setItems(json));
    }, [])
    console.log(items)

    return (
        <section className="section-2">
            <div className="container">
                <h1>Featured Products</h1>
                <div className="row mt-3">
                    {items.slice(11,15).map((item, index) => (
                        <div className="col-md-3  col-6">
                            <div className="product card border-0">
                                <div className="card-img">
                                    <img src={item.image} alt="" className='w-100' />
                                </div>
                                <div className="card-body pt-3">
                                    <p>{item.id}</p>
                                    <a href=''>{item.title}</a>
                                    <div className="price">
                                        ${item.price} <span className='text-decration-line-through'>$90</span>
                                    </div>
                                    <div>
                                        <span>{item.rating.rate} ({item.rating.count})</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default FeaturedProduct