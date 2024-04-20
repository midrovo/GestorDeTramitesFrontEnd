/* eslint-disable react/prop-types */
import { ClientComponent } from "./cliente/ClientComponent";
import { EmpleadoComponent } from "./empleado/EmpleadoComponent"

export const MainComponent = (props) => {
  const { role, tramites } = props.usuario;

  return (
    <main className="mt-3">
      {
        role.authority === "ROLE_CLIENTE" ? <ClientComponent tramites={tramites}/> :
        <EmpleadoComponent/>
      }
      
    </main>
  )
}
