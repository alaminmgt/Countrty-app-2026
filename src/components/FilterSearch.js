import React,{useState,useEffect} from 'react'

const FilterSearch = ({onFinterSeacrh}) => {
    const [selectedValue, setSelectedValue] = useState();

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
          
    }
    useEffect(() => {
      onFinterSeacrh(selectedValue);
    }, [selectedValue]);

  return (
    <div className='filterSearch'>
      <select value={selectedValue} onChange={handleChange}>
        <option value="">Select by</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
      <button className='refresh-btn' onClick={()=>window.location.reload()}>Refresh</button>
    </div>
  )
}

export default FilterSearch
