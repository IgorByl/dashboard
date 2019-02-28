import { combineReducers } from 'redux';
import mentorStudentsData from './mentorStudentsData';
import targetMentorStudents from './targetMentor';

const rootreduser = combineReducers({
  mentorStudentsData,
  targetMentorStudents,
});

export default rootreduser;
