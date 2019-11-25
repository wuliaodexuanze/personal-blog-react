import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
import {
  RegisterWrapper
} from './style';

function LoginAndRegister() {

  return (
    <RegisterWrapper>
      <div className="login-page animated fadeInUp">
        <div className="form">
          <form className="register-form">
            <input placeholder="昵称" />
            <input placeholder="邮箱" />
            <input type="password" placeholder="密码" />
            <button>注册</button>
            <p className="message">已有账号? <Link to="/login">立即登录</Link></p>
          </form>
        </div>
      </div>
    </RegisterWrapper>
  )
}

export default LoginAndRegister;