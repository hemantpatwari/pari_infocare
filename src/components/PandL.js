import React from "react";
import "./PandL.css";
import Dougnut from "./Dougnut.JPG";

function PandL() {
  return (
    <div>
      <div className="container">
        <div className="comment">
          <div style={{ marginBottom: "10px" }}>P&L</div>
          <div style={{ color: "green", fontSize: "1.5rem" }}>₹50000</div>
          <div style={{ color: "green" }}>+24.3%</div>
        </div>
        <div className="comment">
          <div className="timeline"></div>
          <table>
            <tr>
              <td style={{ paddingRight: "1.5rem", paddingBottom: "0.7rem" }}>
                Total Investment
              </td>
              <td style={{ paddingRight: "1.5rem", paddingBottom: "0.7rem" }}>
                ₹10000
              </td>
            </tr>
            <tr>
              <td>Current Value</td>
              <td>₹15000</td>
            </tr>
          </table>
        </div>
      </div>
      <img className="chart" src={Dougnut} alt="" />
    </div>
  );
}

export default PandL;
