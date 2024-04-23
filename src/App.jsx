import Footer from "./Components/Footer.jsx";
import Principal from "./Components/Principal.jsx";
import Success from "./Components/Success.jsx";
import { useState } from "react";
const App = () => {
  const [succes, setSucces] = useState(true);
  return (
    <>
      <main>
        {succes ? (
          <Principal
           succes={succes}
           setSucces={setSucces}
          />
        ) : (
          <Success
            setSucces={setSucces}
          />
        )}
      </main>
      <Footer />
    </>
  );
};

export default App;
