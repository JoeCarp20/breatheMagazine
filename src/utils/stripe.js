import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY);

const handleCheckout = async (lineItems) => {

  try {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: lineItems,
      mode: 'payment',
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`,
    });
  
    if (error) throw error
  } catch (error) {
    return error
  }
};

export { stripePromise, handleCheckout }
