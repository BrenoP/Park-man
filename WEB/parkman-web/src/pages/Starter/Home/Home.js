import React, { useEffect } from 'react'
import { ContainerTitle, Title } from './Home.styles';
import Sectors from '../Sectors/Sectors';
import Vacancies from '../Vacancies/Vacancies';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as vacanciesActions from '../../../store/actions/getVacancies';

function Home(props) {

  useEffect(() => {
    debugger
  })

  return (
    <>
      <ContainerTitle>
        <Title>
          Parkman
          <p>A melhor forma de garantir a sua vaga</p>
        </Title>
        <span>Bem vindo Breno!</span>
      </ContainerTitle>
      <Sectors />
      <Vacancies />
    </>
  );
}

const mapStateToProps = state => ({
  vacancies: state.vacancies,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(vacanciesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);