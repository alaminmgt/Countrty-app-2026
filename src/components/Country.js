import React from 'react'

const Country = ({country,onRemoveCountry}) => {
    const {name,flag,capital,population,area} = country;

    const handleRemove = (name) => {
      onRemoveCountry(name);
    }
  return (
    <article>
      <div>
        <img src={flag} alt={name}  />
        <h3>Name : {name}</h3>
        <h3>Capital : {capital}</h3>
        <button onClick={()=>{
          handleRemove(name)
        }}>Remove Country</button>
      </div>
    </article>
  )
}

export default Country
