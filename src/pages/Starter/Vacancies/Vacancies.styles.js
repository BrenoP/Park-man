import styled from 'styled-components';

export const GridVacancies = styled.div`
   display: grid;
   grid-template-columns: repeat(5, 1fr);
`

export const Vacancy = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   border: ${props => props.isOccuped ? `1px solid #002EF1` : `1px dotted #D6E447`};
   width: 70%;
   height: 18rem;
   margin: 2rem auto;
   transition: all .2s;
   opacity: ${props => props.isOccuped ? `.65` : `1`};

   &:hover {
      width: ${props => props.isOccuped ? `70%` : `73%`};
      height: ${props => props.isOccuped ? `18rem` : `18.5rem`};
      border: ${props => props.isOccuped ? `1px solid #002EF1` : `2px solid #002EF1`};
      cursor: pointer;
   }

   span {
      font-size: 2rem;
      font-style: italic;
      opacity: .8;
   }
` 