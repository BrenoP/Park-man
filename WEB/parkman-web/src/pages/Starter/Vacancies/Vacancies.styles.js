import styled from 'styled-components';

export const GridVacancies = styled.div`
   display: grid;
   grid-template-columns: repeat(5, 1fr);
`

export const Vacancy = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   border: 1px dotted #D6E447;
   width: 70%;
   height: 18rem;
   margin: 2rem auto;
   transition: all .2s;

   &:hover {
      width: 73%;
      height: 18.5rem;
      border: 2px solid #002EF1;
      cursor: pointer;
   }

   span {
      font-size: 2rem;
      font-style: italic;
      opacity: .8;
   }
` 