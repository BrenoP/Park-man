import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { ChangeSectors, Icon, SectorTitle, styleIcon } from './Sectors.styles';
import Slider from 'infinite-react-carousel';

const CreateArrow = (element) => <Icon>{ element }</Icon>;

const sectors = [
  { sector: 'Setor 1' },
  { sector: 'Setor 2' },
  { sector: 'Setor 3' },
  { sector: 'Setor 4' },
  { sector: 'Setor 5' },
  { sector: 'Setor 6' }, 
];

export default function Sectors() {

  return (
    <ChangeSectors>
      <Slider 
        dots
        prevArrow={CreateArrow(<ArrowBackIosIcon style={ styleIcon } />)}
        nextArrow={CreateArrow(<ArrowForwardIosIcon style={ styleIcon } />)}
      >
        { sectors.map(sector => <SectorTitle key={sector.sector}>{ sector.sector }</SectorTitle>) }
      </Slider>
    </ChangeSectors>
  );
}