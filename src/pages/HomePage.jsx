import { MainComponent, NavComponent } from "../components"
import { useLocation } from "react-router-dom"
import UserHook from "../hooks/UserHook";

export const HomePage = () => {
  const location = useLocation();
  const { state } = location;
  
  const { data } = UserHook(state);

  return (
    <div>
      <NavComponent usuario={ data }/>
      <MainComponent usuario={ data }/>
    </div>
  )
}
