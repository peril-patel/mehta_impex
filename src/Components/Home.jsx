import { useState } from 'react';
import logo from '../Media/logo.png';
import './Home.css'

function Home() {






  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedPincode, setSelectedPincode] = useState('');

  const countries = [
    {
      id: 1,
      name: 'UCLE',
      cities: [
        { name: 'New York', pinCodes: ['10001', '10002', '10003'] },
        { name: 'Los Angeles', pinCodes: ['90001', '90002', '90003'] },
        { name: 'Chicago', pinCodes: ['60601', '60602', '60603'] },
      ],
    },
    {
      id: 2,
      name: 'Mii',
      cities: [
        { name: 'Toronto', pinCodes: ['M1B', 'M2H', 'M3C'] },
        { name: 'Vancouver', pinCodes: ['V5K', 'V6B', 'V7C'] },
        { name: 'Montreal', pinCodes: ['H1A', 'H2B', 'H3C'] },
      ],
    },
    {
      id: 3,
      name: 'UK',
      cities: [
        { name: 'London', pinCodes: ['SW1A', 'WC1A', 'EC1A'] },
        { name: 'Manchester', pinCodes: ['M1', 'M2', 'M3'] },
        { name: 'Birmingham', pinCodes: ['B1', 'B2', 'B3'] },
      ],
    },
  ];

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
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

  return (
    <div className="container text-center">
      <img style={{ width: '80%', textAlign: 'center' }} src={logo}></img>


      <input type="email" className="form-control input_tag mt-3" id="exampleFormControlInput1" placeholder="CLIENT NAME" />


      <div className='mt-3'>
        <div className='d-flex mt-3 justify-content-between align-items-center'>
          <select className="form-select drop_down w-50" value={selectedCountry} onChange={handleCountryChange}>
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country.id} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
          <div className='add_more'>+ ADD MORE ITEM</div>
        </div>

        <div className="mt-3">
          <select className="form-select drop_down" value={selectedCity} onChange={handleCityChange}>
            <option value="">Select City</option>
            {countries
              .find((country) => country.name === selectedCountry)
              ?.cities.map((city) => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
          </select>
        </div>

        <div className="mt-3">
          <select className="form-select drop_down" value={selectedPincode} onChange={handlePincodeChange}>
            <option value="">Select Pincode</option>
            {countries
              .find((country) => country.name === selectedCountry)
              ?.cities.find((city) => city.name === selectedCity)
              ?.pinCodes.map((pincode) => (
                <option key={pincode} value={pincode}>
                  {pincode}
                </option>
              ))}
          </select>
        </div>

        {selectedCountry && selectedCity && selectedPincode && (
          <div className="mt-3">
            <p>
              Selected Country: {selectedCountry}, Selected City: {selectedCity}, Selected Pincode: {selectedPincode}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home