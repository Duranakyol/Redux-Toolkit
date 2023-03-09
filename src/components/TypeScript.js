import React from "react";
import DocLinks from "./DocLinks";
import Code2 from "../img/code2.png";
import Code3 from "../img/code3.png";

function TypeScript() {
  return (
    <div>
      <div className="typeScript">
        <DocLinks />
        <div>
          <h1>Introduction</h1>
          <p>
            Welcome to the Redux Toolkit TypeScript Quick Start tutorial! This
            tutorial will briefly show how to use TypeScript with Redux Toolkit.
            This page focuses on just how to set up the TypeScript aspects . For
            explanations of what Redux is, how it works, and full examples of
            how to use Redux Toolkit, see the tutorials linked in the "Tutorials
            Overview" page. Redux Toolkit is already written in TypeScript, so
            its TS type definitions are built in. React Redux has its type
            definitions in a separate @types/react-redux typedefs package on
            NPM. In addition to typing the library functions, the types also
            export some helpers to make it easier to write typesafe interfaces
            between your Redux store and your React components. As of React
            Redux v7.2.3, the react-redux package has a dependency on
            @types/react-redux, so the type definitions will be automatically
            installed with the library. Otherwise, you'll need to manually
            install them yourself (typically npm install @types/react-redux ).
            The Redux+TS template for Create-React-App comes with a working
            example of these patterns already configured.
          </p>
          <h1>Project Setup</h1>
          <h2>Define Root State and Dispatch Types</h2>
          <p>
            Using configureStore should not need any additional typings. You
            will, however, want to extract the RootState type and the Dispatch
            type so that they can be referenced as needed. Inferring these types
            from the store itself means that they correctly update as you add
            more state slices or modify middleware settings. Since those are
            types, it's safe to export them directly from your store setup file
            such as app/store.ts and import them directly into other files.
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
            you the need to type (state: RootState) every time For useDispatch,
            the default Dispatch type does not know about thunks. In order to
            correctly dispatch thunks, you need to use the specific customized
            AppDispatch type from the store that includes the thunk middleware
            types, and use that with useDispatch. Adding a pre-typed useDispatch
            hook keeps you from forgetting to import AppDispatch where it's
            needed. Since these are actual variables, not types, it's important
            to define them in a separate file such as app/hooks.ts, not the
            store setup file. This allows you to import them into any component
            file that needs to use the hooks, and avoids potential circular
            import dependency issues.
          </p>
          <div className="code">
            <img src={Code3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TypeScript;
