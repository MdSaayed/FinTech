import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { LiaStripe } from "react-icons/lia";


/**
 * Loads Stripe instance if a valid key is provided, otherwise returns null.
 * Logs a message in dev mode if the key is missing or invalid.
 */
const getStripe = () => {
  try {
    const stripeKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
    
    if (!stripeKey || stripeKey === "your_stripe_public_key_here") {
      if (import.meta.env.MODE === "development") {
        console.info("Demo Mode is enabled because your Stripe key is invalid or missing.");
      }
      throw new Error("Stripe key is missing or invalid.");
    }
    
    return loadStripe(stripeKey);
  } catch (error) {
    return null; // Return null to trigger demo mode
  }
};

const stripePromise = getStripe();

const PaymentPopup = ({ price, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // If stripePromise is null, show a demo mode message instead of the real form
  if (!stripePromise) {
    return (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg w-full sm:w-96 relative">
          <h2 className="text-2xl font-bold text-center mb-4">Complete Your Purchase</h2>
          
          <div className="mb-4 text-center">
            <p className="text-xl font-medium">Total: ${price}</p> 
          </div>

          {/* Simulated card input */}
          <div className="border p-3 rounded-md bg-gray-100 flex items-center justify-between">
            <span className="text-gray-600">•••• •••• •••• 4242</span>
            <LiaStripe className="text-2xl"/>
          </div>

          <p className="text-center text-gray-500 text-sm mt-2">
            ⚠️ Payments are disabled in demo mode. No actual transactions will be processed.
          </p>
          <button
            className="w-full py-2 mt-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
            onClick={() => {
              setLoading(true); // Set loading before starting the delay
              setTimeout(() => {
                onClose();
                navigate("/success");
              }, 1500); // Simulate processing delay
            }}
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </div>
      </div>
    );
  }

  const stripe = useStripe();
  const elements = useElements();

  /**
   * Handles form submission for real payment processing.
   * Ensures Stripe is available before attempting payment.
   */
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

      // Payment success: Close popup and navigate to success page
      onClose();
      navigate("/success");
    } catch (error) {
      setErrorMessage("Payment processing failed. Please try again.");
      if (import.meta.env.MODE === "development") {
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

          {/* Stripe CardElement Input */}
          <div className="mb-4">
            <CardElement className="border p-2 rounded-md" />
          </div>

          {/* Display errors if any */}
          {errorMessage && (
            <div className="mb-4 text-red-600 text-sm text-center">{errorMessage}</div>
          )}

          {/* Payment Button */}
          <button
            type="submit"
            disabled={!stripe || loading}
            className={`w-full py-2 bg-purple-600 text-white rounded-md ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-700 transition"
            }`}
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </form>

        {/* Close button */}
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

/**
 * Wrapper component that ensures Elements provider is only used when Stripe is available.
 */
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
