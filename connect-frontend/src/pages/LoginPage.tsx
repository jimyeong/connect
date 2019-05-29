import * as React from "react";
import { LoginSectionContainer, Btn } from "../components";

class LoginPage extends React.Component<any, any> {
  public provider = "google";
  public url = "http://localhost:8080/f8fs7owfeoopkr3q22dsxxrsdf";
  onGoogleLogin = () => {
    window.location.href = `//api.jpraises.com/connect/login/${this.provider}?redirect=${this.url}`;
  };

  public render() {
    return (
      <div className="login page">
        <LoginSectionContainer className="sns-login" title="로그인해 주세요">
          <div className="login-box">
            <h3 className="login-guide">Sign in with</h3>
            <div className="btn-wrap">
              <Btn onClick={this.onGoogleLogin} btnName="Google" className="btn-google" />
              <Btn btnName="Naver" className="btn-naver" />
              <Btn btnName="Kakao" className="btn-kakao" />
            </div>
          </div>
        </LoginSectionContainer>
      </div>
    );
  }
}

export default LoginPage;
