import gql from 'graphql-tag';

const ALL_FUENTES = gql`
        {
            allFuentes{
                success
                fuentes{
                    _id
                    tipoDeFuente
                    nombre
                }
            }
        }
`

export {
    ALL_FUENTES
}