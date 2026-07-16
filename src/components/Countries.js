import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Country from './Country';

const Countries = ({countries,onRemoveCountry}) => {
  return (
    <div>
      <section>
      {countries.map((country) =>{
        const newCountries = {country , id: uuidv4()}
        return <Country {...newCountries} key={newCountries.id} onRemoveCountry={onRemoveCountry}/>
      })}
      </section>
    </div>
  )
}

export default Countries
