import * as constants from '../../constants';


export default function targetMentorStudents(state = {}, action) {
  switch (action.type) {
    case constants.GET_MENTOR_STUDENTS:
      return { ...state, mentorsInfo: action.payload };
    default:
      return state;
  }
}
