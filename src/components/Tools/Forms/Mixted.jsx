import React from 'react';
import { Input , Form, Dropdown} from 'semantic-ui-react';


const Mixted = ({label,name,placeholder,options,onChange,nameSelect,defaultValue})=>{
    return(
        <Form.Field >
            <label>{label}</label>
            <Input
                id={name}
                type='text' 
                placeholder={placeholder} 
                name={name}
                onChange={onChange}
                action={<Dropdown button basic floating options={options} name={nameSelect} defaultValue={defaultValue} onChange={onChange}/>}
                actionPosition='left'
            >
            </Input>
        </Form.Field>
    )
}
export default Mixted