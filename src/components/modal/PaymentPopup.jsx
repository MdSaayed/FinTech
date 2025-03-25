import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

const getStripe = () => {
  try {
    const stripeKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
    if (!stripeKey || stripeKey === "your_stripe_public_key_here") {
      throw new Error("Stripe key is missing or invalid.");
    }
    return loadStripe(stripeKey);
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.info("Demo Mode: Stripe is disabled.");
    }
    return null;
  }
};

const stripePromise = getStripe();

const PaymentPopup = ({ price, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // If stripePromise is null, show a demo mode message
  if (!stripePromise) {
    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg w-full sm:w-96 relative">
          <h2 className="text-2xl font-bold text-center mb-4">Complete Your Purchase</h2>
          
          <div className="mb-4 text-center">
            <p className="text-xl font-medium">Total: $99.99</p> 
          </div>
      
          <div className="border p-3 rounded-md bg-gray-100 flex items-center justify-between">
            <span className="text-gray-600">•••• •••• •••• 4242</span>
            <img src="/card-icon.png" alt="Card" className="w-8" />
          </div>
      
          <p className="text-center text-gray-500 text-sm mt-2">
            ⚠️ Payments are disabled in demo mode. No actual transactions will be processed.
          </p>
      
          <button
            className="w-full py-2 mt-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
            onClick={() => {
              setTimeout(() => {
                onClose();
                navigate("/success");
              }, 1500); // Fake delay for realism
            }}
          >
            Pay Now
          </button>
        </div>
      </div>)
      
  }

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (!stripe || !elements) {
      setErrorMessage("Payment system is not ready. Please try again.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });

      if (error) throw error;

      onClose();
      navigate("/success");
    } catch (error) {
      setErrorMessage("Payment processing failed. Please try again.");
      if (process.env.NODE_ENV === "development") {
        console.info("Payment error:", error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-full sm:w-96 relative">
        <h2 className="text-2xl font-bold text-center mb-4">Complete Your Purchase</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <p className="text-xl font-medium">Total: ${price}</p>
          </div>

          <div className="mb-4">
            <CardElement className="border p-2 rounded-md" />
          </div>

          {errorMessage && (
            <div className="mb-4 text-red-600 text-sm text-center">{errorMessage}</div>
          )}

          <button
            type="submit"
            disabled={!stripe || loading}
            className={`w-full py-2 bg-purple-600 text-white rounded-md ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </form>

        <button
          className="absolute top-0 right-0 p-2 text-gray-500"
          onClick={onClose}
          aria-label="Close payment"
        >
          ×
        </button>
      </div>
    </div>
  );
};

// Only wrap <Elements> when Stripe is available
const PaymentPopupWrapper = ({ price, onClose }) => {
  if (!stripePromise) {
    return <PaymentPopup price={price} onClose={onClose} />;
  }

  return (
    <Elements stripe={stripePromise}>
      <PaymentPopup price={price} onClose={onClose} />
    </Elements>
  );
};

export default PaymentPopupWrapper;
