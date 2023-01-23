import React from "react";
import MyNavbar from "../Navbar";
import DocLinks from "./DocLinks";
import Code from "../img/code.png";

function QuickStart() {
  return (
    <div>
      <MyNavbar />
      <div className="quickStart">
        <DocLinks />
        <div>
          <h1>Introduction</h1>
          <p>
            Welcome to the Redux Toolkit Quick Start tutorial! This tutorial
            will briefly introduce you to Redux Toolkit and teach you how to
            start using it correctly.
          </p>
          <h2>How to Read This Tutorial</h2>
          <p>
            This page will focus on just how to set up a Redux application with
            Redux Toolkit and the main APIs you'll use. For explanations of what
            Redux is, how it works, and full examples of how to use Redux
            Toolkit, see the tutorials linked in the "Tutorials Overview" page.
          </p>
          <h1>Usage Summary</h1>
          <h2>Install Redux Toolkit and React-Redux</h2>
          <p>Add the Redux Toolkit and React-Redux packages to your project:</p>
          <div className="code">npm install @reduxjs/toolkit react-redux</div>
          <h2>Create a Redux Store</h2>
          <p>
            Create a file named src/app/store.js. Import the configureStore API
            from Redux Toolkit. We'll start by creating an empty Redux store,
            and exporting it:
          </p>
          <div className="code">
            <img src={Code} alt="code" />
          </div>
          <br />
          <p>
            This creates a Redux store, and also automatically configure the
            Redux DevTools extension so that you can inspect the store while
            developing.
          </p>
          <h2>Provide the Redux Store to React</h2>
          <p>
            Once the store is created, we can make it available to our React
            components by putting a React-Redux Provider around our application
            in src/index.js. Import the Redux store we just created, put a
            Provider around your App, and pass the store as a prop:
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuickStart;
