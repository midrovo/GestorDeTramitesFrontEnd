import { Outlet, useLocation } from "react-router-dom"
import { FooterComponent, NavComponent } from "./components"
import UserHook from "./hooks/UserHook";

function App() {
  // const location = useLocation();
  // const { state } = location;

  // const estado = state;

  // console.log(state);

  // const { data } = UserHook(estado);

  const data = {
    role: {
      authority: "ROLE_ADMIN"
    },
    name: "Mauricio"
  }

  return (
    <>
      <NavComponent usuario={ data }/>
      <Outlet/>
      <FooterComponent/>
    </>
  )
}

export default App
