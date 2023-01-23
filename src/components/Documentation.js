import React from "react";
import { BsFillLightbulbFill } from "react-icons/bs";
import MyNavbar from "../Navbar";
import DocLinks from "./DocLinks";
import Code from "../img/code.png";
import Code2 from "../img/code2.png";
import Code3 from "../img/code3.png";

function Documentation() {
  return (
    <div>
      <MyNavbar />
      <div className="documentation">
        <DocLinks />
        <div>
          <div className="docGettingStarted">
            <h1>Getting Started with Redux Toolkit</h1>
            <h2>Purpose</h2>
            <p>
              The Redux Toolkit package is intended to be the standard way to
              write Redux logic. It was originally created to help address three
              common concerns about Redux: "Configuring a Redux store is too
              complicated" "I have to add a lot of packages to get Redux to do
              anything useful" "Redux requires too much boilerplate code" We
              can't solve every use case, but in the spirit of create-react-app,
              we can try to provide some tools that abstract over the setup
              process and handle the most common use cases, as well as include
              some useful utilities that will let the user simplify their
              application code. Redux Toolkit also includes a powerful data
              fetching and caching capability that we've dubbed "RTK Query".
              It's included in the package as a separate set of entry points.
              It's optional, but can eliminate the need to hand-write data
              fetching logic yourself. These tools should be beneficial to all
              Redux users. Whether you're a brand new Redux user setting up your
              first project, or an experienced user who wants to simplify an
              existing application, Redux Toolkit can help you make your Redux
              code better.
            </p>
            <h1>Installation</h1>
            <h2>Using Create React App</h2>
            <p>
              The recommended way to start new apps with React and Redux is by
              using the official Redux+JS template or Redux+TS template for
              Create React App, which takes advantage of Redux Toolkit and React
              Redux's integration with React components.
            </p>
            <div className="code">
              # Redux + Plain JS template npx create-react-app my-app --template
              redux # Redux + TypeScript template npx create-react-app my-app
              --template redux-typescript
            </div>
            <h2>An Existing App</h2>
            <p>
              Redux Toolkit is available as a package on NPM for use with a
              module bundler or in a Node application:
            </p>
            <div className="code"># NPM npm install @reduxjs/toolkit</div>
            <p>
              It is also available as a precompiled UMD package that defines a
              window.RTK global variable. The UMD package can be used as a
              script tag directly.
            </p>
            <h1>What's Included</h1>
            <p>
              Redux Toolkit includes these APIs: configureStore(): wraps
              createStore to provide simplified configuration options and good
              defaults. It can automatically combine your slice reducers, adds
              whatever Redux middleware you supply, includes redux-thunk by
              default, and enables use of the Redux DevTools Extension.
              createReducer(): that lets you supply a lookup table of action
              types to case reducer functions, rather than writing switch
              statements. In addition, it automatically uses the immer library
              to let you write simpler immutable updates with normal mutative
              code, like state.todos[3].completed = true. createAction():
              generates an action creator function for the given action type
              string. The function itself has toString() defined, so that it can
              be used in place of the type constant. createSlice(): accepts an
              object of reducer functions, a slice name, and an initial state
              value, and automatically generates a slice reducer with
              corresponding action creators and action types. createAsyncThunk:
              accepts an action type string and a function that returns a
              promise, and generates a thunk that dispatches
              pending/fulfilled/rejected action types based on that promise
              createEntityAdapter: generates a set of reusable reducers and
              selectors to manage normalized data in the store The
              createSelector utility from the Reselect library, re-exported for
              ease of use.
            </p>
            <h1>Learn Redux</h1>
            <p>
              We have a variety of resources available to help you learn Redux.
            </p>
            <h2>Redux Essentials Tutorial</h2>
            <p>
              The Redux Essentials tutorial is a "top-down" tutorial that
              teaches "how to use Redux the right way", using our latest
              recommended APIs and best practices. We recommend starting there.
            </p>
            <h2>Redux Fundamentals Tutorial</h2>
            <p>
              The Redux Fundamentals tutorial is a "bottom-up" tutorial that
              teaches "how Redux works" from first principles and without any
              abstractions, and why standard Redux usage patterns exist.
            </p>
            <h2>Learn Modern Redux Livestream</h2>
            <p>
              Redux maintainer Mark Erikson appeared on the "Learn with Jason"
              show to explain how we recommend using Redux today. The show
              includes a live-coded example app that shows how to use Redux
              Toolkit and React-Redux hooks with Typescript, as well as the new
              RTK Query data fetching APIs. See the "Learn Modern Redux" show
              notes page for a transcript and links to the example app source.
            </p>
            <iframe
              className="video"
              width="760"
              height="415"
              src="https://www.youtube.com/embed/9zySeP5vH9c"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="docTutorialsOverview">
            <h1>Tutorials Overview</h1>
            <p>
              The Redux core docs site at{" "}
              <a href="https://redux.js.org">https://redux.js.org</a> contains
              the primary tutorials for learning Redux, including how to use
              Redux Toolkit and React-Redux together.
            </p>
            <div className="tip">
              <div>
                <BsFillLightbulbFill className="icon" />
                TIP
              </div>
              <p>
                To avoid duplicating explanations between the Redux core and
                Redux Toolkit documentation, we've focused on making the Redux
                core docs tutorials comprehensive, and point to them instead of
                having extended tutorials here in the Redux Toolkit docs.
              </p>
            </div>
            <h2>Redux Toolkit Quick Starts</h2>
            <p>
              The Redux Toolkit Quick Start tutorial briefly shows how to add
              and use Redux Toolkit in a React application. If you just want the
              fastest way to get a basic example running, read the Quick Start
              tutorial. We also have a TypeScript Quick Start tutorial that
              briefly shows how to set up and use TypeScript with Redux Toolkit
              and React-Redux.
            </p>
            <h2>Redux Essentials: A Real-World Example</h2>
            <p>
              The Redux Essentials tutorial teaches you "how to use Redux the
              right way", using Redux Toolkit as the standard approach for
              writing Redux logic. It shows how to build a "real world"-style
              example application, and teaches Redux concepts along the way. If
              you've never used Redux before, and just want to know "how do I
              use this to build something useful?", start with the Redux
              Essentials tutorial.
            </p>
            <h2>Redux Fundamentals: Redux from the Ground Up</h2>
            <p>
              The Redux Fundamentals tutorial teaches "how Redux works, from the
              bottom up", by showing how to write Redux code by hand and why
              standard usage patterns exist. It then shows how Redux Toolkit
              simplifies those Redux usage patterns. Since Redux Toolkit is an
              abstraction layer that wraps around the Redux core, it's helpful
              to know what RTK's APIs are actually doing for you under the hood.
              If you want to understand how Redux really works and why RTK is
              the recommended approach, read the Redux Fundamentals tutorial.
            </p>
          </div>
          <div className="docQuickStart">
            <h1>Introduction</h1>
            <p>
              Welcome to the Redux Toolkit Quick Start tutorial! This tutorial
              will briefly introduce you to Redux Toolkit and teach you how to
              start using it correctly.
            </p>
            <h2>How to Read This Tutorial</h2>
            <p>
              This page will focus on just how to set up a Redux application
              with Redux Toolkit and the main APIs you'll use. For explanations
              of what Redux is, how it works, and full examples of how to use
              Redux Toolkit, see the tutorials linked in the "Tutorials
              Overview" page.
            </p>
            <h1>Usage Summary</h1>
            <h2>Install Redux Toolkit and React-Redux</h2>
            <p>
              Add the Redux Toolkit and React-Redux packages to your project:
            </p>
            <div className="code">npm install @reduxjs/toolkit react-redux</div>
            <h2>Create a Redux Store</h2>
            <p>
              Create a file named src/app/store.js. Import the configureStore
              API from Redux Toolkit. We'll start by creating an empty Redux
              store, and exporting it:
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
              components by putting a React-Redux Provider around our
              application in src/index.js. Import the Redux store we just
              created, put a Provider around your App, and pass the store as a
              prop:
            </p>
          </div>
          <div className="docTypeScript">
            <h1>Introduction</h1>
            <p>
              Welcome to the Redux Toolkit TypeScript Quick Start tutorial! This
              tutorial will briefly show how to use TypeScript with Redux
              Toolkit. This page focuses on just how to set up the TypeScript
              aspects . For explanations of what Redux is, how it works, and
              full examples of how to use Redux Toolkit, see the tutorials
              linked in the "Tutorials Overview" page. Redux Toolkit is already
              written in TypeScript, so its TS type definitions are built in.
              React Redux has its type definitions in a separate
              @types/react-redux typedefs package on NPM. In addition to typing
              the library functions, the types also export some helpers to make
              it easier to write typesafe interfaces between your Redux store
              and your React components. As of React Redux v7.2.3, the
              react-redux package has a dependency on @types/react-redux, so the
              type definitions will be automatically installed with the library.
              Otherwise, you'll need to manually install them yourself
              (typically npm install @types/react-redux ). The Redux+TS template
              for Create-React-App comes with a working example of these
              patterns already configured.
            </p>
            <h1>Project Setup</h1>
            <h2>Define Root State and Dispatch Types</h2>
            <p>
              Using configureStore should not need any additional typings. You
              will, however, want to extract the RootState type and the Dispatch
              type so that they can be referenced as needed. Inferring these
              types from the store itself means that they correctly update as
              you add more state slices or modify middleware settings. Since
              those are types, it's safe to export them directly from your store
              setup file such as app/store.ts and import them directly into
              other files.
            </p>
            <div className="code">
              <img src={Code2} alt="" />
            </div>
            <h2>Define Typed Hooks</h2>
            <p>
              While it's possible to import the RootState and AppDispatch types
              into each component, it's better to create typed versions of the
              useDispatch and useSelector hooks for usage in your application.
              This is important for a couple reasons: For useSelector, it saves
              you the need to type (state: RootState) every time For
              useDispatch, the default Dispatch type does not know about thunks.
              In order to correctly dispatch thunks, you need to use the
              specific customized AppDispatch type from the store that includes
              the thunk middleware types, and use that with useDispatch. Adding
              a pre-typed useDispatch hook keeps you from forgetting to import
              AppDispatch where it's needed. Since these are actual variables,
              not types, it's important to define them in a separate file such
              as app/hooks.ts, not the store setup file. This allows you to
              import them into any component file that needs to use the hooks,
              and avoids potential circular import dependency issues.
            </p>
            <div className="code">
              <img src={Code3} alt="" />
            </div>
          </div>
          <div className="docRtkQuery">
            <h1>Introduction</h1>
            <p>
              Welcome to the Redux Toolkit Query tutorial! This tutorial will
              briefly introduce you to Redux Toolkit's "RTK Query" data fetching
              capability and teach you how to start using it correctly.
            </p>
            <p>
              RTK Query is an advanced data fetching and caching tool, designed
              to simplify common cases for loading data in a web application.
              RTK Query itself is built on top of the Redux Toolkit core, and
              leverages RTK's APIs like createSlice and createAsyncThunk to
              implement its capabilities. RTK Query is included in the
              @reduxjs/toolkit package as an additional addon. You are not
              required to use the RTK Query APIs when you use Redux Toolkit, but
              we think many users will benefit from RTK Query's data fetching
              and caching in their apps.
            </p>
            <h2>How to Read This Tutorial</h2>
            <p>
              For this tutorial, we assume that you're using Redux Toolkit with
              React, but you can also use it with other UI layers as well. The
              examples are based on a typical Create-React-App folder structure
              where all the application code is in a src, but the patterns can
              be adapted to whatever project or folder setup you're using.
            </p>
            <h1>Setting up your store and API service</h1>
            <p>
              To see how RTK Query works, let's walk through a basic usage
              example. For this example, we'll assume you're using React and
              want to make use of RTK Query's auto-generated React hooks.
            </p>
            <h2>Create an API service</h2>
            <p>
              First, we'll create a service definition that queries the publicly
              available PokeAPI.
            </p>
            <p>
              With RTK Query, you usually define your entire API definition in
              one place. This is most likely different from what you see with
              other libraries such as swr or react-query, and there are several
              reasons for that. Our perspective is that it's much easier to keep
              track of how requests, cache invalidation, and general app
              configuration behave when they're all in one central location in
              comparison to having X number of custom hooks in different files
              throughout your application.
            </p>
          </div>
          <Recht />
        </div>
      </div>
    </div>
  );
}

export default Documentation;

function Recht() {
  return <div className="recht"></div>;
}
