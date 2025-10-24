import {axiosClassic} from "@/api/axios";
import {AxiosResponse} from "axios";



class ContentService {

  async findContent<T = never>(type:string, slug:string):Promise<AxiosResponse<T>> {
    return await axiosClassic.get(`/api/${type}/${slug}`);
  }

  async findContentById<T = unknown>(type:string, slug:string, id:number):Promise<AxiosResponse<T>> {
    return await axiosClassic.get(`/api/${type}/${slug}/${id}`);
  }

}

export default new ContentService();
