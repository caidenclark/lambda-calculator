import React from "react";

const SpecialButton = () => {
  return (
    <button className='special_button' onClick = {() =>
      props.setSpecialState(props.specButtonData.specialState)
    }>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default SpecialButton;