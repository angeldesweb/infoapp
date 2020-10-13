import {useState} from 'react';

const useFields = (initialValues)=>{
    const values = initialValues;
    const [fields,setFields] = useState({...values});


    const onChange = (e,{value,name})=>{
        setFields({...fields,[name]:value})
    }
    const stdOnChange = (e)=>{
        let name = e.target.name
        let value = e.target.value
        setFields({...fields,[name]:value})
    }
    return {
        fields,
        values,
        setFields,
        getInput : (name)=>({
            name,
            value:fields[name],
            onChange,
        }),
        getStd : (name)=>({
            name,
            value:fields[name],
            onChange:stdOnChange
        })
    }
}

export default useFields;