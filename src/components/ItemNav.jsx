/* eslint-disable react/prop-types */
import { BsTruck } from "react-icons/bs";
import { IoBoatOutline, IoHomeOutline, IoInformationCircleOutline, IoLogOutOutline, IoMailOutline, IoSearchOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import style from "./style/item.module.css"

const itemsClientNav = [
    { path:"/home", name: "Inicio", icon: <IoHomeOutline className="mr-2" size={20}/> },
    { path:"/home/tramites", name: "Consultar Trámites", icon: <IoSearchOutline className="mr-2" size={20}/> },
    { path:"/home/about", name: "Sobre Nosotros", icon: <IoInformationCircleOutline className="mr-2" size={20}/> },
    { path:"/home/contactos", name: "Contacto", icon: <IoMailOutline className="mr-2" size={20}/> },
    { path:"/logout", name: "Cerrar Sesión", icon: <IoLogOutOutline className="mr-2" size={20}/> },
];

const itemsEmployeeNav = [
    { path:"/", name: "Inicio", icon: <IoHomeOutline className="mr-2" size={20}/> },
    { path:"/transporte", name: "Transporte", icon: <BsTruck className="mr-2" size={20}/> },
    { path:"/puerto", name: "Puerto", icon: <IoBoatOutline className="mr-2" size={20}/> },
    { path:"/tramites", name: "Consultar Trámites", icon: <IoSearchOutline className="mr-2" size={20}/> },
    { path:"/logout", name: "Cerrar Sesión", icon: <IoLogOutOutline className="mr-2" size={20}/> },
];

export const ItemNav = (props) => {
    const { authority } = props.role;

    return (
        <>
            {
                authority === "ROLE_CLIENTE" ?

                itemsClientNav.map(item => (
                    <NavLink key={ item.path } to={ item.path }
                        className={({isActive}) => isActive ? `${ style.active }` : `${ style.inactive }`}>
                        { item.icon }
                        { item.name }
                    </NavLink>
                ))
                :
                itemsEmployeeNav.map(item => (
                    <NavLink key={ item.path } to={ item.path }
                        className={({isActive}) => isActive ? `${ style.active }` : `${ style.inactive }`}>
                        { item.icon }
                        { item.name }
                    </NavLink>
                ))
            }
        </>
    );
}
