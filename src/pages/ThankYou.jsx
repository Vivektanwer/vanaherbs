import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function ThankYou() {
  const navigate = useNavigate();
  // Go back Home after 4 seconds.
  useEffect(() => {
    const timer = setTimeout(() => navigate("/"), 4000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
      <i className="bi bi-check-circle-fill text-6xl text-leaf"></i>
      <h1 className="mt-4 text-5xl font-bold text-forest">Thank you!</h1>
      <p className="mt-3 max-w-md">We received your message and sent a confirmation to your email. Taking you back home in 4 seconds...</p>
    </section>
  );
}
