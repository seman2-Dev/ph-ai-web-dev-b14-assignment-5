import { useEffect, useState } from 'react';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Cards from './components/stack/Cards';
import type { Technology } from './components/types/cardInfoType';


export default function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [myStack, setMyStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load technologies data:', err);
        setLoading(false);
      });
  }, []);

  const addToStack = (tech: Technology) => {
    const exists = myStack.some((item) => item.id === tech.id);
    if (exists) return;
    setMyStack((prev) => [...prev, tech]);
  };
  const clearStack = () => {
    setMyStack([]);
  };
  const removeFromStack = (id: Technology['id']) => {
    setMyStack((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] text-slate-800 font-sans">
      <Navbar></Navbar>
      <Hero></Hero>
      <Cards
        technologies={technologies}
        myStack={myStack}
        loading={loading}
        addToStack={addToStack}
        removeFromStack={removeFromStack}
        clearStack={clearStack}
      ></Cards>
      <Footer></Footer>
    </div>
  );
}