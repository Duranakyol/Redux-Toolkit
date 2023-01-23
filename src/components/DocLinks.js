import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";

function DocLinks() {
  return (
    <div className="links">
      <div className="kategories">
        <h4>Introduction</h4>
        <a href="/gettingStarted">
          <BsArrowRightCircleFill />
          Getting Started
        </a>
        <h4>Tutorials</h4>
        <a href="/tutorialsoverview">
          <BsArrowRightCircleFill />
          Tutorials Overview
        </a>
        <a href="/quickstart">
          <BsArrowRightCircleFill />
          Quick Start
        </a>
        <a href="/typescript">
          <BsArrowRightCircleFill />
          TypeScript
        </a>
        <a href="/rtkquery">
          <BsArrowRightCircleFill />
          RTK Query
        </a>
        <h4>Using Redux Toolkit</h4>
        <a href="/documentation">
          <BsArrowRightCircleFill />
          Usage Guide
        </a>
        <a href="/documentation">
          <BsArrowRightCircleFill />
          Usage With TypeScript
        </a>
        <a href="/documentation">
          <BsArrowRightCircleFill />
          Writing Reducers
        </a>
      </div>
    </div>
  );
}

export default DocLinks;
