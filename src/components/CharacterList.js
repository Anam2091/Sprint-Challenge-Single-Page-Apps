import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import {SearchForm} from "./SearchForm";
import {Wrapper} from './Styles';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
    const [data, setdata] = useState([]);
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response)
        setdata(response.data.results);
      })
      
    
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);
  const handleSearchChange = event => {
    console.log(event.target.value)
    const searchdata = data.filter(function(filtering){
      console.log(filtering)
      return filtering.name.includes(event.target.value)

    })
    if(searchdata.length > 0){
      setdata(searchdata);

    }
   
  };
  return (
    
    <section className="character-list">
      
      <label>
          search:
          <input type="text" onChange={event => handleSearchChange(event)} />
        </label>
        
        {
        data.map(function(sprint){
          return <Wrapper><CharacterCard sprinty={sprint}/> </Wrapper>
        })
        }
        

    </section>
  );
}
