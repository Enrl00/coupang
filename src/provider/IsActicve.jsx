import {createContext,useContext, useState} from 'react';

const ActiveContext = createContext();

export const ActiveProvider = (props) => {
    const {children} = props;
    const [isActive, setIsActive] = useState(true);
    return(
        <ActiveContext.Provider value={{isActive, setIsActive}}>
            {children}
        </ActiveContext.Provider>
    )
}
export const useActiveContext = () => useContext(ActiveContext);

const IsLoadingContext =createContext()
export const LoadingProvider = (props) => {
    const {children} = props;
    const [isLoading, setIsLoading] = useState(true);
    return(
        <IsLoadingContext.Provider value={{isLoading, setIsLoading}}>
            {children}
        </IsLoadingContext.Provider>
    )
}
export const useLoadingContext = () => useContext(IsLoadingContext);