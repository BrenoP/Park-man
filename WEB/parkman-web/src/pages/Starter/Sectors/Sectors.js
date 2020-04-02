import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { ChangeSectors, Icon, SectorTitle, styleIcon } from './Sectors.styles';
import Slider from 'infinite-react-carousel';

export default function Sectors() {

  const [sectors, setsectors] = useState([])

  const CreateArrow = (element) => <Icon>{ element }</Icon>;

  const sector = useSelector(state => state.vacancies.sectors);

  useEffect(() => {
    if(Object.keys(sector).length > 0) {
      setsectors(sector.onlySectors)
    }
  }, [sector])

  return (
    <ChangeSectors>
      {
        sectors.length < 1 ? (
          <SectorTitle>Carregando setores...</SectorTitle>
        ) : (
          <Slider 
            dots
            prevArrow={CreateArrow(<ArrowBackIosIcon style={ styleIcon } />)}
            nextArrow={CreateArrow(<ArrowForwardIosIcon style={ styleIcon } />)}
          >
            { 
              sectors.map(sector => <SectorTitle key={sector}>Setor: { sector }</SectorTitle>)
            }
          </Slider>
        )
      }
    </ChangeSectors>
  );
}

