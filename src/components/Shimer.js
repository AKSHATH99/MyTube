import React from 'react'

const Shimer = () => {
  return (
    <div className="flex flex-wrap">
    {new Array(48).fill(0).map((element, index) => {
      return <Shimercard key={index} />;
    })}
  </div>
  )
}
const Shimercard = () => {
  return (
    <div className="w-96 h-72 m-8  bg-slate-300 rounded-lg">
      
    </div>
  )
}

export default Shimer
