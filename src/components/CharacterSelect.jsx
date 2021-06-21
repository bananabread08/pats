import React from 'react';
import data from '../helpers/data';

export default function CharacterSelect() {
  //const [charData, setCharData] = useState(data);
  return (
    <div>
      {data.map((char) => {
        return <img alt={char.name} src={char.icon} key={char.name}></img>;
      })}
    </div>
  );
}
