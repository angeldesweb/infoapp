import gql from 'graphql-tag';

const CREATE_FICHA = gql`
    mutation createFicha($codigo:String!,$titulo:String!,$tipoInfo: String!,$postedAt:String!,$createdAt: String,$resumen: String!,$fuente: String!,$image: String,$author: String!,$postedBy: String!,$clasificacion:String!){
        createFicha(codigo:$codigo,titulo:$titulo,tipoInfo:$tipoInfo,postedAt:$postedAt,createdAt:$createdAt,resumen:$resumen,fuente:$fuente,image:$image,author:$author,postedBy:$postedBy,clasificacion:$clasificacion){
            success
            status
            message
            ficha{
                _id
                codigo
                titulo
            }
        }
    }
`
const UPDATE_FICHA = gql`
    mutation updateFicha($_id:ID,$codigo:String,$titulo:String,$tipoInfo:String,$postedAt:String,$createdAt:String,$resumen:String,$fuente:String,$image:String,$author:String,$postedBy:String,$clasificacion:String){
        updateFicha(_id:$_id,codigo:$codigo,titulo:$titulo,tipoInfo:$tipoInfo,postedAt:$postedAt,createdAt:$createdAt,resumen:$resumen,fuente:$fuente,image:$image,author:$author,postedBy:$postedBy,clasificacion:$clasificacion){
            success
            status
            message
            ficha{
                _id
                codigo
                titulo
            }
        }
    }
`
export {
    CREATE_FICHA,
    UPDATE_FICHA
}

