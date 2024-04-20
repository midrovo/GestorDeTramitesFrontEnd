/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

const UserHook = (usuario) => {
    const { username, token } = usuario;
    const decode = jwtDecode(token);
    const authorities = JSON.parse(decode.authorities);

    const role = authorities.find(auth => {
        if(auth.authority.startsWith("ROLE")) return auth.authority;
    })

    const [data, setData] = useState({role: role});

    const getData = () => {

        const URI = role.authority === "ROLE_CLIENTE" ? `http://localhost:8080/api/clientes/buscar/${ username }` :
        `http://localhost:8080/api/empleados/${ username }`;

        const response = axios.get(URI, {
            headers: { Authorization: `Bearer ${ token }` }
        })

        return response;
    }

    useEffect(() => {
        getData().then(response => setData({...data, ...response.data}))
    }, [])


    return { data }

}

export default UserHook;