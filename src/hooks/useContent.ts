import {useQuery} from "@tanstack/react-query";
import ContentService from "@/services/content.service";


export const useContent = (
  type: string, slug: string) => {

  const {data, isLoading, isError} = useQuery({
    queryKey: [slug],
    queryFn: async () => await ContentService.findContent(type, slug)
  })

  return {data: data?.data, isLoading, isError};
}
