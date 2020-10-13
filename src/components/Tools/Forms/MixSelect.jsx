import React from 'react';
import { Input , Form , Dropdown , Button} from 'semantic-ui-react';



const MixtSelect = ({label,name,placeholder,options,onChange,nameSelect,defaultValue})=>{
    return(
        <Form.Field >
            <label>{label}</label>
            <Dropdown
                id={name}
                type='text' 
                placeholder={placeholder} 
                name={name}
                onChange={onChange}
                action={<Dropdown button basic floating options={options} name={nameSelect} defaultValue={defaultValue} onChange={onChange}/>}
                actionPosition='left'
            >
                <Dropdown.menu>
                    <Button>Nuevo</Button>
                </Dropdown.menu>
            </Dropdown>
        </Form.Field>
    )
}
export default MixtSelect