import {createContext,useContext, useEffect, useState} from 'react';
import axios from 'axios';
import { useLoadingContext } from './IsActicve';

const ProdContext = createContext();




const CategoryContext = createContext();

export const CategoryProvider = (props) => {
    const [category,setCategory]=useState([])
    const {setIsLoading}=useLoadingContext()
    useEffect(()=>{
        try{
            setIsLoading(true)
            axios.get('http://43.231.115.191:8085/categories?source_id=1bcc6886-c599-4697-9965-1b3155408b6b').then(function(response){
                // axios.post('http://43.231.113.22/translate',{response}).then(function(response){
                //     setCategory(response.data) 
                //     setIsLoading(false)
                // })
                setCategory(response.data) 
                setIsLoading(false)
            })
        }catch(err){
            console.log(err.message);
        }
    },[])
    const {children} = props;
    return(
        <CategoryContext.Provider value={{category,setCategory}}>
            {children}
        </CategoryContext.Provider>
    )
}
export const useCategoryContext = () => useContext(CategoryContext);

const CurrentCategoryContext = createContext();

export const CurrentCategoryProvider = (props) => {
    const [currentCategory,setCurrentCategory]=useState({})
        
    const {children} = props;
    return(
        <CurrentCategoryContext.Provider value={{currentCategory,setCurrentCategory}}>
            {children}
        </CurrentCategoryContext.Provider>
    )
}
export const useCurrentCategoryContext = () => useContext(CurrentCategoryContext);

export const ProdProvider = (props) => {
    const [prodInfo, setProdInfo]=useState({})
    const {currentCategory}=useCurrentCategoryContext()
    useEffect(()=>{
        const FetchProd =async()=>{
            try{
                await axios.get(`http://43.231.115.191:8085/products?category_id=0aab4f98-0116-4e39-a1dd-809d4c0eede0&fbclid=IwAR0XcZ21kzvsV9sIgVHOOBOqSr8slyVm8eb0YRqYgbpwZSVQAb9NVmJhp_0`).then(function(response){
                    setProdInfo(response.data)
                })
            }catch(err){
                console.log(err);
            }
        }
        FetchProd()
    },[currentCategory])
    const {children} = props;
    return(
        <ProdContext.Provider value={{prodInfo, setProdInfo}}>
            {children}
        </ProdContext.Provider>
    )
}
export const useProdContext = () => useContext(ProdContext);
