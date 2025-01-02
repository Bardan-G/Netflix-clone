import useSWR from "swr";
import fetcher from "@/lib/feacher";


const useBillboard = () =>{
    const {data, error, isLoading } = useSWR('/api/randdom', fetcher,{
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    return{
        data, 
        error,
        isLoading
    }
}
export default useBillboard;