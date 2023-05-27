import React from 'react';
import { useState } from 'react';
import { Link,  } from 'react-router-dom';

const BaseForm = () => {
  const [isclicked, setIsclicked] = useState(true);

  const handleClick = (event) => {
    event.preventDefault();
    setIsclicked(false);
  };

  const display = (
    <div className="display-message text-center">
      <div className="py-2">DO YOU HAVE AN ACCOUNT ALREADY?</div>
      <div className="text-center">IF NO, THEN SIGN ON HERE</div>
      <div className="text-center py-5">
        {' '}
        
          <button
            className="border-2 border-cyan-500/75 bg-sky-500/50 rounded-lg px-8 py-2 shadow-md"
            onClick={(e) => handleClick(e)}
          >
           <Link to="/createprofile">SIGN UP</Link>
          </button>
        
      </div>
    </div>
  );
  return (
    <div className="homepage w-full h-full ">{isclicked ? display : ''}</div>
  );
};

export default BaseForm;
