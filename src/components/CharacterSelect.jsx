import React from 'react';
import data from '../helpers/data';
import styled from 'styled-components';

const SelectionContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  border: 1px solid black;
`;

const CharImg = styled.img`
  height: 50px;
  width: 50px;
  opacity: 0.7;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export default function CharacterSelect() {
  //const [charData, setCharData] = useState(data);
  return (
    <SelectionContainer>
      {data.map((char) => {
        return (
          <CharImg alt={char.name} src={char.icon} key={char.name}></CharImg>
        );
      })}
    </SelectionContainer>
  );
}
