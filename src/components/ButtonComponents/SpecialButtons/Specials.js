import React from "react";
import {specials} from "../../../data";

//import any components needed

//Import your array data to from the provided data file
import SpecialButton from "./SpecialButton";

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = useState(specials);
       /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/

       const specButtons = specials.map(specButtonDataObject => (
       <SpecialButton specButtonData={specButtonDataObject} setSpecialState={setSpecialState} />
       ));

       console.log(Specials);

       return (
         <div className="special">{specButtons}</div>
       )
  };

  export default Specials;