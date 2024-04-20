/* eslint-disable react/prop-types */
import { SearchComponent } from "./SearchComponent"
import { TableComponent } from "./TableComponent"

export const ClientComponent = (props) => {
  const { tramites } = props;
  return (
    <div className="mx-7">
      <div className="py-3">
        <span className="text-2xl font-semibold">Consultar Tramites</span>
      </div>
      <SearchComponent/>
      <TableComponent data={ tramites }/>
      
    </div>
  )
}
