import axios from "axios";

const myaxios = axios.create({
    baseURL: "",
})

const api = {
    getBlogList: async (page: number) => {
        if (!page) {
            page = 1;
        }
        try {
            const result = await myaxios.get(`blogs?populate=*&fields[0]=title&fields[1]=createdAt&pagination[1]=${page}&pagination[pageSize]=10&sort[0]=id`);
            return result.data;
        } catch (error: any) {
            console.log("error ->", error?.response)
            return {};
        }
    },
    getSingleBlog: async (id: string) => {
        try {
            const result = await myaxios.get(`blogs/${id}?populate=*`);
            console.log("axios -->", result.data);
            return result.data;
        } catch (error: any) {
            console.log("error ->", error?.response)
            return {};
        }
    }
}


export default api;