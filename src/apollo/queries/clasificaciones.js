import gql from 'graphql-tag';

const ALL_CLASIFICACIONES = gql`

    {
        allClasificaciones{
            success
            status
            message
            clasificaciones{
                _id
                subClass
                clasificacion
            }
        }
    }

`

export {
    ALL_CLASIFICACIONES
}