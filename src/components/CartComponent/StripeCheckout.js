// stripe.button.component.jsx
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {useHistory} from 'react-router-dom'


const StripeCheckoutButton = ({ price }) => {

    let history = useHistory();
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51M6zfSSG1K9IO7xT3BAIZkAXn9GUpwHUaXd4Nw1yfSyZa0njlzvO1JxREWGOgCV6hrS8nUqIVVaXh05ZCq03L7K1005p20U084';

    const onToken = token => {
        console.log(token);
        if(token.id){
        alert('Payment Succesful!')
        history.push('/Success')


    }
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='products'
            billingAddress
            shippingAddress
            
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;