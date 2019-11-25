import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
import {
  LoginWrapper
} from './style';

function Login() {

  return (
    <LoginWrapper>
      <div className="login-page animated fadeInUp">
        <div className="form">
          <form className="login-form">
            <input placeholder="邮箱" />
            <input type="password" placeholder="密码" />
            <button>登录</button>
            <p className="message">还没有账号？<Link to="/register">立即注册</Link></p>
          </form>
        </div>
      </div>
    </LoginWrapper>
  )
}

export default Login;