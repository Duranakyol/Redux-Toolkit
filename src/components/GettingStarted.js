import React from "react";
import MyNavbar from "../Navbar";
import DocLinks from "./DocLinks";

function GettingStarted() {
  return (
    <div>
      <MyNavbar />
      <div className="gettingStarted">
        <DocLinks />
        <div>
          <h1>Getting Started with Redux Toolkit</h1>
          <h2>Purpose</h2>
          <p>
            The Redux Toolkit package is intended to be the standard way to
            write Redux logic. It was originally created to help address three
            common concerns about Redux: "Configuring a Redux store is too
            complicated" "I have to add a lot of packages to get Redux to do
            anything useful" "Redux requires too much boilerplate code" We can't
            solve every use case, but in the spirit of create-react-app, we can
            try to provide some tools that abstract over the setup process and
            handle the most common use cases, as well as include some useful
            utilities that will let the user simplify their application code.
            Redux Toolkit also includes a powerful data fetching and caching
            capability that we've dubbed "RTK Query". It's included in the
            package as a separate set of entry points. It's optional, but can
            eliminate the need to hand-write data fetching logic yourself. These
            tools should be beneficial to all Redux users. Whether you're a
            brand new Redux user setting up your first project, or an
            experienced user who wants to simplify an existing application,
            Redux Toolkit can help you make your Redux code better.
          </p>
          <h1>Installation</h1>
          <h2>Using Create React App</h2>
          <p>
            The recommended way to start new apps with React and Redux is by
            using the official Redux+JS template or Redux+TS template for Create
            React App, which takes advantage of Redux Toolkit and React Redux's
            integration with React components.
          </p>
          <div className="code">
            # Redux + Plain JS template npx create-react-app my-app --template
            redux # Redux + TypeScript template npx create-react-app my-app
            --template redux-typescript
          </div>
          <h2>An Existing App</h2>
          <p>
            Redux Toolkit is available as a package on NPM for use with a module
            bundler or in a Node application:
          </p>
          <div className="code"># NPM npm install @reduxjs/toolkit</div>
          <p>
            It is also available as a precompiled UMD package that defines a
            window.RTK global variable. The UMD package can be used as a script
            tag directly.
          </p>
          <h1>What's Included</h1>
          <p>
            Redux Toolkit includes these APIs: configureStore(): wraps
            createStore to provide simplified configuration options and good
            defaults. It can automatically combine your slice reducers, adds
            whatever Redux middleware you supply, includes redux-thunk by
            default, and enables use of the Redux DevTools Extension.
            createReducer(): that lets you supply a lookup table of action types
            to case reducer functions, rather than writing switch statements. In
            addition, it automatically uses the immer library to let you write
            simpler immutable updates with normal mutative code, like
            state.todos[3].completed = true. createAction(): generates an action
            creator function for the given action type string. The function
            itself has toString() defined, so that it can be used in place of
            the type constant. createSlice(): accepts an object of reducer
            functions, a slice name, and an initial state value, and
            automatically generates a slice reducer with corresponding action
            creators and action types. createAsyncThunk: accepts an action type
            string and a function that returns a promise, and generates a thunk
            that dispatches pending/fulfilled/rejected action types based on
            that promise createEntityAdapter: generates a set of reusable
            reducers and selectors to manage normalized data in the store The
            createSelector utility from the Reselect library, re-exported for
            ease of use.
          </p>
          <h1>Learn Redux</h1>
          <p>
            We have a variety of resources available to help you learn Redux.
          </p>
          <h2>Redux Essentials Tutorial</h2>
          <p>
            The Redux Essentials tutorial is a "top-down" tutorial that teaches
            "how to use Redux the right way", using our latest recommended APIs
            and best practices. We recommend starting there.
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
      </div>
    </div>
  );
}

export default GettingStarted;
