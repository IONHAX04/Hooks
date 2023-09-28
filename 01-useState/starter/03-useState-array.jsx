import React, { useState } from 'react';
import {data} from '../../../data.js';


const UseStateArray = () => {
  console.log(data);
  const [people, setPeople] = useState(data);


  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <div>
      {people.map((person) => {
        console.log(person);
        const { id, name } = person;
        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove Name</button>
          </div>
        );
      })}
      <button className='btn' onClick={() => setPeople([])}>Remove All</button>
      </div>
  );
};

export default UseStateArray;
