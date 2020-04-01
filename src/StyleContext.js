import React from 'react';

const styleDefault = {
  backgroundColor: 'red',
  borderWidth: 1,
  borderColor: 'blue',
  borderStyle: 'solid',
  height: 50,
  width: '90%'
};

const setStyle = () => {};

const StyleContext = React.createContext({style: styleDefault, setStyle});

export default StyleContext;
