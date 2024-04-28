
export const TransportePage = () => {
  return (
    <div className="flex justify-center bg-cad7e5 m-4 rounded-3xl">
    <div className="flex flex-1 justify-around md:w-1/2">
      <form className="max-w-lg mx-auto mt-10">
        {/* Código */}
        <div className="mb-4">
          <label htmlFor="codigo" className="block text-gray-700">Código:</label>
          <input type="text" id="codigo" name="codigo" className="form-input mt-1 block w-full px-2 py-1 outline-none" required />
        </div>

        {/* Tipo de Trámite */}
        <div className="mb-4">
          <label htmlFor="tipo" className="block text-gray-700">Tipo de Trámite:</label>
          <select id="tipo" name="tipo" className="form-select mt-1 block w-full px-2 py-1 outline-none" required>
            <option value=""> </option>
            <option value="TRAFICO">TRAFICO</option>
            <option value="MATRICULACION">MATRICULACION</option>
            <option value="FORTALECIMIENTO">FORTALECIMIENTO</option>
            <option value="SIN CATEGORIA">SIN CATEGORIA</option>
            <option value="OFICIOS & COMUNICACIONES">OFICIOS & COMUNICACIONES</option>
          </select>
        </div>

        {/* Número de Factura */}
        <div className="mb-4">
          <label htmlFor="n-factura" className="block text-gray-700">Factura:</label>
          <input type="text" id="n-factura" name="n-factura" className="form-input mt-1 block w-full px-2 py-1 outline-none" />
        </div>

        {/* Fecha de Ingreso */}
        <div className="mb-4">
          <label htmlFor="fecha" className="block text-gray-700">Fecha de Ingreso:</label>
          <input type="date" id="fecha" name="fecha" className="form-input mt-1 block w-full px-2 py-1 outline-none" />
        </div>

        {/* Hora de Ingreso y Costo */}
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="horaIngreso" className="block text-gray-700">Hora de Ingreso:</label>
            <input type="time" id="horaIngreso" name="horaIngreso" className="form-input mt-1 block w-full px-2 py-1 outline-none" />
          </div>
          <div>
            <label htmlFor="costo" className="block text-gray-700">Costo ($):</label>
            <div className="relative">
              <input type="number" id="costo" name="costo" step="0.01" min="0" className="form-input mt-1 block w-full pl-7 pr-12 px-2 py-1 outline-none" />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <span className="text-gray-500">$</span>
              </div>
            </div>
          </div>
        </div>

        {/* Buque */}
        <div className="mb-4">
          <label htmlFor="buque" className="block text-gray-700">Buque:</label>
          <input type="text" id="buque" name="buque" className="form-input mt-1 block w-full px-2 py-1 outline-none" required />
        </div>

        {/* Beneficiario */}
        <div className="mb-4">
          <label htmlFor="Beneficiario" className="block text-gray-700">Beneficiario:</label>
          <input type="text" id="Beneficiario" name="Beneficiario" className="form-input mt-1 block w-full px-2 py-1 outline-none" />
        </div>

        {/* Proceso */}
        <div className="mb-4">
          <label htmlFor="proceso" className="block text-gray-700">Proceso:</label>
          <select id="proceso" name="proceso" className="form-select mt-1 block w-full px-2 py-1 outline-none" required>
            <option value="">Seleccione...</option>
            <option value="caliicacion-registro">Calificación y registro como beneficiario de la lefortaac</option>
            <option value="autorizacion-importacion-naves">Autorización de importación de naves al amparo de la lefortaac</option>
            <option value="autorizacion-importacion-bienes">Autorización de importación de bienes al amparo de la lefortaac</option>
            {/* Agrega las demás opciones aquí */}
          </select>
        </div>

        {/* Descripción */}
        <div className="mb-4">
          <label htmlFor="descripcion" className="block text-gray-700">Descripción:</label>
          <textarea id="descripcion" name="descripcion" rows="3" className="form-textarea mt-1 block w-full px-2 py-1 outline-none"></textarea>
        </div>

        {/* Recibido por */}
        <div className="mb-4">
          <label htmlFor="recibido" className="block text-gray-700">Recibido por:</label>
          <select id="recibido" name="recibido" className="form-select mt-1 block w-full px-2 py-1 outline-none" required>
            <option value="">Seleccione</option>
            <option value="mloor">mloor</option>
            <option value="yrodriguez">yrodriguez</option>
          </select>
        </div>

        {/* Entregado a */}
        <div className="mb-4">
          <label htmlFor="entregado" className="block text-gray-700">Entregado a:</label>
          <select id="entregado" name="entregado" className="form-select mt-1 block w-full px-2 py-1 outline-none" required>
            <option value="">Seleccione</option>
            <option value="avargas">avargas</option>
            <option value="myepez">myepez</option>
            {/* Agrega las demás opciones aquí */}
          </select>
        </div>

        {/* Fecha y hora de entrega */}
        <div className="mb-4">
          <label htmlFor="fech-hr-entrega" className="block text-gray-700">Fecha y hora de entrega:</label>
          <input type="date" id="fech-hr-entrega" name="fech-hr-entrega" className="form-input mt-1 block w-full px-2 py-1 outline-none mb-2" />
          <input type="time" id="Hora_ingreso" name="Hora_ingreso" className="form-input block w-full px-2 py-1 outline-none mt-2" />
        </div>

        {/* Botón de Envío */}
        <div className="text-center">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Enviar
          </button>
        </div>
      </form>
      <form className="max-w-lg mx-auto mt-10">
        {/* Fecha y Hora de Recepción */}
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="fech-hr-recepcion" className="block text-gray-700">Fecha/Hr_Recepción:</label>
            <input type="date" id="fech-hr-recepcion" name="fech-hr-recepcion" className="form-input mt-1 block w-full px-2 py-1 outline-none" />
          </div>
          <div>
            <label htmlFor="Hora_ingreso" className="block text-gray-700">Hora de Recepción:</label>
            <input type="time" id="Hora_ingreso" name="Hora_ingreso" className="form-input mt-1 block w-full px-2 py-1 outline-none" />
          </div>
        </div>

        {/* Acción a */}
        <div className="mb-4">
          <label htmlFor="accionA" className="block text-gray-700">Acción a:</label>
          <select id="accionA" name="accionA" className="form-select mt-1 block w-full px-2 py-1 outline-none" required>
            <option value="">Seleccione</option>
            <option value="mbriones">Mario Roman</option>
            <option value="mbriones">Glenda Flores</option>
            {/* Agrega las demás opciones aquí */}
          </select>
        </div>

        {/* Fecha y Hora de Entrega */}
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="fech-hr-entrega" className="block text-gray-700">Fecha/Hr_Entrega:</label>
            <input type="date" id="fech-hr-entrega" name="fech-hr-entrega" className="form-input mt-1 block w-full px-2 py-1 outline-none" />
          </div>
          <div>
            <label htmlFor="Hora_entrega" className="block text-gray-700">Hora de Entrega:</label>
            <input type="time" id="Hora_entrega" name="Hora_entrega" className="form-input mt-1 block w-full px-2 py-1 outline-none" />
          </div>
        </div>

        {/* Certificador / Documento */}
        <h2 className="mb-4">Certificador / Documento</h2>
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="fech-hr-emision" className="block text-gray-700">Fecha/Hr_Emision:</label>
            <input type="date" id="fech-hr-emision" name="fech-hr-emision" className="form-input mt-1 block w-full px-2 py-1 outline-none" />
          </div>
          <div>
            <label htmlFor="Hora_emision" className="block text-gray-700">Hora de Emisión:</label>
            <input type="time" id="Hora_emision" name="Hora_emision" className="form-input mt-1 block w-full px-2 py-1 outline-none" />
          </div>
        </div>

        {/* Certificado */}
        <div className="mb-4">
          <label htmlFor="Certificado" className="block text-gray-700">Certificado:</label>
          <input type="text" id="Certificado" name="Certificado" className="form-input mt-1 block w-full px-2 py-1 outline-none" />
        </div>

        {/* Oficio */}
        <div className="mb-4">
          <label htmlFor="Oficio" className="block text-gray-700">Oficio:</label>
          <input type="text" id="Oficio" name="Oficio" className="form-input mt-1 block w-full px-2 py-1 outline-none" />
        </div>

        {/* No. de Notificación */}
        <div className="mb-4">
          <label htmlFor="No_notificacion" className="block text-gray-700">No_notificacion:</label>
          <input type="number" id="No_notificacion" name="No_notificacion" className="form-input mt-1 block w-full px-2 py-1 outline-none" />
        </div>

        {/* Registro de Contratos */}
        <div className="mb-4">
          <label htmlFor="Reg_Contratos" className="block text-gray-700">Reg_Contratos:</label>
          <input type="text" id="Reg_Contratos" name="Reg_Contratos" className="form-input mt-1 block w-full px-2 py-1 outline-none" />
        </div>

        {/* Comentarios */}
        <div className="mb-4">
          <label htmlFor="Comentarios" className="block text-gray-700">Comentarios:</label>
          <textarea id="Comentarios" name="Comentarios" rows="3" className="form-textarea mt-1 block w-full px-2 py-1 outline-none"></textarea>
        </div>

        {/* Fecha y Hora de Entrega Ventanilla */}
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="fech-hr-entr-ventanilla" className="block text-gray-700">Fecha/Hr_Entr_Ventanilla:</label>
            <input type="date" id="fech-hr-entr-ventanilla" name="fech-hr-entr-ventanilla" className="form-input mt-1 block w-full px-2 py-1 outline-none" />
          </div>
          <div>
            <label htmlFor="Hora_entr_ventanilla" className="block text-gray-700">Hora de Entrada Ventanilla:</label>
            <input type="time" id="Hora_entr_ventanilla" name="Hora_entr_ventanilla" className="form-input mt-1 block w-full px-2 py-1 outline-none" />
          </div>
        </div>

        {/* Entregado Ventanilla */}
        <div className="mb-4">
          <label htmlFor="Entr_ventanilla" className="block text-gray-700">Entregado_Ventanilla:</label>
          <select id="Entr_ventanilla" name="Entr_ventanilla" className="form-select mt-1 block w-full px-2 py-1 outline-none" required>
            <option value="">Seleccione</option>
            <option value="mbriones">mloor</option>
            <option value="mbriones">yrodriguez</option>
            {/* Agrega las demás opciones aquí */}
          </select>
        </div>

        {/* Botón de Envío */}
        <div className="text-center">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Enviar
          </button>
        </div>
      </form>
    </div>
    </div>
  )
}
