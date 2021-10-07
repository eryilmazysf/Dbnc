import React, { useState } from "react";
import "./styles.css";

export default function App() {

// ----------> first question start<----------
  const rooms = [
    { room_type: "Queen", vacant_rooms: 5, price: 100 },
    { room_type: "Double", vacant_rooms: 3, price: 75 },
    { room_type: "Twin", vacant_rooms: 8, price: 60 }
  ];
// ----------> first question end<----------

// ----------> second question start<----------
  const [number, setNumber] = useState();
  const [variable, setVariable] = useState("");

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleTest = () => {
    if(!isNaN(number)){
     if (number % 14 === 0) {
      setVariable("foobar");
    } else if (number % 7 === 0) {
      setVariable("bar");
    } else if (number % 2 === 0) {
      setVariable("foo");
    } else {
      setVariable(number);
    }}
    else{
      setVariable("please enter a number")
    }
    setNumber("");
  };
// ----------> first question end<----------
  return (
    <div className="App">
      <p>First Question</p>
      <ol>
        {rooms.map((item, index) => (
          <li key={index}>
            {item.room_type} , {item.vacant_rooms} , ${item.price}
          </li>
        ))}
      </ol>
      <br />
      <p>Second Question</p>
      <input
        type="text"
        placeholder="enter a number..."
        value={number || ""}
        onChange={handleChange}
      />
      <button onClick={handleTest}>Test</button>
      <p>{variable}</p>
    </div>
  );
}
