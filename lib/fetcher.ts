import axios from "axios";

// const fetcher  = async (url: string) =>  {

//     const response = await axios.get(url,{

//     });
//     console.log(response);
    
// }

const fetcher =(url: string) => axios.get(url).then((res)=> res.data);
 
export default fetcher;