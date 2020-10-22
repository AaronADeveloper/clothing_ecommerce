import StripeCheckout from 'react-stripe-checkout'

import React from 'react'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51HccS2KAdlyHumHpJV25b66oaRD3MKv53UIh4ze3jQCCegnDBotN9xCSphedrdGxEJL2uyfArxZnFHAXxU0oVr41002FQMaIW5"
    
   const onToken = token => {
        console.log(token)
        alert('payment successful')
    }

    return (
        <div>
            <StripeCheckout
                label='Pay Now'
                name="CRWN Clothing Ltd."
                billingAddress
                shippingAddress
                image="https://svgshare.com/i/CUz.svg"
                description={`Your total is $${price}`}
                amount={priceForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publishableKey}
             />
        </div>
    )
}

export default StripeCheckoutButton
