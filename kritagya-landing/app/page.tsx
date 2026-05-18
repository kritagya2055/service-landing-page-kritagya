import Hero from "./components/Hero";
import Problems from "./components/Problems";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative w-full flex flex-col">
      <Hero />
      <Problems />
      <Services />
      <HowItWorks />
      <BookingForm />
      <Footer />
    </main>
  );
}
