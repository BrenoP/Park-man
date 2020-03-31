import { combineReducers } from 'redux';

import sectors from './sectors';
import vacancies from './vacancies';

export default combineReducers({
   sectors,
   vacancies
});