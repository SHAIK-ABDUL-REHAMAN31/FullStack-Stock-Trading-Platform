import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Holdings = () => {
//   const [allHoldings, setAllHoldings] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:3002/allHoldings").then((res) => {
//       // console.log(res.data);
//       setAllHoldings(res.data);
//     });
//   }, []);

const Orders = () => {
  const [newOrder, setNeworder] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/getNewOrder").then((res) => {
      console.log(res.data);
      setNeworder(res.data);
    });
  }, []);

  return (
    <>
      <h3 className="title">orders ({newOrder.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Order id</th>
            <th> order name</th>
            <th>Order qty</th>
            <th>Order Mode</th>
            <th>Order Status</th>
          </tr>

          {newOrder.map((stock, index) => {
            // const curValue = stock.price * stock.qty;
            // const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            // const profClass = isProfit ? "profit" : "loss";
            // const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock._id}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.mode}</td>
                <td>
                  {
                    <Button variant="contained" color="success">
                      Active
                    </Button>
                  }
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Orders;
