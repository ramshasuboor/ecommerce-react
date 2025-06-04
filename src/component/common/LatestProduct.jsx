import React,{useState,useEffect} from 'react'
import ProductImg from'../../assets/images/ten.jpg'

const LatestProduct = () => {
    const [products,setProducts] =useState([])

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setProducts(json));
    },[])
    console.log(products)
    



    return (

        <section className="section-2 pt-5">
            <div className="container">
                <h1>New Arrivals</h1>
                <div className="row mt-4">
                    {products.slice(0,4).map((product,index)=>(
                        <div className="col-md-3 col-6" key={index}>
                        <div className="product card border-0">
                            <div className="card-img">
                                <img src={product.image} alt="" className='w-100' />
                            </div>
                            <div className="card-body pt-3">
                                <p>{product.id}</p>
                                <a href="">{product.title}</a>
                                <div className="price">
                                    ${product.price} <span className='text-decration-line-through'>$90</span>
                                </div>
                                <div>
                                    <span>Rating {product.rating.rate} ({product.rating.count})</span>
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

export default LatestProduct