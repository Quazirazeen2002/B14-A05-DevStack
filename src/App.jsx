import { useMemo, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TechnologiesSection from "./components/TechnologiesSection";
import { useTechnologies } from "./hooks/useTechnologies";

export default function App() {
  const { technologies, isLoading, error } = useTechnologies();
  const [stack, setStack] = useState([]);

  const stackIds = useMemo(() => new Set(stack.map((tech) => tech.id)), [stack]);

  function handleAdd(tech) {
    if (stackIds.has(tech.id)) {
      toast.warn(`${tech.name} is already in your stack.`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack.`);
  }

  function handleRemove(id) {
    const removed = stack.find((tech) => tech.id === id);
    setStack((prev) => prev.filter((tech) => tech.id !== id));
    if (removed) {
      toast.info(`${removed.name} removed from your stack.`);
    }
  }

  function handleRemoveAll() {
    if (stack.length === 0) return;
    setStack([]);
    toast.info("Your stack has been cleared.");
  }

  return (
    <div className="min-h-screen bg-[#fdfcff]">
      <Navbar />
      <main>
        <Hero />
        <TechnologiesSection
          technologies={technologies}
          isLoading={isLoading}
          error={error}
          stack={stack}
          stackIds={stackIds}
          onAdd={handleAdd}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </main>
      <Footer />
      <ToastContainer position="bottom-right" autoClose={2800} newestOnTop />
    </div>
  );
}
