import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { ChangeSectors } from './Sectors.styles';

export default function Sectors() {
  return (
    <ChangeSectors>
      <ArrowBackIosIcon />
      <h3>Setor 3</h3>
      <ArrowForwardIosIcon />
    </ChangeSectors>
  );
}