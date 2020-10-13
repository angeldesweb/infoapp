import React from 'react';
import {Form} from 'semantic-ui-react';

const StandarInput = ({label,name,onChange,value,type,disabled})=>{
    return(
        <Form.Field>
            <label>{label}</label>
            <input type={type} name={name} onChange={onChange} value={value}/>
        </Form.Field>
    )

}

export default StandarInput