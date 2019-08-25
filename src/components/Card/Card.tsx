import React from 'react';
import { Props } from './types';
// import styles from './Card.module.css';

export default function Card({ card }: Props) {
  return <div>Card: {card.name}</div>;
}
