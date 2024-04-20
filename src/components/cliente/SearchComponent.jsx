import { IoSearch } from "react-icons/io5"

export const SearchComponent = () => {

    return (
        <div className="flex">
            <form className="flex items-center">
                <label htmlFor="date" className="font-semibold">Fecha de emisión:</label>
                <input type="date"  id="date" className="ml-4 outline-none border-gray-500 border-2 border-opacity-50 min-w-52 rounded-xl px-2 py-1 focus:border-blue-400 hover:cursor-pointer hover:transition-all"/>
                <button className="flex items-center justify-center ml-4 px-2 py-1 bg-blue-600 rounded-xl shadow-xl min-w-11 min-h-9 hover:bg-blue-700 hover:transition-all">
                    <IoSearch color="white" size={20}/>
                </button>
            </form>
        </div>
    );
}
