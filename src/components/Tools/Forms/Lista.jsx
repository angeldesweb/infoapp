import React from 'react';
import { Dropdown, Form } from 'semantic-ui-react';

const Lista = ({label,name,placeholder,options,onChange,btn,setShow})=>{
    return(
        <Form.Field>
            <label>{label}</label>
            <Dropdown
                fluid
                search
                selection
                name={name}
                placeholder={placeholder}
                options={options}
                onChange={onChange}
            />
            {btn && <a id={label} onClick={e=>{
                e.preventDefault(e)
                setShow(e.target.id)
            }} href='/'>Agregar nuevo</a>}
        </Form.Field>
    )
}
export default Lista