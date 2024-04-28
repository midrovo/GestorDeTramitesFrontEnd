import { IoBoat, } from "react-icons/io5"
import imagen from "../assets/mtop.jpg"
import { LoginComponent } from "../components"
export const LoginPage = () => {
    
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col justify-between items-center flex-1 max-w-sm bg-white shadow-2xl rounded-xl">
                <div className="flex min-w-full min-h-20 justify-center items-center bg-blue-600 rounded-t-xl">
                    <IoBoat color="white" size={20}/>
                    <span className="text-white ml-2 font-bold tracking-widest text-lg">Subsecretaria de Puertos</span>
                </div>
                <div className="my-2">
                    <img src={ imagen } width={150} alt="imagen"/>
                </div>
                <LoginComponent/>
            </div>
        </div>
    )
}
