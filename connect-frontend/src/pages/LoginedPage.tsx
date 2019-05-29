import * as React from "react";

class LoginedPage extends React.Component<any, any> {
  public render() {
    const currentLocation = location.href;
    const urlParser = new URL(currentLocation);

    const token = urlParser["search"].split("?")[1];
    console.log(token);
    fetch(`http://api.jpraises.com/connect/oauth/token?${token}`)
      .then(data => {
        let authenticated = data;
        console.log("authenticated", authenticated);
        localStorage.setItem("user", JSON.stringify("authenticated"));
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
