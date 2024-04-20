/* eslint-disable react/prop-types */
import { IoLogOutOutline } from "react-icons/io5"
import { Link } from "react-router-dom"


export const NavComponent = (props) => {
  const { role, name } = props.usuario;

  return (
    <header className="flex items-center justify-center shadow-xl text-zinc-700 bg-white py-6 mb-3">
      <div className="flex flex-col items-center justify-center w-full mx-7">
        <h1 className="text-2xl font-bold text-center tracking-wider">Subsecretaria de Puertos</h1>
        <div className="flex flex-col justify-center min-w-full mt-1">
          {
            role.authority == "ROLE_CLIENTE" ?
            <span className="mr-2 text-lg font-medium my-2">
              Bienvenido/a { name } al servicio de consultas de tramite.
            </span> :

            <span className="mr-2 text-lg font-medium my-2">
              Bienvenido/a { name } al gestor de tramites.
            </span>
          }
          
          <nav className="flex justify-between items-center w-full">
            <Link to={"/"} className="flex items-center font-semibold text-blue-600 hover:text-blue-700">
              Cerrar sesion <IoLogOutOutline className="ml-2" size={20}/>
            </Link>
            {
              role.authority == "ROLE_ADMIN" &&
              <div className="flex-1 flex justify-center font-semibold">
                <Link to={"/"} className="mx-4">Opcion 1</Link>
                <Link to={"/"} className="mx-4">Opcion 2</Link>
                <Link to={"/"} className="mx-4">Opcion 3</Link>
                <Link to={"/"} className="mx-4">Opcion 4</Link>
              </div>
            }
          </nav>
        </div>
      </div>
    </header>
  )
}
