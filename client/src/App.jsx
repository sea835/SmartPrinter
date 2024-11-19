import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container w-[1400px] mx-auto items-center text-[15px]">
        <Header />
        <main>
          <h1>My App</h1>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
