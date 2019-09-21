import React from "react";

const NumberButton = () => {
  return (
    <button className='number_button' onClick = {() =>
      props.setNumberState(props.numButtonData.numberState)
    }>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default NumberButton;