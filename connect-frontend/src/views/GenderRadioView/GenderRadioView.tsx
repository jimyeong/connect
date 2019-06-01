import * as React from "react";
import { InputRadio } from "../../components/";
import { formData } from "../../models";

interface IGenderRadioViewProps {
  data: typeof formData;
  onChange(e: React.FormEvent): void;
}

class GenderRadioView extends React.Component<IGenderRadioViewProps, any> {
  public render() {
    const { gender } = this.props.data;
    const InputRadioItems = gender.map((item, i: number) => {
      return <InputRadio label={item.label} id={item.id} key={i} name="gender" onChange={this.props.onChange} />;
    });
    return InputRadioItems;
  }
}

export default GenderRadioView;
