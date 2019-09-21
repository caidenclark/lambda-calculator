import React from "react";

const OperatorButton = () => {
  return (
    <button className='operator_button' onClick = {() =>
      props.setOperatorState(props.opButtonData.opState)
    }>
    {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
    );
  };

  export default OperatorButton;
