import { useMutation } from '@apollo/react-hooks';


const useForm = (mutation,form)=>{
    const [mutate,{data}] = useMutation(mutation)
    const onSubmit = async ()=>{
        await mutate({variables:form.fields})
        form.setFields(form.values)
    }
    return [
        data,
        onSubmit,
    ]
}

export default useForm;