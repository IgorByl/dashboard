import axios from 'axios';
import * as constants from '../../constants';

export const getDataSucces = data => ({
  type: constants.GET_DATA,
  payload: data,
});

export const setData = () => (dispatch) => {
  axios.get(constants.URL)
    .then(response => dispatch(getDataSucces(response.data)))
    .catch((err) => {
      console.log(err);
    });
};

export const transferTargetMentor = targetMentor => ({
  type: constants.GET_MENTOR_STUDENTS,
  payload: targetMentor,
});
