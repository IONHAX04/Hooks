import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 25,
    hobby: 'Read Books',
  });

  const displayPerson = () => {
    setPerson({ name: 'Marry', age: 29, hobby: 'Scream at the computer' });
    console.log(person.name);
    // setPerson({name: 'Marry'});
    // setPerson({...person, name: 'Marry'})
  }



  return (
    <>
      <h3>{person.name}</h3>
      <h4>{person.age}</h4>
      <h4>Enjoys to :{person.hobby}</h4>
      <button className='btn' onClick={displayPerson}>Show John</button>
    </>
  );
};

export default UseStateObject;
