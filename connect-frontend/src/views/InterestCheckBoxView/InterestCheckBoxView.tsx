import * as React from "react";

import { InputCheckBox } from "../../components/";
import { formData } from "../../models";

interface IInterestCheckBoxViewProps {
  data: typeof formData;
  onChange(e: React.FormEvent): void;
}
class InterestCheckBoxView extends React.Component<IInterestCheckBoxViewProps, any> {
  public render() {
    const { interest } = this.props.data;
    const InputRadioItems = interest.map((item, i: number) => {
      return <InputCheckBox label={item.label} id={item.id} key={i} name="interest" onChange={this.props.onChange} />;
    });
    return InputRadioItems;
  }
}

export default InterestCheckBoxView;
