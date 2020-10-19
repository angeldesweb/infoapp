import React from 'react';
import { Menu , Image } from 'semantic-ui-react';

const DefaultAside = ({ active , handleActive })=>{
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
            <Menu.Item name={'destacada'} active={active.name === 'destacada'} onClick={handleActive}>
                Destacada
            </Menu.Item>
        </Menu>
    )
}

export default DefaultAside;