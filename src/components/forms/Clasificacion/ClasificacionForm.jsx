import React from 'react';
import { Formik } from 'formik';
import { Button, Form , Label} from 'semantic-ui-react'

const FormCategory = ({ handleForm , loading }) => { 
    return (
        <div>
            <Formik
                initialValues={{ clasificacion: '', subClass: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.clasificacion) errors.clasificacion = 'Debe ingresar un número de Cédula';
                    
                    if(!values.subClass) errors.subClass = 'Debe introducir la contraseña';
    
                    return errors;
                    
                }}
                onSubmit={(values) => {
                    handleForm(values)
                }}
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                }) => (
                <Form onSubmit={handleSubmit}>
                    <Form.Field>
                        <Form.Input
                            label='Clasificación'
                            type="text"
                            name="clasificacion"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.clasificacion}
                        />
                        {errors.clasificacion && touched.clasificacion &&       
                            <Label basic color='red' pointing>
                                {errors.clasificacion}
                            </Label>
                        }
                    </Form.Field>
                    <Form.Field>
                        <Form.Input
                            label='Contraseña'
                            type="text"
                            name="subClass"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.subClass}
                        />
                        {errors.subClass && touched.subClass &&
                        <Label basic color='red' pointing>
                                {errors.subClass}
                            </Label>
                        }
                    </Form.Field>
                    <Button type="submit" className='primary' disabled={!touched.clasificacion && !touched.subClass} loading={ isSubmitting || loading}>
                        Registrar
                    </Button>
                </Form>
                )}
            </Formik>
        </div>
    )
}

export default FormCategory;