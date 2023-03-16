import { useState, useEffect } from "react";

const DataCardActiveState = (props) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setActive(old => (old + 1) % 3);
    }, 2500);
  }, []);

  const normalStyle = {
    borderRadius: ".75rem",
    transition: "all 1.2s",
    width: "max-content"
  }

  const activeStyle = {
    ...normalStyle,
    backgroundColor: "#FFFFFF",
    boxShadow: "0px .75rem 6.5rem rgba(28, 25, 25, 0.2)",
  }

  return (
    <>
      <div style={active === 0 ? activeStyle : normalStyle}>{ props["0"] }</div>
      <div style={active === 1 ? activeStyle : normalStyle}>{ props["1"] }</div>
      <div style={active === 2 ? activeStyle : normalStyle}>{ props["2"] }</div>
    </>
  )
}

export default DataCardActiveState;