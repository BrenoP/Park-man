import React, { useEffect } from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { ChangeSectors, Icon, SectorTitle, styleIcon } from './Sectors.styles';
import Slider from 'infinite-react-carousel';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as vacanciesActions from '../../../store/actions/getVacancies';

const CreateArrow = (element) => <Icon>{ element }</Icon>;

const sectors = [
  { sector: 'Setor 1' },
  { sector: 'Setor 2' },
  { sector: 'Setor 3' },
  { sector: 'Setor 4' },
  { sector: 'Setor 5' },
  { sector: 'Setor 6' }, 
];

function Sectors(props) {

  // useEffect(() => {
  //   debugger
  //   // props.getVacancies()
  //   props.dispatch(getVacancies());
  // })

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

const mapDispatchToProps = dispatch =>
  bindActionCreators(vacanciesActions, dispatch);

export default connect(null, mapDispatchToProps)(Sectors);