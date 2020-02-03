import React from "react";
import Styles from 'styled-components';
import { Text, Error, StyledInput } from './Styles';
const background = {
  color:'teal',
  border:'thin solid black'
  
    
  }
  
export default function CharacterCard (props) {
 

  return <span style={background}>{props.sprinty.name}</span>;
}

