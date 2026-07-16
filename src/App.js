import React,{useState,useEffect} from 'react'
import Countries from './components/Countries';
import Search from './components/Search';
import FilterSearch from './components/FilterSearch';

const App = () => {
   const url = "https://countriesnow.space/api/v0.1/countries/info?returns=name,capital,flag,population"

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        }
      });
      const alldata = await response.json();
      const data = alldata.data;
      console.log(data);
      setCountries(data);
      setFilteredCountries(data);
      setLoading(false);

    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [])
   
  const handleRemoveCountry = (name) => {
    const filter = filteredCountries.filter((country)=>
      country.name !== name)
      setFilteredCountries(filter);
  }
  const handleSearch = (searchValue) => {
    if (!searchValue) {
    setFilteredCountries(countries);
    return;
  }
    const inputValue = searchValue.toLowerCase();
    const newCountries = countries.filter((country)=>{
      const countryName = country.name.toLowerCase();
      return countryName.startsWith(inputValue);
    });
    setFilteredCountries(newCountries);
  }

  const filterSearch = (selectvalue) => {
    if(!selectvalue) {
    setFilteredCountries(countries);
    return;
  }
    const sorted = [...filteredCountries].sort((a,b)=>{
      if (selectvalue === "A-Z") {
        return a.name.localeCompare(b.name);
      }else if(selectvalue === "Z-A"){
        return b.name.localeCompare(a.name);
      }
      return 0;
    }) 
    setFilteredCountries(sorted);
  }
  return (
    <div>
      <h1>Country app</h1>
      <Search onSearch={handleSearch}/>
      <FilterSearch onFinterSeacrh={filterSearch}/>
      {loading && <p>Loading...</p>}
      {error && <h2>{error.message}</h2>}
      {countries && <Countries countries={filteredCountries} onRemoveCountry={handleRemoveCountry}/>}
    </div>
  )
}

export default App

