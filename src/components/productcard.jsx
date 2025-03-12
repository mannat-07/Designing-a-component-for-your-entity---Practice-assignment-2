// write product card here
import React from 'react'
import Button from './button'

export default function productcard() {
    const img= "https://misobysonia.com/cdn/shop/files/1_1a1e6115-61b4-43bd-a278-d4901dd1aa2a.png?v=1725363740&width=1000";
    const name= "Bracelet";
    const price= 599;

  return (
    <div>
      <div style={{boxShadow:" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", padding: "10px",  textAlign: "center", borderRadius:"10px", width: "300px"}}>
        <img src={img} alt="Bracelet" style={{height:"250px", padding: "10px", width:"250px"}}/>
        <h2>{name}</h2>
        <p>Price: ₹{price}</p>
        <Button/>
      </div>
    </div>
  )
}
