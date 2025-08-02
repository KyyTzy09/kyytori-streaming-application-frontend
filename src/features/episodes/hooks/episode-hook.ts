import { useQuery } from "@tanstack/react-query"
import { episodeService } from "../services/episode-service"

export const useGetEpsLink = (epsTitle: string) => {
    return useQuery({
        queryKey: ["epslink", epsTitle],
        queryFn: async () => await episodeService.epsLink({ epsTitle }),
        staleTime: 2 * 60 * 1000
    })
}

