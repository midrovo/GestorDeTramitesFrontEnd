import { IoHomeOutline, IoInformationCircleOutline, IoLogOutOutline, IoMailOutline, IoSearchOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const itemsClientNav = [
    { path:"/home/inicio", name: "Inicio", icon: <IoHomeOutline className="mr-2" size={20}/> },
    { path:"/home/tramites", name: "Consultar Trámites", icon: <IoSearchOutline className="mr-2" size={20}/> },
    { path:"/home/about", name: "Sobre Nosotros", icon: <IoInformationCircleOutline className="mr-2" size={20}/> },
    { path:"/home/contactos", name: "Contacto", icon: <IoMailOutline className="mr-2" size={20}/> },
    { path:"/home/logout", name: "Cerrar Sesión", icon: <IoLogOutOutline className="mr-2" size={20}/> },
];

export const PruebaNav = () => {
  return (
    <>
        {
            itemsClientNav.map(item => (
                <NavLink key={ item.path } to={ item.path } className="flex items-center font-semibold mx-4 hover:text-blue-600">
                    { item.icon }
                    { item.name }
                </NavLink>
            ))
        }
    </>
  )
}
