import React , { useState } from 'react';
import DefaultAside from './DefaultAside';

const DefaultAsideContainer = (props)=>{
    const { history } = props
    const [active,setActive] = useState({name:history.location.pathname.split('/')[1] || 'Inicio' })
    const handleActive = (event,{name})=>{
        name === 'Inicio' ? history.push(`/`) : history.push(`/${name}`)
        setActive({name:name})
    }
    return(
        <DefaultAside active={active} handleActive={handleActive} />
    )
}

export default DefaultAsideContainer;