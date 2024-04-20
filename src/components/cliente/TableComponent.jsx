/* eslint-disable react/prop-types */
export const TableComponent = (props) => {
    return (
        <div className="mt-5">
            <h2 className="text-2xl font-semibold text-center mb-4">Tramites</h2>
            <div className="overflow-x-auto">
                <table className="w-full bg-white shadow-md my-6">
                    <thead className="bg-blue-600 text-white">
                        <tr>
                            <th className="py-3 px-6 text-center">No. Factura</th>
                            <th className="py-3 px-6 text-center">Fecha de Ingreso</th>
                            <th className="py-3 px-6 text-center">Buque</th>
                            <th className="py-3 px-6 text-center">Categoría</th>
                            <th className="py-3 px-6 text-center">Proceso</th>
                            <th className="py-3 px-6 text-center">Estado</th>
                            <th className="py-3 px-6 text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        { props.data &&
                            props.data.map((tramite) => (
                                <tr className="bg-gray-200" key={ tramite.id }>
                                    <td className="py-4 px-6 text-center">{ tramite.id }</td>
                                    <td className="py-4 px-6 text-center">{ tramite.dateTimeIngreso }</td>
                                    <td className="py-4 px-6 text-center">{ tramite.oficio }</td>
                                    <td className="py-4 px-6 text-center">{ tramite.registroContrato }</td>
                                    <td className="py-4 px-6 text-center">{ tramite.detail }</td>
                                    <td className="py-4 px-6 text-center">{ tramite.comentario }</td>
                                    <td className="py-4 px-6 text-center">
                                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Ver</button>
                                    </td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}
