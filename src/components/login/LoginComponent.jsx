import { IoLogInOutline } from "react-icons/io5";
import AuthHook from "../../hooks/AuthHook";

export const LoginComponent = () => {
    const { formData, handleChange, handleSubmit, err } = AuthHook({ username: "", password: "" });

    const isFormValid = formData.username && formData.password;

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col justify-between w-full">
                <div className="flex flex-col items-center my-2">
                    <input
                        onChange={handleChange}
                        className="min-w-64 rounded-xl outline-none mb-2 py-2 px-4 shadow-2xl border-gray-500 border-2 border-opacity-50 focus:border-blue-400 cursor-pointer"
                        type="text"
                        name="username"
                        id="username"
                        value={formData.username}
                        placeholder="Usuario" />
                    <input
                        onChange={handleChange}
                        className="min-w-64 rounded-xl outline-none mt-2 py-2 px-4 shadow-2xl border-gray-500 border-2 border-opacity-50 focus:border-blue-400 cursor-pointer"
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        placeholder="Contraseña" />
                </div>
                {err && <p className="text-red-600 text-xs text-center font-semibold">{err}</p>}
                <div className="flex flex-col justify-center items-center min-h-24 my-2">
                    <button
                        disabled={!isFormValid}
                        className="flex justify-center items-center min-w-64 shadow-2xl h-10 bg-blue-600 rounded-xl mb-2 text-white font-semibold hover:bg-blue-700 hover:transition-all">
                        <IoLogInOutline className="mr-3" color="white" size={20} />
                        Iniciar Sesion
                    </button>
                </div>
            </form>
        </>
    );
};
