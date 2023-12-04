import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // Use the useState hook to manage the state


// This line of code is using the useState hook, which is a React hook that allows 
// functional components to have state. The useState hook returns an array with two elements:

// The first element (isActive in this case) is the current state value.
// The second element (setIsActive in this case) is a function that allows you to update the state.


// useState(false): This is a call to the useState hook. The argument false is the initial state value for isActive.
// So, after this line, isActive will hold the current state value (initially set to false), and setIsActive is a 
// function that you can use to update the state. When you call setIsActive(newValue), 
// it not only updates the state to newValue but also triggers a re-render of the component with the 
// updated state value. This re-rendering is what provides the reactive behavior in your React component.

  const [isActive, setIsActive] = useState(false);

  // Use the set function to update the state in handleClick
  setIsActive: This is the function provided by the useState hook to update the state variable (isActive).

// (prevIsActive) => !prevIsActive: This is an arrow function (callback) that takes the previous state (prevIsActive) 
// as its argument and returns the new state value. It uses the logical NOT (!) operator to toggle the value of prevIsActive. 
// If prevIsActive is true, !prevIsActive will be false, and vice versa.

// This pattern of using the previous state in the update function is important in React 
// because state updates can be asynchronous, and using the previous state ensures that you 
// are updating based on the most recent state.

// So, when the handleClick function is called (presumably in response to a button click), 
// it toggles the value of isActive using the setIsActive function, and React will then re-render 
// the component with the updated state. This is a common pattern for updating state in React components.


  function handleClick() {
    setIsActive((prevIsActive) => !prevIsActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>Activate</button>
    </main>
  );
}
