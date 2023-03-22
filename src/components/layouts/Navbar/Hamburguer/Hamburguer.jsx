import React, { useState } from 'react'
import './Hamburguer.scss';

const Hamburguer = (props) => {
  const [active, setActive] = useState(false);

  return (
    <div className="hamburguer">
      <input id="navham" onChange={() => setActive(old => !old)} type="checkbox" />
      <label htmlFor="navham" className={active ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></label>
      <div className="navbar-positioner">
        { props.links }
      </div>
    </div>
  )
}

export default Hamburguer