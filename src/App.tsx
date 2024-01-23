import React, { useEffect, useState } from "react";
import "./App.css";
import { GlobalStyle, ThemeProviderContext } from "theme";
import { RouterProvider } from "react-router-dom";
import { Preloader } from "services";
import { AnimatePresence } from "framer-motion";
import Aos from "aos";
import { pageRoutes } from "routes";
import { Footer, Header } from "components";

function App() {
  const [isPreloader, setIsPreloader] = useState(true);

  setTimeout(() => {
    setIsPreloader(false);
  }, 2000);

  useEffect(() => {
    Aos.init({
      easing: "ease-in-out",
      once: true,
      duration: 500, // whether animation should happen only once - while scrolling down
    });
  });

  return (
    <>
      <GlobalStyle />
      <ThemeProviderContext>
        <AnimatePresence mode="wait">
          <Header />
          <RouterProvider router={pageRoutes} />
          <Footer />
        </AnimatePresence>
      </ThemeProviderContext>
    </>
  );
}

export default App;
