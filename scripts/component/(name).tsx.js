module.exports = ({ name }) => `\
import React from 'react';
// import { Props } from './types';
// import styles from './${name}.module.css';

export default function ${name}() {
  return (
    <div>
      ${name}
    </div>
  );
}
`;
