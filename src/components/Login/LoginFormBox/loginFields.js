const fields = [

    {
        name:'cedula',
        label:'Cédula',
        placeholder:'Cédula del usuario',
        nameSelect:'tipoCedula',
        options:[
            {
                key:1,
                text:'V',
                value:'V'
            },
            {
                key:2,
                text:'E',
                value:'E'
            }
        ],
        defaultValue:'V',
        type:'mixted',
    },
    {
        name:'password',
        label:'Contraseña',
        placeholder:'Ingrese su contraseña',
        type:'password'
    },
]

const initialValues = {
    password:'',
    tipoCedula:'V',
    cedula:''
}

export {
    fields,
    initialValues
}