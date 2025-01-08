import React, { useState } from "react";
import Header from "./component/Header";
import Home1 from "./component/Home1";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div >
      <Header dark={isDark} setIsDark={setIsDark} />
      
      <Home1 dark={isDark} />
    </div>
  );
}

export default App;
