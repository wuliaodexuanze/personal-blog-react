import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
import {
  RegisterWrapper
} from './style';

function Register() {

  return (
    <RegisterWrapper>
      <div className="login-page animated fadeInUp">
        <div className="form">
          <form className="register-form">
            <input type="text" placeholder="昵称" autoComplete="off" required />
            <input type="email" placeholder="邮箱" autoComplete="off" required />
            <input type="password" placeholder="密码" autoComplete="off" required />
            <button>注册</button>
            <p className="message">已有账号? <Link to="/login">立即登录</Link></p>
          </form>
        </div>
      </div>
    </RegisterWrapper>
  )
}

export default Register;