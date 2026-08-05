import api from "./api";

export async function getInventory(){

    const res=
        await api.get(
            "/admin/products",
        );

    return res.data;

}