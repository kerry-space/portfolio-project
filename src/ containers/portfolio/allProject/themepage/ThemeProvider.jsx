import React,{createContext,useState,useEffect} from "react";



const themes = {
    dark: {
        backgroundColor: "black",
        color: "white"
    },
    white: {
        backgroundColor: "white",
        color: "black"
    }
}


const initialState = {
    theme : themes.white,
    handleToggleIcon : () => {},
    isDarkTheme : false 
}


 

const ThemeContext = createContext(initialState);

const ThemeProvider = ({children}) =>{
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        const extractDarkThemeFlagFromLocalstorage = JSON.parse(localStorage.getItem("isDarkTheme"))
        setIsDarkTheme(extractDarkThemeFlagFromLocalstorage !== null ? extractDarkThemeFlagFromLocalstorage : false);
        
    },[]);

    const handleToggleIcon = () =>{
        const updateIsDarkTheme = !isDarkTheme;
        localStorage.setItem("isDarkTheme", JSON.stringify(updateIsDarkTheme));
        setIsDarkTheme(updateIsDarkTheme)
        
    }

   

    const theme =  isDarkTheme ? themes.dark : themes.white;

    return(
        <ThemeContext.Provider value={{theme, handleToggleIcon,isDarkTheme}}>
            {children}
        </ThemeContext.Provider>
    )
} 

export {ThemeContext, ThemeProvider};