import {useQuery} from "@tanstack/react-query";
import {PayloadContent} from "@/types";
import contentService from "@/services/content.service";


export function useContent<T = PayloadContent>(
  type: string,
  slug: string,
  options?: any
) {
  return useQuery({
    queryKey: [type, slug],
    queryFn: () => contentService.findContent<T>(type, slug).then(res => res.data),
    ...options,
  });
}
