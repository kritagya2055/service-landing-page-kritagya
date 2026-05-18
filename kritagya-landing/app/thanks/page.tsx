import ThanksContent from "./ThanksContent";
import Footer from "../components/Footer";

export const metadata = {
  title: "Thank You — Kritagya Bhandari",
  description: "Your spot is confirmed. Here's what happens next.",
};

export default function ThanksPage() {
  return (
    <main className="relative w-full flex flex-col">
      <ThanksContent />
      <Footer />
    </main>
  );
}
