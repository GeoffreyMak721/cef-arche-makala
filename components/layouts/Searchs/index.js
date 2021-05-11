import React from "react";

export default function index() {
  return (
    <div className="search-model-box">
      <div className="d-flex align-items-center h-100 justify-content-center">
        <div className="search-close-btn">+</div>
        <form className="search-model-form">
          <input
            type="text"
            id="search-input"
            placeholder="Searching key....."
          />
        </form>
      </div>
    </div>
  );
}
