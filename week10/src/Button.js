import React from 'react';

function Button({ onClick, text, color }) {
  const buttonStyle = {
    background: color,
    margin: '10px',
    padding: '10px 20px',
    border: '2px solid black',
    borderRadius: '8px',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  };

  return (
    <button onClick={onClick} style={buttonStyle}>
      {text}
    </button>
  );
}

export default Button;
