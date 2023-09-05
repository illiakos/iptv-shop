import {loadStripe} from "@stripe/stripe-js";


export async function checkout({lineItems}) {
    let stripePromise = null

    const getStripe = () => {
        if (!stripePromise) {
            stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY)
            //stripePromise = loadStripe("pk_live_51Nea25K1pNgR6R0dpQaFejDEStMq7PdgzuRAnINu1Wx4wOX5IGtcuPRg1ABqzcn67ulgcaYMHVX9Ve2jaeebTrRt00yerPjemv")
        }
        return stripePromise
    }

    const stripe = await getStripe()


    await stripe.redirectToCheckout({
        mode: 'payment',
        lineItems,
        successUrl: `${window.location.origin}/success`,
        cancelUrl:  window.location.origin

    })
}
