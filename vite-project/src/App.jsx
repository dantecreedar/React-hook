/* import { useState } from "react";

function Likes() {
  
  const [likes, setLikes] = useState(0)

  return <button onClick={()=>{
    setLikes(likes+1);
  }}> {likes} Likes </button>
}
 */

import Class from "./HookClass";
import Hook from "./hook";

export default function App() {

  return(
    <>
     {/*  <Likes likes={12} /> */}
     <Hook/>
    <Class/>
    </>
  )
}