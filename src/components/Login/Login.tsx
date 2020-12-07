import Button from "components/common/Button";
import CheckBox from "components/common/CheckBox";
import React from "react";
import "./Login.scss";

interface LoginProps {
  check: boolean;
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleLogin: () => Promise<void>;
}

const Login = ({ check, setCheck, id, setId, password, setPassword, handleLogin }: LoginProps) => {
  return (
    <>
      <div className="Login">
        <div className="Login-text">
          <span className="Login-text-Welcome">Welcome</span>
          <span className="Login-text-content">아아디 비번 똑띠 적어라^^</span>
        </div>
        <div className="Login-box">
          <div className="Login-box-text">로그인</div>
          <div className="Login-box-form">
            <input
              type="text"
              placeholder="이메일"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <CheckBox id="save_id" content={"아이디 저장"} value={check} setValue={setCheck} />
          </div>
          <div className="Login-box-button">
            <Button content="로그인" onClick={() => handleLogin()}></Button>
            <span> 아이디 혹은 비밀번호를 잊으셨나요? </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
