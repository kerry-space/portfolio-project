import React, { createRef, useEffect, forwardRef, useState } from "react";
import CustomHooks from "./TCustomHooks";
import TWindowsSize from "./TWindowsSize"


 
/*const Test =() =>{
   
    const inputRef = createRef(null);
    const divRef = createRef(null);


    useEffect(() => {
        console.log(inputRef.current)
        inputRef.current.focus();

        setTimeout(() => {
            divRef.current.textContent = "some text is changed now"
        }, 3000);
    }, [])

    return(
       <div>
        <input 
            name= "name"
            defaultValue={"hello world"}
            placeholder="some input"
            ref={inputRef}
        />

        <ChildComponent ref={divRef}/>
        <div >some text</div>
       </div>
    )
}

const ChildComponent = forwardRef((prop, ref) => {
    return <div ref={ref}>some text</div>
})*/


/*
const Test = () =>{

    const nameRef = createRef(null);
    const ageRef = createRef(null);
    const [formData,setFormData] = useState({})
    
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const extraCurrentValueFromName = nameRef.current.value;
        const extraCurrentValueFromAge = ageRef.current.value; 
      

        setFormData({
            name :extraCurrentValueFromName,
            age : extraCurrentValueFromAge
        });

        nameRef.current.value = "";
        ageRef.current.value = ""

    }


    return(
        <div>
            <form action="" onSubmit={handleFormSubmit}>
            <input type= "text" name="name" placeholder="Name" ref={nameRef}/>
            <input type="number" name="age" placeholder="Age" ref={ageRef}/>
            <button type="submit">Submit</button>
            </form>

            {
                
                formData && Object.keys(formData).length > 0 ?
                <p>Name is {formData.name} and the Age is {formData.age}</p> : "nothong"
            }
        </div>
    )
}*/






const Test = () =>{
    const {data , isLoading, getDataOnButton} = CustomHooks("https://fakestoreapi.com/products#", {})
    const windowSize = TWindowsSize();
    console.log(data)
    console.log(windowSize)
    return(
        <div>
             <button onClick={getDataOnButton}>Call api</button>
        </div>
    )
}
  

export default Test;


