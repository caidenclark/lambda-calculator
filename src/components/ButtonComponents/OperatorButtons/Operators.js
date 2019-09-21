import React from "react";
import {operators} from "../../../data";

//import any components needed

//Import your array data to from the provided data file
import OperatorButton from "./OperatorButton";


const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [opState, setOperatorState] = useState(operators);
       /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/

       const opButtons = operators.map(opButtonDataObject => (
       <OperatorButton opButtonData={opButtonDataObject} setOperatorState={setOperatorState} />
       ));

       console.log(Operators);

       return (
         <div className="operator">{opButtons}</div>
       )
  };

  export default Operators;