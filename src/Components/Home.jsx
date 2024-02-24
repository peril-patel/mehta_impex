import { useState } from 'react';
import logo from '../Media/logo.png';
import './Home.css'

function Home() {






  const [selectedcode, setselectedcode] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedPincode, setSelectedPincode] = useState('');

  const [items, setitems] = useState([
    {
      id: 1,
      name: 'UCLE',
      cities: [
        { name: '4', pinCodes: ['WHITE BACK PAINTED GLASS', 'BLACK BACK PAINTED GLASS'] },
        { name: '5', pinCodes: ['WHITE BACK PAINTED GLASS', 'ULTRA CLEAR FLUTELINE',] },
        { name: '6', pinCodes: ['WHITE BACK PAINTED GLASS'] },
        { name: '8', pinCodes: ['CLEAR MORU'] },
      ],
    },
  ]);

  const handleCountryChange = (e) => {
    setselectedcode(e.target.value);
    setSelectedCity('');
    setSelectedPincode('');
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setSelectedPincode('');
  };

  const handlePincodeChange = (e) => {
    setSelectedPincode(e.target.value);
  };



  const handleAddCountry = () => {
    const newCountryName = prompt('Enter the name of the new country:');
    if (newCountryName) {
      setitems((previtems) => [
        ...previtems,
        {
          id: previtems.length + 1,
          name: newCountryName,
          cities: [],
        },
      ]);
    }
  };

  return (
    <div className="container text-center">
      <img style={{ width: '80%', textAlign: 'center' }} src={logo}></img>


      <input type="email" className="form-control input_tag mt-3" id="exampleFormControlInput1" placeholder="CLIENT NAME" />


      <div className='mt-3'>
        <div className='d-flex mt-3 justify-content-between align-items-center'>
          <select className="form-select drop_down w-50" value={selectedcode} onChange={handleCountryChange}>
            <option value="">CODE</option>
            {items.map((country) => (
              <option key={country.id} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
          <div className='add_more' onClick={handleAddCountry}>+ ADD MORE ITEM</div>
        </div>

        <div className="mt-3">
          <select className="form-select drop_down" value={selectedCity} onChange={handleCityChange}>
            <option value="">MM</option>
            {items
              .find((country) => country.name === selectedcode)
              ?.cities.map((city) => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
          </select>
        </div>

        <div className="mt-3">
          <select className="form-select drop_down" value={selectedPincode} onChange={handlePincodeChange}>
            <option value="">PARTICULARS</option>
            {items
              .find((country) => country.name === selectedcode)
              ?.cities.find((city) => city.name === selectedCity)
              ?.pinCodes.map((pincode) => (
                <option key={pincode} value={pincode}>
                  {pincode}
                </option>
              ))}
          </select>
        </div>

      

        {selectedcode && selectedCity && selectedPincode && (
          <div className="mt-3">
            <p>
              Selected Country: {selectedcode}, Selected City: {selectedCity}, Selected Pincode: {selectedPincode}
            </p>
          </div>
        )}
      </div>

    </div>
  )
}

export default Home