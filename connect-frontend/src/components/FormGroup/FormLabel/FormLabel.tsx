import * as React from "react";

interface IFormLabelProps {
  title: string;
}
class FormLabel extends React.Component<IFormLabelProps, any> {
  renderLabelElement = () => {
    return <span className="form-title">{this.props.title}</span>;
  };
  renderLabelContainer = () => {
    return (
      <div className="form-container">
        <span>{this.props.title}</span>
        {this.props.children}
      </div>
    );
  };
  public render() {
    return this.props.children ? this.renderLabelContainer() : this.renderLabelElement();
  }
}

export default FormLabel;
