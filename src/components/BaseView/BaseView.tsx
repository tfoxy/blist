import React from 'react';
import { Props } from './types';
import BaseHeader from '../BaseHeader';
// import styles from './BaseView.module.css';

export default function BaseView({ children }: Props) {
  return (
    <div>
      <BaseHeader />
      <div>{children}</div>
    </div>
  );
}
