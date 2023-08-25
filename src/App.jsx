import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import ProductDetail from "./Pages/ProductDetail";
import Products from "./Pages/Products";
import Error from "./Pages/Error";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import GoToBtn from "./Components/GoToBtn";

const App = () => {
  const theme = {
    colors: {
      heading: "#18181d",
      text: "#18181d",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "#efefff",
      footer_bg: "#0a1435",
      btn: "#594aff",
      border: "#6254f380",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='products' element={<Products />} />
            <Route path='product/:id' element={<ProductDetail />} />
            <Route path='contact' element={<Contact />} />
            <Route path='/*' element={<Error />} />
          </Routes>
          <Footer />
          <GoToBtn />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
