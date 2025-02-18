// components
import NotFound from "./components/404/NotFound";
import AboutUs from "./pages/about-us/AboutUs";
import CreateArticle from "./pages/create-article/CreateArticle";
import Home from "./pages/home/Home";
import SinglePage from "./pages/single-page/SinglePage";

// libraries
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        {/*
          dar inja ma har chand ta ke bekhaim 'Route' misazim hala baraye ha 'Route' bayad 2 ta props barash befrestim :
          1- masir ya 'path' hast ke tush malum mishe kodum url data ferestade beshe.
          2- yek 'element' ya component migire ke be oun url ke gofti ersal mishe.
        */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* 
          dar inja ma bayad baraye inke dakhel single-page ya hamun data article bayad biaim baraye url 'id' moshakhas konim 
          baraye shenase har article.
         */}
        <Route path="/article/:articleId" element={<SinglePage />} />
        <Route path="/create-article" element={<CreateArticle />} />
      </Routes>
    </>
  );
}

export default App;
