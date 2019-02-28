import * as constants from '../../constants';

export default function mentorStudentsData(state = [], action) {
  switch (action.type) {
    case constants.GET_DATA:
      return action.payload;
    default:
      return state;
  }
}
