import React, { useState } from 'react'
import Layout from './common/Layout'
import { Link } from 'react-router-dom'
import ProductImg from '../assets/images/six.jpg'


const Checkout = () => {
    const [paymenMethode, setPaymentMethode] = useState("cod")
    const handlePaymentMethode =(e) =>{
        setPaymentMethode(e.target.value)
    }
    return (
        <Layout>
            <div className="container pb-5">
                <div className="row">
                    <div className="col-md-12">
                        <nav aria-label="breadcrumb" className='py-4'>
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">Checkout</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <h3 className='border-bottom  pb-3'><strong>Billing Details</strong></h3>
                        <form action="">
                            <div className="row pt-3">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input type="text" className='form-control' placeholder='Name' />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input type="text" className='form-control' placeholder='Email' />
                                    </div>
                                </div>
                                <div className='mb-3'>
                                    <textarea className='form-control' rows={3} placeholder='Address'></textarea>
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input type="text" className='form-control' placeholder='City' />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input type="text" className='form-control' placeholder='State' />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input type="text" className='form-control' placeholder='Zip' />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input type="text" className='form-control' placeholder='Mobile' />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-5">
                        <h3 className='border-bottom  pb-3'><strong>Items</strong></h3>
                        <table>
                            <tbody>
                                <tr className='border-bottom'>
                                    <td width={100}>
                                        <img src={ProductImg} width={80} alt="" />
                                    </td>
                                    <td width={600}>
                                        <h4>Dummy Product Title</h4>
                                        <div className="d-flex align-items-center pt-3">
                                            <span>$10</span>
                                            <div className='ps-3'>
                                                <button className="btn btn-size">S</button>
                                            </div>
                                            <div className="ps-5">
                                                X 1
                                            </div>
                                        </div>
                                    </td>


                                </tr>
                                <tr className='border-bottom'>
                                    <td width={100}>
                                        <img src={ProductImg} width={80} alt="" />
                                    </td>
                                    <td width={600}>
                                        <h4>Dummy Product Title</h4>
                                        <div className="d-flex align-items-center pt-3">
                                            <span>$10</span>
                                            <div className='ps-3'>
                                                <button className="btn btn-size">S</button>
                                            </div>
                                            <div className="ps-5">
                                                X 1
                                            </div>

                                        </div>
                                    </td>

                                </tr>
                            </tbody>
                        </table>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="d-flex justify-content-between py-2 border-bottom">
                                    <div>Subtotal</div>
                                    <div>$20</div>
                                </div>
                                <div className="d-flex justify-content-between py-2 border-bottom">
                                    <div>Shipping</div>
                                    <div>$5</div>
                                </div>
                                <div className="d-flex justify-content-between py-2 border-bottom">
                                    <div><strong>Grand Total</strong></div>
                                    <div>$25</div>
                                </div>


                            </div>
                        </div>

                        <h3 className='border-bottom  pt-4'><strong>Payment Methode</strong></h3>
                        <div className='pt-2'>
                            <input type="radio"
                            onClick={handlePaymentMethode}
                             value={'stripe'} checked={paymenMethode == 'stripe'} />
                            <label htmlFor="" className='form-label ps-2'>Stripe</label>

                            <input type="radio" 
                            onClick={handlePaymentMethode}
                            className='ms-3'checked={paymenMethode == 'cod'} value={'cod'} />
                            <label htmlFor="" className='form-label ps-2'>COD</label>
                        </div>
                        <div className="d-flex  py-3 pb-3">
                            <button className='btn btn-primary'>Pay Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Checkout