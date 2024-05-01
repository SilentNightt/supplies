import React from 'react';
import { Checkbox } from 'antd';

const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

function AppCheckbox(props) {
    return(<Checkbox onChange={onChange}>{props.name}</Checkbox>)
}

export default AppCheckbox;