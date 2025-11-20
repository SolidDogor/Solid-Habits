import Header from "./components/Header/Header";
import HabitsSection from "./components/HabitsSection/HabitsSection";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <HabitsSection />
    </>
  );
}

export default App;
