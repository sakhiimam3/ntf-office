import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { IoMdTrendingUp } from "react-icons/io";
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

import "../../styles/pricehistory.css";

const Pricehisaccordian = () => {
  const [select, setSelect] = useState("");
  console.log(select);
  // Sample chart data
  const pdata = [
    {
      Range: select,
    },
    {
      Range: select,
      axis: 14 / 5,
    },
    {
      Range: select,
    },
  ];

  const handleselect = (e) => {
    setSelect(e.target.value);
  };
  return (
    <>
      <Accordion className="mt-4 accordian">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="accordian_header-text_and_icon">
            {" "}
            <IoMdTrendingUp /> &nbsp; Price History
          </Accordion.Header>
          <Accordion.Body className="accordian_body">
            
              <section>
               
                  <select className="select_input" onChange={handleselect}>
                    <option value="7">last 7 days</option>
                    <option value="14">last 14 days </option>
                    <option value="30">last 30 days</option>
                    <option value="60">last 60 days</option>
                    <option value="90">last 90 days</option>
                    <option value="all time">all time</option>
                  </select>
                

                <div className="mt-5">
                  <ResponsiveContainer width="100%" aspect={4}>
                    <LineChart data={pdata}>
                      <CartesianGrid />
                      <XAxis dataKey="axis" interval={"preserveStartEnd"} />
                      <YAxis dataKey="Range"></YAxis>
                      <Legend />
                      <Tooltip />
                      <Line
                        dataKey="axis"
                        stroke="green"
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
             
              </section>
            
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Pricehisaccordian;
