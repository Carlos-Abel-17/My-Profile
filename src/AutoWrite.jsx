import React, { useState, useEffect } from 'react';

const TypingComponent = () => {
  const [text, setText] = useState('');
  const words = ['developer', 'developer full stack'];

  useEffect(() => {
    const typeWords = async () => {
      while (true) {
        for (let word of words) {
          //! Escribir la palabra letra por letra
          for (let i = 0; i <= word.length; i++) {
            setText(word.substring(0, i));
            await new Promise(resolve => setTimeout(resolve, 200)); //?Esperar 200ms antes de escribir la siguiente letra
          }
          //! Mantener la palabra durante 3 segundos
          await new Promise(resolve => setTimeout(resolve, 3000));
          //! Borrar la palabra letra por letra
          for (let i = word.length; i >= 0; i--) {
            setText(word.substring(0, i));
            await new Promise(resolve => setTimeout(resolve, 200)); //? Esperar 200ms antes de borrar la siguiente letra
          }
        }
      }
    };
    typeWords();
  }, []);

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default TypingComponent;
