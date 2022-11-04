import { useState, useEffect } from "react";

const PRICE_BASE = 10000;

export default function ReservationCard({ title }) {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(PRICE_BASE);

  useEffect(() => {
    setPrice(count * PRICE_BASE);
  }, [count])


  const add = () => {
    const newCount = count + 1
    setCount(newCount);
  };

  const subtract = () => {
    const newCount = count - 1
    if (newCount >= 1) setCount(newCount);
  };

  const checkout = () => {
    alert(`Sus ${count} asientos fueron reservados.`)
  }

  return (
    <div className="p-4 border-4 border-sky-500 rounded-md text-white">
      <div className="flex flex-row justify-start items-center space-x-2">
        <img className="w-8" src="/assets/react.png"/>
        <h2 className="text-lg">Book now!</h2>
      </div>

      <h3 className="text-2xl mb-2 font-bold">{title}</h3>

      <p className="mb-4">Seleccione el número de asientos a reservar</p>

      <div className="flex flex-row space-x-4 justify-center items-center mb-4">
        <button className="bg-sky-500 w-8 h-8" onClick={subtract}>-</button>
        <span>{count} Personas</span>
        <button className="bg-sky-500 w-8 h-8" onClick={add}>+</button>
      </div>

      <p>Total: <span className="text-lg text-sky-500">$ {price} COP</span></p>

      <button onClick={checkout} className="px-4 py-2 bg-sky-300 mt-4">Checkout!</button>
    </div>
    );
  }
