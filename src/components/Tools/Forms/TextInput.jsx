import React from 'react';
import {Form,Input} from 'semantic-ui-react';

const TextInput = ({label,name,placeholder,onChange,type,value,disabled})=>{
    return(
        <Form.Field
            type={type || 'text'}
            label={label}
            control={Input}
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            value={value}
        />
    )
}

export default TextInput