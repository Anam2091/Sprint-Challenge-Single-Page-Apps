import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard'
import {SearchForm} from "./SearchForm";

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

  return (
    
    <section className="character-list">
      <SearchForm/>````
        {
        data.map(function(sprint){
          return <CharacterCard sprinty={sprint}/>
        })
        }
        

    </section>
  );
}
