import gql from 'graphql-tag';


const SIGN_IN = gql`
        mutation SignIn($cedula:String!,$password:String!){
            SignIn(cedula:$cedula,password:$password){
                success
                status
                message
                error{
                    path
                    message
                }
                token
                usuario{
                    _id
                    nombre
                    cedula
                    role
                }
            }
        }
    `
export {
    SIGN_IN
}