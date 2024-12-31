import useSWR from "swr";
import fetcher from "@/lib/feacher";

const useCurrentUser = () =>{
    const {data, error , isLoading, mutate} = useSWR('/api/current',fetcher)

    return{
        data,
        error,
        isLoading,
        mutate
    }
};

export default useCurrentUser;
