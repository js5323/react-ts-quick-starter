import React from 'react';
import './app.less';

interface IProps {
  name: string;
  age: number;
  sex: string;
}

function App(props: IProps) {
  const { name, age, sex } = props;
  return (
    <div className='app'>
      <span>{`Hello! I'm ${name}, ${age} years old, sex ${sex}.`}</span>
    </div>
  );
}

export default App;
