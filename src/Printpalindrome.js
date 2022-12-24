import { useEffect, useState } from "react";
import { CheckPalindrome } from "./utils";

const Printpalindrome = (props) => {
  console.log(props.minRange);

  console.log(props.maxRange);
  const [printList, setPrintList] = useState([]);

  useEffect(()=>{
    let tempArray=[];
    for(let i = props.minRange ;  i<props.maxRange ; i++){
      if(CheckPalindrome(i))
      {
        tempArray.push(i);
      }
    }
    setPrintList(tempArray);
  },[])
  

  return (
    <>
      {printList.map((item) => (
        <p>{item}</p>
      ))}
    </>
  );
};
export default Printpalindrome;
