import * as React from "react";

class LoginedPage extends React.Component<any, any> {
  public render() {
    const currentLocation = location.href;
    const urlParser = new URL(currentLocation);

    const token = urlParser["search"].split("?")[1];
    console.log(token);
    // 코드요청 토근발급
    fetch(`http://api.jpraises.com/connect/oauth/token?${token}`)
      .then(response => {
        console.log("response", response);
        // 왜 한번 다시 resolve를 해야되지?
        response.json().then(data => {
          console.log(data);
        });
      })
      .catch(err => {
        console.log(err);
      });

    return (
      <div className="logined page">
        <h3 className="login-title">로그인 되셨습니다.</h3>
      </div>
    );
  }
}

export default LoginedPage;
