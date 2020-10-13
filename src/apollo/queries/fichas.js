import gql from 'graphql-tag';

const ALL_FICHAS = gql`
        {
            allFichas{
                success
                message
                fichas{
                    _id
                    titulo
                    tipoInfo
                    postedAt
                    createdAt
                    resumen
                    fuente
                    image
                    author
                    postedBy{
                        _id
                        nombre
                    }
                    clasificacion{
                        _id
                        subClass
                        clasificacion
                    }
                }
            }
        }
`

const GET_FICHA_BY_ID = gql`
    query getFichaById($_id:ID!){
        getFichaById(_id:$_id){
            success,
            message
            ficha{
                _id
                titulo
                tipoInfo
                postedAt
                createdAt
                resumen
                fuente
                image
                author
                postedBy{
                    _id
                    nombre
                }
                clasificacion{
                    _id
                    subClass
                    clasificacion
                }
            }
        }
    }
`

export {
    ALL_FICHAS,
    GET_FICHA_BY_ID
}