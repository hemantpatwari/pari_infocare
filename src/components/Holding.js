import React from "react";
import { FaPuzzlePiece, FaCloudDownloadAlt } from "react-icons/fa";
import "./Holding.css";
import PandL from "./PandL";

function Holding() {
  return (
    <div className="holding">
      <div className="holdingHeader">
        <div className="holdingHeaderLeft">Holdings(6)</div>
        <div className="holdingHeaderRight">
          <div>
            <FaPuzzlePiece />
            Add Holdings
          </div>
          <div>
            <FaCloudDownloadAlt />
            Download
          </div>
        </div>
      </div>
      <div class="board">
        <div class="boxNoBorder">Instrument</div>
        <div class="box">
          <span>Qty</span>
          <span>Avg. Cost</span>
          <span>LTP</span>
        </div>
        <div class="boxNoBorder">
          <span>Cur. Value</span>
          <span>P&L</span>
          <span>Net Change</span>
        </div>
        <div class="boxNoBorder">TATA POWER</div>
        <div class="box">
          <span>400</span>
          <span>114.00</span>
          <span>118.15</span>
        </div>
        <div class="boxNoBorder">
          <span>47,260.00</span>
          <span style={{ color: "green" }}>1,000.00</span>
          <span style={{ color: "green" }}>+3.45%</span>
        </div>
        <div class="boxNoBorder">ADANI POWER</div>
        <div class="box">
          <span>400</span>
          <span>114.00</span>
          <span>118.15</span>
        </div>
        <div class="boxNoBorder">
          <span>47,260.00</span>
          <span style={{ color: "red" }}>1,000.00</span>
          <span style={{ color: "red" }}>-3.45%</span>
        </div>
        <div class="boxNoBorder">RPOWER</div>
        <div class="box">
          <span>400</span>
          <span>114.00</span>
          <span>118.15</span>
        </div>
        <div class="boxNoBorder">
          <span>-</span>
          <span>-</span>
          <span>-</span>
        </div>
      </div>
      <PandL />
    </div>
  );
}

export default Holding;
