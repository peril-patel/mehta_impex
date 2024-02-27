import { useState } from 'react';
import logo from '../Media/logo.png';
import './Home.css'

function Home() {

  const [qty, setqty] = useState(0);

  const [loading, setloading] = useState('')
  const handleloadingchange = (e) => {
    setloading(e.target.value);
  };

  const handleloadingsubmit = (e) => {
    e.preventDefault();
    console.log('Selected gender:', loading);
  };





  const [selectedcode, setselectedcode] = useState('');
  const [selectedMm, setselectedMm] = useState('');
  const [selectedParticulers, setselectedParticulers] = useState('');

  const [items, setitems] = useState([
    {
      id: 1,
      name: 'UCLE',
      mm: [
        { name: '4', Particulers: ['WHITE BACK PAINTED GLASS', 'BLACK BACK PAINTED GLASS'] },
        { name: '4', Particulers: ['WHITE BACK PAINTED GLASS', 'BLACK BACK PAINTED GLASS'] },

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
          mm: [],
        },
      ]);
    }
  };

  return (
    <div className="container text-center">
      <img style={{ width: '80%', textAlign: 'center' }} src={logo}></img>
      <div className='mt-3'>COST ESTIMATION</div>


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
              ?.mm.map((city) => (
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
              ?.mm.find((city) => city.name === selectedMm)
              ?.Particulers.map((pincode) => (
                <option key={pincode} value={pincode}>
                  {pincode}
                </option>
              ))}
          </select>
        </div>


        <div className='d-flex mt-3'>
          <select className="form-select drop_down">
            <option value="">WIDTH</option>
            <option >
              tyj
            </option>

          </select>
          <select className="form-select drop_down mx-1" >
            <option value="">LENGTH</option>

            <option >
              ukukuku
            </option>

          </select>
        </div>

        <div className='qty_div mt-3 d-flex justify-content-between align-items-center px-3'>
          <div>QTY</div>
          <div className='d-flex justify-content-between align-items-center '>
            <i className="fa-solid fa-minus" onClick={() => {
              if (qty < 1) {
                setqty(0)
              }
              else {
                setqty(qty - 1)
              }

            }}></i>
            <div style={{ fontSize: '15px', margin: '0px 10px' }}>{qty}</div>
            <i className="fa-solid fa-plus" onClick={() => {
              setqty(qty + 1)
            }}></i>
          </div>
        </div>

        <div className='mt-3 d-flex justify-content-between align-items-center'>
          <div className='qty_div px-3 w-50'>
            SQMM
          </div >
          <div className='qty_div px-3 w-50 mx-1' >WEIGHT</div>
        </div>


        <div className='qty_div mt-3 d-flex justify-content-between align-items-center px-3'>
          <div>RATE</div>
          <div className='d-flex justify-content-between align-items-center '>
            ₹50
          </div>
        </div>

        <div className='qty_div mt-3 d-flex justify-content-between align-items-center px-3'>
          <div>AMOUNT</div>
          <div className='d-flex justify-content-between align-items-center '>
            ₹50,000
          </div>
        </div>

        <button className='btn add_quatation_btn mt-3'>ADD TO QUOTATION</button>

        <div className='mt-3' style={{ overflow: 'scroll' }}>
          <table className="table sd">
            <thead>
              <tr>
                <th scope="col">SR NO</th>
                <th scope="col">CODE</th>
                <th scope="col">MM</th>
                <th scope="col">PARTICULERS</th>
                <th scope="col">LENGTH</th>
                <th scope="col">WIDTH</th>
                <th scope="col">SQMM</th>
                <th scope="col">QTY</th>
                <th scope="col">WEIGHT</th>
                <th scope="col">RATE</th>
                <th scope="col">AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>UCLE</td>
                <td>5</td>
                <td>WHITE PRINTED GLASS</td>
                <td>2440</td>
                <td>1830</td>
                <td>2352</td>
                <td>1</td>
                <td>5321.00</td>
                <td>₹2352.00</td>
                <td>₹5321.00</td>
              </tr>
            </tbody>

            {/* total table */}
            <tbody>
              <tr>
                <td>TOTAL</td>
                <td></td>
                <td></td>
                <td></td>
                <td>2440</td>
                <td>1830</td>
                <td>2352</td>
                <td>1</td>
                <td>5321.00</td>
                <td>₹2352.00</td>
                <td>₹5321.00</td>
              </tr>
            </tbody>
            {/* total table */}
          </table>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <div>

            <div className='d-flex mt-2'>
              <div className='me-2 add_more'>LOADING</div>
              <form onSubmit={handleloadingsubmit}>
                <div className="form-check" style={{ textAlign: 'left' }}>
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                    value="includes"
                    checked={loading === 'includes'}
                    onChange={handleloadingchange}
                  />
                  <label className="form-check-label add_more">
                    INCLUDES
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                    value="notinclude"
                    checked={loading === 'notinclude'}
                    onChange={handleloadingchange} />
                  <label className="form-check-label add_more">
                    NOT INCLUDED
                  </label>
                </div>
              </form>
            </div>

            <div className='d-flex mt-2'>
              <div className='me-2 add_more'>DELIVERY</div>
              <div>
                <div className="form-check" style={{ textAlign: 'left' }}>
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                  <label className="form-check-label add_more " >
                    FREE
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                  <label className="form-check-label add_more">
                    PAID
                  </label>
                </div>
              </div>
            </div>

            <div className='d-flex mt-2'>
              <div className='me-2 add_more'>UNLOADING</div>
              <div>
                <div className="form-check" style={{ textAlign: 'left' }}>
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label className="form-check-label add_more " for="flexRadioDefault1">
                    YES
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                  <label className="form-check-label add_more" for="flexRadioDefault2">
                    NO
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className='btn add_quatation_btn mt-3'>GENERATE</button>
          </div>
        </div>



        {/* {selectedcode && selectedMm && selectedParticulers && (
          <div className="mt-3">
            <p>
              Selected data: {selectedcode}, Selected City: {selectedMm}, Selected Pincode: {selectedParticulers}
            </p>
          </div>
        )} */}
      </div>
    </div>
  )
}

export default Home