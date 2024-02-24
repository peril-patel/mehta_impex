import { useState } from 'react';
import logo from '../Media/logo.png';
import './Home.css'

function Home() {






  const [selectedcode, setselectedcode] = useState('');
  const [selectedMm, setselectedMm] = useState('');
  const [selectedParticulers, setselectedParticulers] = useState('');

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

  const handleCodeChange = (e) => {
    setselectedcode(e.target.value);
    setselectedMm('');
    setselectedParticulers('');
  };

  const handleMmChange = (e) => {
    setselectedMm(e.target.value);
    setselectedParticulers('');
  };

  const handleParticulersChange = (e) => {
    setselectedParticulers(e.target.value);
  };



  const handleAddCode = () => {
    const newCode = prompt('Enter the name of the new data:');
    if (newCode) {
      setitems((previtems) => [
        ...previtems,
        {
          id: previtems.length + 1,
          name: newCode,
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
          <select className="form-select drop_down w-50" value={selectedcode} onChange={handleCodeChange}>
            <option value="">CODE</option>
            {items.map((data) => (
              <option key={data.id} value={data.name}>
                {data.name}
              </option>
            ))}
          </select>
          <div className='add_more' onClick={handleAddCode}>+ ADD MORE ITEM</div>
        </div>

        <div className="mt-3">
          <select className="form-select drop_down" value={selectedMm} onChange={handleMmChange}>
            <option value="">MM</option>
            {items
              .find((data) => data.name === selectedcode)
              ?.cities.map((city) => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
          </select>
        </div>

        <div className="mt-3">
          <select className="form-select drop_down" value={selectedParticulers} onChange={handleParticulersChange}>
            <option value="">PARTICULARS</option>
            {items
              .find((data) => data.name === selectedcode)
              ?.cities.find((city) => city.name === selectedMm)
              ?.pinCodes.map((pincode) => (
                <option key={pincode} value={pincode}>
                  {pincode}
                </option>
              ))}
          </select>
        </div>

      

        {selectedcode && selectedMm && selectedParticulers && (
          <div className="mt-3">
            <p>
              Selected data: {selectedcode}, Selected City: {selectedMm}, Selected Pincode: {selectedParticulers}
            </p>
          </div>
        )}
      </div>

    </div>
  )
}

export default Home