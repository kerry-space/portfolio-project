import React,{useState, useEffect} from "react";

const CustomHooks = (apiUrl, options = {}) =>{
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    
 

         const getDataOnButton = async () =>{
            setIsLoading(true)
             const response = await fetch(apiUrl, {...options});
             const data = await response.json();
             if(data && data.length){
                 setData(data);
                 setIsLoading(false);
             }
        };



    return(
        {data , isLoading, getDataOnButton}
    )
}

export default CustomHooks;