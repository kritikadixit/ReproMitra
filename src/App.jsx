import React from "react";
import Layout from "./Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeHero from "./section/HomeHero";
import Chatbot from "./section/Chatbot";
import AboutRepromitra from "./section/About";
import Pcos from "./component/Pcos";
import MaleInfertility from "./component/infertility";
import ErectileDysfunction from "./component/erectile";
import LowTestosterone from "./component/low_test";
import MenstrualDisorders from "./component/Menstr_dis";
import Endometriosis from "./component/Endometriosis";
import MaleReproductiveDiseases from "./component/men_health";
import WomenReproductiveDiseases from "./component/wom_health";
import AyushmannCard from "./component/Ayushmanncard";
//import { About } from "./section/About";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomeHero />,
        },
        {
          path: "/chat",
          element: <Chatbot />,
        },
        {
          path: "/about",
          element: <AboutRepromitra  />,
        
        }, {path:'/pcos',element: <Pcos/>}
        ,{path:'/maleinfertility',element: <MaleInfertility/>}
        ,{path:'/erectiledysfunction',element: <ErectileDysfunction/>}
        ,{path:'/lowtestosterone',element: <LowTestosterone/>}
        ,{path:'/menstrualdisorders',element: <MenstrualDisorders/>}
        ,{path:'/endometriosis',element: <Endometriosis/>}
        ,{path:'/womens-health',element: <WomenReproductiveDiseases/>}
        ,{path:'/mens-health',element: <MaleReproductiveDiseases/>}
        ,{path:'/ayushmann-card',element: <AyushmannCard/>}
      ],
    },
  ]);
  return <RouterProvider router={router}> </RouterProvider>;
};

export default App;