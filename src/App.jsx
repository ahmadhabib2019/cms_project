import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://https://zkhboemccxdeopiwcryk.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpraGJvZW1jY3hkZW9waXdjcnlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkzNzExNDUsImV4cCI6MjA1NDk0NzE0NX0.XDQko6kUFpRJ2GxmbB6WbTTYlbDjkzh7aK_SVE2JDFw");

function App() {
  const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    getInstruments();
  }, []);

  async function getInstruments() {
    const { data } = await supabase.from("instruments").select();
    setInstruments(data);
  }

  return (
    <ul>
      {instruments.map((instrument) => (
        <li key={instrument.name}>{instrument.name}</li>
      ))}
    </ul>
  );
}

export default App;