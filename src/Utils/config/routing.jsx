import React from "react";
import { Route, Routes } from "react-router-dom";
import Explore from "../../Pages/explore";
import Stats from "../../Pages/stats";
import Resourses from "../../Pages/Resourses";
import Create from "../../Pages/create";
import LayoutRoute from "./layoutRoute";
import Error from "../../Pages/error";
import Collection from "../../components/presentational/collection";
import CreateMetamask from "../../components/presentational/createMetamask";
import Home from "../../Pages/home";

const Routing = () => {
    return (
      <>
        <Routes>
            <Route path="/" element={< LayoutRoute/>}> 
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/resourses" element={<Resourses />} />
            <Route path="/create" element={<Create />} />
            <Route path="/:id" element={<Collection />} />
            <Route path="/createMetamask" element={<CreateMetamask />} />

            </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </>
    );
  };
  
  export default Routing;
  