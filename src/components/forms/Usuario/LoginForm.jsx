import React from 'react';
import { Formik } from 'formik';
import { Button , Form , Label } from 'semantic-ui-react';
import { ErrorMessages } from '../../messages/FormMessages/ErrorMessages'

const LoginForm = ({ handleLogin , loading , error , errors }) => {
    return (
        <div>
            {error && error.length && <ErrorMessages />}
            {errors && errors.message && <ErrorMessages errors={errors.message} />}
            <Formik
                initialValues={{ cedula: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.cedula) {
                        errors.cedula = 'Debe ingresar un número de Cédula';
                    }
                    if(!values.password){
                        errors.password = 'Debe introducir la contraseña';
                    }
                        return errors;
                    }
                }
                onSubmit={(values) => {
                    console.log(values)
                    handleLogin(values)
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
                            label='Cédula'
                            type="cedula"
                            name="cedula"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.cedula}
                        />
                        {errors.cedula && touched.cedula &&       
                            <Label basic color='red' pointing>
                                {errors.cedula}
                            </Label>
                        }
                    </Form.Field>
                    <Form.Field>
                        <Form.Input
                            label='Contraseña'
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        {errors.password && touched.password &&
                        <Label basic color='red' pointing>
                                {errors.password}
                            </Label>
                        }
                    </Form.Field>
                    <Button type="submit" className='primary' disabled={!touched.cedula && !touched.password } loading={ isSubmitting || loading}>
                        Iniciar Sesión
                    </Button>
                </Form>
                )}
            </Formik>
        </div>
    )
}

export default LoginForm;