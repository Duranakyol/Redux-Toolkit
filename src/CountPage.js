import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, changeCount } from "./redux/count";
import MyNavbar from "./Navbar";

function CountPage() {
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div class="countPage">
      <MyNavbar />
      <h1>
        Count: <strong>{count}</strong>
      </h1>
      <div>
        <button className="myButton dec" onClick={handleDecrement}>
          Decrement
        </button>
        <button className="myButton inc" onClick={handleIncrement}>
          Increment
        </button>
      </div>

      <br />
      <br />

      <input
        type="number"
        value={count}
        onChange={(e) => {
          dispatch(changeCount(e.target.value));
        }}
      />
    </div>
  );
}

export default CountPage;
