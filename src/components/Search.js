import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBookmarkFill, BsBookmark } from "react-icons/bs";
import "./Search.css";

function search() {
  return (
    <div className="left">
      <div className="search-zone">
        <form>
          <AiOutlineSearch />
          <input
            type="search"
            id="searchQuery"
            name="SearchQuery"
            placeholder="Search Eg. Zerodha, Groww, Uptox"
          />
        </form>
      </div>
      <div className="stocks">
        <div>
          <div>Upstox</div>
          <div>
            <span style={{ color: "red" }}>Buy</span>
            <span style={{ color: "green" }}>Sell</span>
            <span>
              <BsBookmarkFill />
            </span>
          </div>
        </div>
        <div>
          <div>Zerodha</div>
          <div>
            <span style={{ color: "red" }}>Buy</span>
            <span style={{ color: "green" }}>Sell</span>
            <span>
              <BsBookmark />
            </span>
          </div>
        </div>
        <div>
          <div>Groww</div>
          <div>
            <span style={{ color: "red" }}>Buy</span>
            <span style={{ color: "green" }}>Sell</span>
            <span>
              <BsBookmark />
            </span>
          </div>
        </div>
      </div>
      <div className="searchbottom">
        <div>All Companies</div>
        <div style={{ borderRight: "1px solid gray" }}></div>
        <div>Watchlist</div>
      </div>
    </div>
  );
}

export default search;
