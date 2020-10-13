import React, { Fragment } from 'react'
import { Form } from 'semantic-ui-react';
import useFields from '../../Hooks/useFields';
import TextInput from './TextInput';
import Lista from './Lista';
import Mixted from './Mixted';
import StandarInput from './StandarInput';
import ResponsiveButton from './ResponsiveButton';


 
const DinamicForm = ({fields,initialValues,btnName,handleSubmit,loading})=>{
    
    const form = useFields(initialValues);

    return (
        <Fragment>
            <Form onSubmit={(e)=> {
                e.preventDefault(e)
                handleSubmit(form.fields)
            }}>
                {fields.map(field =>{
                    if(field.type === 'lista') return(
                        <Lista 
                            key={field.name} 
                            label={field.label} 
                            placeholder={field.placeholder}
                            options={field.options}
                            {...form.getInput(field.name)}
                        />
                    )
                    if(field.type === 'mixted') return(
                        <Mixted
                            key={field.name}
                            label={field.label}
                            placeholder={field.placeholder}
                            nameSelect={field.nameSelect}
                            options={field.options}
                            defaultValue={field.defaultValue}
                            {...form.getInput(field.name)}
                        />
                    )
                    if(field.type === 'Text') return(
                        <TextInput key={field.name} label={field.label} placeholder={field.placeholder} type={field.type} {...form.getInput(field.name)} />
                    )
                    return <StandarInput key={field.name} label={field.label} placeholder={field.placeholder} type={field.type} {...form.getStd(field.name)} />
                })}
                <ResponsiveButton loading={loading} btnName={btnName} />
            </Form>
        </Fragment>
    )
}

export default DinamicForm