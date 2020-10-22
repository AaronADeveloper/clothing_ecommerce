import './checkout.styles.scss'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectCartHidden, selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../checkout-item/checkout-item';
import StripeCheckoutButton from '../stripe-button/stripe-button';
import React from 'react'


const Checkout = ({cartItems, total}) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => 
                <CheckoutItem cartItem={cartItem} key={cartItem.id} />)
            }

            <div className="total">
                <span>TOTAL: ${total}</span>
            </div>

            <StripeCheckoutButton price={total} />
            <div className='warning'>
            **PLEASE USE STRIPE'S PROVIDED FAKE CREDIT CARD INFO BELOW FOR PAYMENT PROCESSING: <br/>
                #: 4242 4242 4242 4242 <br/>
                EXP: 01/21 <br/>
                CVC: 123
                

            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout)
