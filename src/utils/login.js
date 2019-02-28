import user from './user';
import service from '../service';

const checkLogin = () => {
  if (!user.userdata.logined) {
    return service.get('me').then((data) => {
      user.setUserdata(data);
    });
  }
  return Promise.resolve();
};
export default checkLogin;
