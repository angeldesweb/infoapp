import React , {useState} from 'react';
import { Menu , Image } from 'semantic-ui-react';

const MainAsideBox = (props)=>{
    const {history} = props
    const [active,setActive] = useState({name:history.location.pathname.split('/')[1] || 'Inicio' })
    const handleActive = (event,{name})=>{
        name === 'Inicio' ? history.push(`/`) : history.push(`/${name}`)
        setActive({name:name})
    }
    return(
        <Menu pointing secondary vertical fixed='left'>
            <Menu.Item>
                <Image src='./images/Logo.png' alt='Logo Consejo Nacional Electoral' size="small"/>
            </Menu.Item>
            <Menu.Item name={'Inicio'} active={active.name === 'Inicio'} onClick={handleActive}>
                Inicio
            </Menu.Item>
            <Menu.Item name={'nuevo'} active={active.name === 'nuevo'} onClick={handleActive}>
                Crear
            </Menu.Item>
            <Menu.Item name={'buscar'} active={active.name === 'buscar'} onClick={handleActive}>
                Búsquedas
            </Menu.Item>
        </Menu>
    )
}

export default MainAsideBox;