import { IoBoatOutline } from "react-icons/io5";
import style from "./styles/home.module.css";
import { BsTruck } from "react-icons/bs";

export const HomePage = () => {

  const booleano = true;

  return (
    <div className={ style.home }>
      {
        booleano ?
        <div className="min-h-96 flex flex-col justify-center text-center">
          <span className="text-4xl font-semibold">¡Bienvenido al Gestor de Trámites!</span>
          <span className="text-3xl">Aquí encontraras todos los servicios de trámite que necesitas.</span>
        </div> :

        <div className="mx-4 my-8">
          <div className="px-4">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Bienvenido a la Subsecretaria de Puertos y Transporte Marítimo y Fluvial</h2>
            <p className="text-gray-800 text-lg font-semibold leading-relaxed mb-8">En nuestra subsecretaría, nos comprometemos a proporcionar servicios de calidad relacionados con los trámites marítimos y fluviales. Ofrecemos una amplia gama de servicios para garantizar una experiencia fluida y eficiente para nuestros clientes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="service-card bg-gray-100 border border-purple-600 rounded-lg shadow-md p-6">
              <i className="fas fa-ship text-4xl text-blue-800 mb-4"></i>
              <h3 className="text-xl flex items-center font-semibold text-blue-800 mb-2">
                <IoBoatOutline className="mr-2" size={50}/>
                Servicios de Puertos
              </h3>
              <p className="text-gray-800">Brindamos servicios portuarios de alta calidad para satisfacer las necesidades de transporte marítimo.</p>
            </div>
            <div className="service-card bg-gray-100 border border-purple-600 rounded-lg shadow-md p-6">
              <i className="fas fa-truck text-4xl text-blue-800 mb-4"></i>
              <h3 className="text-xl font-semibold flex items-center text-blue-800 mb-2">
                <BsTruck className="mr-2" size={50}/>
                Servicios de Transporte
              </h3>
              <p className="text-gray-800">Ofrecemos servicios de transporte fluvial y terrestre para facilitar el movimiento de mercancías y pasajeros.</p>
            </div>
          </div>
        </div>

      }
      
    </div>
  )
}
