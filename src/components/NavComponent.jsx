/* eslint-disable react/prop-types */
import { ItemNav } from "./ItemNav";

export const NavComponent = (props) => {
  const { role, name } = props.usuario;

  return (
    <header className="flex flex-col items-center justify-center shadow-xl text-white bg-sky-950 pt-2">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-3xl font-bold text-center tracking-wider py-8 mx-4">
          Subsecretaría de Puertos y Transporte Marítimo y Fluvial
        </h1>
        <div className="flex flex-col justify-center min-w-full">
          {
            role.authority == "ROLE_CLIENTE" ?
            <span className="text-lg font-medium mx-4 my-1">
              Bienvenido/a { name } al servicio de consultas de trámite.
            </span> :

            <span className="text-lg font-medium mx-4 my-1">
              Bienvenido/a { name } al sistema de gestión de trámites.
            </span>
          }
          
          <nav className="flex justify-between items-center w-full bg-black py-3">
            <div className="flex-1 flex justify-center font-semibold flex-wrap">
              <ItemNav role={ role }/>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
