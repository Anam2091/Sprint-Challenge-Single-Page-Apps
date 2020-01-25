import React from "react";
const background = {
color:'teal',
border:'thin solid black'

  
}

export default function CharacterCard (props) {

  return <span style={background}>{props.sprinty.name}</span>;
}
