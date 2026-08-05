import api from "./api";

export async function getSettings(){

    const res=
        await api.get(
            "/admin/settings",
        );

    return res.data.data;

}

export async function updateSettings(

    data:any,

){

    return api.put(

        "/admin/settings",

        data,

    );

}