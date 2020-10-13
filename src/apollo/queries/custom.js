import gql from 'graphql-tag';

const FUENTES_TYPES = gql`
    query getFuentes($key:String!,$value:String){
        getFuentes(key:$key,value:$value){
            status
            success
            message
            fuentes{
                nombre
            }
        }
    }
`
const FICHAS_CUSTOM = gql`
    query getFichas($key:String!,$value:String!){
        getFichas(key:$key,value:$value){
            status
            success
            message
            fichas{
                _id
                image
                titulo
                author
                postedAt
                createdAt
            }
        }
    }
`
export {
    FUENTES_TYPES,
    FICHAS_CUSTOM
}