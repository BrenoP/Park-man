import React from 'react';
import { useSelector } from 'react-redux';
import { GridVacancies, Vacancy } from './Vacancies.styles';

export default function Vacancies() {

   const vacancies = useSelector(state => { console.log(state.vacancies.showedVacancies[0]); return state.vacancies.showedVacancies[0] });

   return(
      <GridVacancies>
         {
            (vacancies !== undefined) ? (
               vacancies.map(vacancy => (
                  <Vacancy isOccuped={(vacancy.idOccupant > 0)}>
                     <span>{vacancy.vacancy}</span>
                  </Vacancy>
               ))
            ) : <></>
         }
      </GridVacancies>
   );
}