import React from 'react'
import Banner from "../components/presentational/banner"
import Tabs from "../components/stateful/tabs"
const Explore = (props) => {

  return (
    <>
    
      <Banner />
      <Tabs  data={props.data} />
    </>
  )
}

export default Explore
