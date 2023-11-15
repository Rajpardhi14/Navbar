import React, { useState } from 'react';
import "./Pass.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Pass = () => {
  const [toggle, setToggle] = useState(false);
  const [inpts, setInpts] = useState('');

  const isInputEmpty = inpts.trim() === '';

  return (
    <>
      <div className="inputs">
        <div className="box">
          <label htmlFor="Show PassWord" style={{ textTransform: "uppercase" }}>PassWord: </label>
          <input type={toggle ? "text" : "password"} onChange={(e) => setInpts(e.target.value)} />
          <button onClick={() => setToggle(!toggle)} disabled={isInputEmpty}>
            {toggle ? <VisibilityIcon className='icn'/> : <VisibilityOffIcon className='icn' />}
          </button>
        </div>
      </div>
    </>
  )
}

export default Pass;
