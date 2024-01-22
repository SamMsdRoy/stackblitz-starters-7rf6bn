import React from 'react';
import Side from "./compo/Side";

export default function Contact(props) {
  const li ="Ram"

  
  return( <>
  <h2>hello</h2>
  {props.io}
  <Side {...props} contact={li}/>
  </>
  
)
}
