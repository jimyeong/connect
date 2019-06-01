import * as React from "react";
import { MakeGroupForm } from "../forms";

class MakeGroupPage extends React.Component<any, any> {
  public render() {
    console.log(this.state);
    return (
      <div className="page make-group">
        <h3 className="page-title">그룹 만들기</h3>
        <div className="make-forms">
          <MakeGroupForm />
        </div>
      </div>
    );
  }
}

export default MakeGroupPage;
