import React from 'react';

const styleDefault = {
  backgroundColor: 'black',
  color: 'black'
};

const ButtonStyleContext = React.createContext({buttonStyle: styleDefault});

export default ButtonStyleContext;

