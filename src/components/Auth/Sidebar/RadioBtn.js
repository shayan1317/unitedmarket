import React, { useState } from "react";
import { Radio } from "native-base";
function RadioBtn() {
  const [value, setValue] = React.useState("one");
  return (
    <Radio.Group
      name="myRadioGroup"
      accessibilityLabel="favorite number"
      //   value={value}
      onChange={(nextValue) => {
        setValue(nextValue);
      }}
    >
      <Radio value={value} my={1} backgroundColor="transparent"></Radio>
    </Radio.Group>
  );
}

export default RadioBtn;
