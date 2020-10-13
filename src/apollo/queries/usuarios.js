import gql from 'graphql-tag';

const ALL_USUARIOS = gql`
        {
            allUsuarios{
                success
                usuarios{
                    _id
                    nombre
                    role
                    password
                }
            }
        }
`
const GET_USUARIO = gql`
        query getUsuarioById($_id:ID!){
            getUsuarioById(_id:$_id){
                success
                status
                message
                usuario{
                    _id
                    nombre
                    role
                }
            }
        }
`
export {
    ALL_USUARIOS,
    GET_USUARIO
}
