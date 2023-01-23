import React from "react";
import { BsFillLightbulbFill } from "react-icons/bs";
import MyNavbar from "../Navbar";
import DocLinks from "./DocLinks";

function TutorialsOverview() {
  return (
    <div>
      <MyNavbar />
      <div className="tutorialsOverview">
        <DocLinks />
        <div>
          <h1>Tutorials Overview</h1>
          <p>
            The Redux core docs site at{" "}
            <a href="https://redux.js.org">https://redux.js.org</a> contains the
            primary tutorials for learning Redux, including how to use Redux
            Toolkit and React-Redux together.
          </p>
          <div className="tip">
            <div>
              <BsFillLightbulbFill className="icon" />
              TIP
            </div>
            <p>
              To avoid duplicating explanations between the Redux core and Redux
              Toolkit documentation, we've focused on making the Redux core docs
              tutorials comprehensive, and point to them instead of having
              extended tutorials here in the Redux Toolkit docs.
            </p>
          </div>
          <h2>Redux Toolkit Quick Starts</h2>
          <p>
            The Redux Toolkit Quick Start tutorial briefly shows how to add and
            use Redux Toolkit in a React application. If you just want the
            fastest way to get a basic example running, read the Quick Start
            tutorial. We also have a TypeScript Quick Start tutorial that
            briefly shows how to set up and use TypeScript with Redux Toolkit
            and React-Redux.
          </p>
          <h2>Redux Essentials: A Real-World Example</h2>
          <p>
            The Redux Essentials tutorial teaches you "how to use Redux the
            right way", using Redux Toolkit as the standard approach for writing
            Redux logic. It shows how to build a "real world"-style example
            application, and teaches Redux concepts along the way. If you've
            never used Redux before, and just want to know "how do I use this to
            build something useful?", start with the Redux Essentials tutorial.
          </p>
          <h2>Redux Fundamentals: Redux from the Ground Up</h2>
          <p>
            The Redux Fundamentals tutorial teaches "how Redux works, from the
            bottom up", by showing how to write Redux code by hand and why
            standard usage patterns exist. It then shows how Redux Toolkit
            simplifies those Redux usage patterns. Since Redux Toolkit is an
            abstraction layer that wraps around the Redux core, it's helpful to
            know what RTK's APIs are actually doing for you under the hood. If
            you want to understand how Redux really works and why RTK is the
            recommended approach, read the Redux Fundamentals tutorial.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TutorialsOverview;
