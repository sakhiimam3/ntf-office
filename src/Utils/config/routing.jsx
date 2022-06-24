import React,{useState,useEffect} from "react";
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
import Signup from "../../Pages/signup";
import Listing from "../../components/presentational/Listing";
import Data from "../../components/frequently-used/data.json"
import Login from "../../Pages/Login"
import CreateMultipleNft from "../../Pages/createMultipleNft";


const Routing = () => {
  const [renderdata,setRenderData]=useState([])
  const [nestedData,setnestedData]=useState([])
  const [listaccordian,setlistaccordian]=useState([])
  const [offeraccordian,setOfferaccordian]=useState([])
  const [proaccordian,setPropAccordian]=useState([])
  const [aboutacc,setAboutacc]=useState([])
  const[activityaccordian,setActivityacc]=useState([])

  useEffect(()=>{
     setRenderData(Data.Gallery)
     setnestedData(Data.NFTS_Data)
     setlistaccordian(Data.listing_table)
     setOfferaccordian(Data.offers_table)
     setPropAccordian(Data.properties_data)
     setAboutacc(Data.About_accordian)
     setActivityacc(Data.select_input)

  },[])
    return (
      <>
        <Routes>
            <Route path="/" element={< LayoutRoute/>}> 
            <Route path="/" element={<Home />} />
            <Route path="/explore"  element={<Explore data={renderdata} />}  />
            <Route path="/stats"  element={<Stats />} />
            <Route path="/resourses" element={<Resourses />} />
            <Route path="/create" element={<Create />} />
            <Route path="/:id"   element={<Collection data={renderdata}  nestedData={nestedData}/>} />

            <Route path="/listing/:id"   
             element={<Listing    
            nestedData={nestedData} 
            listaccordian={listaccordian} 
            offerdata={offeraccordian} 
            propertiesData={proaccordian}
            aboutdata={aboutacc}
            activityData={activityaccordian}

            />} />
            <Route path="/create/:id"   element={<CreateMultipleNft  data={nestedData} />} />

            <Route path="/createMetamask" element={<CreateMetamask />} />
            <Route path="/signup" element={<Signup />} /> 
            <Route path="/login" element={<Login/>} />


            </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </>
    );
  };
  
  export default Routing;
  