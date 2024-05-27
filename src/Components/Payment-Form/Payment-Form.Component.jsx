import { CardElement, useStripe, useElements  } from '@stripe/react-stripe-js';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handlePayment = async (e) => {
        e.preventDefault();

        if(!stripe || !elements) {
            return;
        }

    } 

  return (
    <div>
        <CardElement></CardElement>
        <button className='btn-inverse' onSubmit={handlePayment} type='submit'>Pay now</button>
    </div>
  )
}

export default PaymentForm