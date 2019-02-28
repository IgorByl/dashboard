import React, { PureComponent } from 'react';
import './index.scss';
import service from '../../../service';
import checkLogin from '../../../utils/login';


export default class FormView extends PureComponent {
  onLocalAuth = action => (e) => {
    e.preventDefault();
    const { form } = document.forms;
    const password = form.password.value;
    const username = form.username.value;
    service
      .post(action, { username, password })
      .then(() => checkLogin())
      .then(() => this.props.history.push('/success'))
      .catch(console.log);
  };

  onClickGithubButton = (e) => {
    e.preventDefault();
    location.href = process.env.GITHUB_LOGIN_URL;
  };

  render() {
    return (
      <main className="overlay">
        <form name="form" className="form-wrapper login-panel">
          <header>
            <div className="left logo">
              <p>
                <span>authorization</span> window
              </p>
            </div>
          </header>
          <div className="login-form">
            <div className="subtitle">Login or register</div>
            <input name="username" type="text" placeholder="Username" />
            <input name="password" type="password" placeholder="Password" />
          </div>
          <footer>
            <div className="left social-login">
              Login with
              <a onClick={this.onClickGithubButton}>
                <i className="fa fa-fw fa-github">GitHub</i>
              </a>
            </div>
            <div className="right form-actions">
              <a
                onClick={this.onLocalAuth('login')}
                className="login"
              >
                Login
              </a>
              <a
                onClick={this.onLocalAuth('register')}
                className="register"
              >
                Register
              </a>
            </div>
          </footer>
        </form>
      </main>
    );
  }
}
