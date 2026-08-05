import api from "./api";

export async function getAnalytics(){

    const res=
        await api.get(
            "/admin/analytics",
        );

    return res.data.data;

}