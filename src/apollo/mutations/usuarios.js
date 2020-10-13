import gql from 'graphql-tag';


const SIGN_IN = gql`
        mutation signIn($tipoCedula:String,$cedula:String!,$password:String!){
            signIn(tipoCedula:$tipoCedula,cedula:$cedula,password:$password){
                success
                status
                token
                usuario{
                    _id
                }
            }
        }
    `
export {
    SIGN_IN
}