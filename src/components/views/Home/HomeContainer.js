import React , { useState } from 'react';
import { ErrorContainer } from '../ErrorHandler';
import HomeComponent from './HomeComponent';
import { useQuery } from '@apollo/react-hooks';
import { GET_USUARIO } from '../../../apollo/queries/usuarios';
import { ALL_CLASIFICACIONES } from '../../../apollo/queries/clasificaciones';
import { ALL_FICHAS } from '../../../apollo/queries/fichas';


const HomeContainer = ({ history })=> {
//----QUERIES
    const { data:allClasificaciones , loading:LoadingClasif , error:ErrorClasif } = useQuery(ALL_CLASIFICACIONES);
    const { data:allFichas , loading:LoadingFichas , error:ErrorFichas } = useQuery(ALL_FICHAS);
    const { data:getUsuarioById , error:ErrUsrId , loading:LoadUsrId } = useQuery(GET_USUARIO,{variables:{_id:localStorage.getItem('usuario')}});
//----MODAL TRIGGER
    const [show,setShow] = useState({open:false});
//----HANDLERS
    const handleShow = (e)=>{
        setShow({open:!show.open})
    }
//----MANEJO DE RESPUESTAS DE LA API
    if(allClasificaciones){
        const { clasificaciones , error , success } = allClasificaciones.allClasificaciones;
        if(error || !success) return <h1>Se han encontrado errores en el sistema</h1>
        if(getUsuarioById){
            const { usuario , error , success } = getUsuarioById.getUsuarioById;
            if(error || !success) return <h1>Se han encontrado errores en el sistema</h1>       
            if(allFichas){
                const { fichas , error , success} = allFichas.allFichas;
                if(error || !success) return <h1>Se han encontrado errores en el sistema</h1>
                return(
                    <HomeComponent 
                        show={show} 
                        setShow={handleShow} 
                        clasificaciones={clasificaciones}
                        usuario={usuario}
                        LoadingClasif={LoadingClasif}
                        LoadUsrId={LoadUsrId}
                        LoadingFichas={LoadingFichas}
                        fichas={fichas}
                        history={history}
                    />
                )
            }
        }

    }
    if(ErrUsrId || ErrorClasif || ErrorFichas) return <ErrorContainer />

    return <h1>Container</h1>

}

export default HomeContainer;