import React from "react";
import DocLinks from "./DocLinks";

function RtkQuery() {
  return (
    <div>
      <div className="rtkQuery">
        <DocLinks />
        <div>
          <h1>Introduction</h1>
          <p>
            Welcome to the Redux Toolkit Query tutorial! This tutorial will
            briefly introduce you to Redux Toolkit's "RTK Query" data fetching
            capability and teach you how to start using it correctly.
          </p>
          <p>
            RTK Query is an advanced data fetching and caching tool, designed to
            simplify common cases for loading data in a web application. RTK
            Query itself is built on top of the Redux Toolkit core, and
            leverages RTK's APIs like createSlice and createAsyncThunk to
            implement its capabilities. RTK Query is included in the
            @reduxjs/toolkit package as an additional addon. You are not
            required to use the RTK Query APIs when you use Redux Toolkit, but
            we think many users will benefit from RTK Query's data fetching and
            caching in their apps.
          </p>
          <h2>How to Read This Tutorial</h2>
          <p>
            For this tutorial, we assume that you're using Redux Toolkit with
            React, but you can also use it with other UI layers as well. The
            examples are based on a typical Create-React-App folder structure
            where all the application code is in a src, but the patterns can be
            adapted to whatever project or folder setup you're using.
          </p>
          <h1>Setting up your store and API service</h1>
          <p>
            To see how RTK Query works, let's walk through a basic usage
            example. For this example, we'll assume you're using React and want
            to make use of RTK Query's auto-generated React hooks.
          </p>
          <h2>Create an API service</h2>
          <p>
            First, we'll create a service definition that queries the publicly
            available PokeAPI.
          </p>
          <p>
            With RTK Query, you usually define your entire API definition in one
            place. This is most likely different from what you see with other
            libraries such as swr or react-query, and there are several reasons
            for that. Our perspective is that it's much easier to keep track of
            how requests, cache invalidation, and general app configuration
            behave when they're all in one central location in comparison to
            having X number of custom hooks in different files throughout your
            application.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RtkQuery;
