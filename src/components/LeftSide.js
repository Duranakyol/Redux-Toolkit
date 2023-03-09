import React from "react";
import ProfilePhoto from "../assets/img/profilePhoto.png";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";

function LeftSide() {
  const userName = useSelector((state) => state.auth);
  return (
    <div className="leftSide">
      <div className="profile">
        <img src={ProfilePhoto} alt="" />
        <a href="/profile">{userName}</a>
        <span>Frontend Web Entwickler</span>
        <span>
          <b>Siephi Solutions</b>
        </span>
      </div>
      <div className="kategories">
        <h5>Introduction</h5>
        <a href="/gettingStarted">
          <BsArrowRightCircleFill />
          Getting Started
        </a>
        <h5>Tutorials</h5>
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
        <h5>Using Redux Toolkit</h5>
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

export default LeftSide;
