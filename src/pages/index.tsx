import { useState } from "react";

export default function Home() {
  const onSubmit = (e: any) => {
    e.preventDefault();
    alert("Y yo qué sé?");
  };

  return (
    <div>
      <h1>ChatHDP - La Negligencia Artificial</h1>
      <form onSubmit={onSubmit}>
        <input type="text" />
        <input type="submit" />
      </form>
    </div>
  );
}
