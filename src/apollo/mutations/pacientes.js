import gql from 'graphql-tag';


const CREATE_PACIENTE = gql`
        mutation createPaciente($tipoCedula:String!,$cedula:String!,$nombre:String!,$apellido:String!$sexo:Boolean!$edad:String!,$fechaNac:String,$lugarNac:String,$ocupacion:String,$representante:String,$cedulaRepresentante:String,$direccion:String,$municipio:String,$unidad:String,$parroquia:String,$localidad:String,$estado:String,$telefono:String,$email:String,$createdAt:String,$updatedAt:String,$createdBy:String!,$resultado:Boolean!,$sintomas:String!){
            createPaciente(tipoCedula:$tipoCedula,cedula:$cedula,nombre:$nombre,apellido:$apellido,sexo:$sexo,edad:$edad,fechaNac:$fechaNac,lugarNac:$lugarNac,ocupacion:$ocupacion,representante:$representante,cedulaRepresentante:$cedulaRepresentante,direccion:$direccion,municipio:$municipio,unidad:$unidad,parroquia:$parroquia,localidad:$localidad,estado:$estado,telefono:$telefono,email:$email,createdAt:$createdAt,updatedAt:$updatedAt,createdBy:$createdBy,resultado:$resultado,sintomas:$sintomas){
                success
                status
                message
                paciente{
                    _id
                }
            }
        }
    `
export {
    CREATE_PACIENTE
}