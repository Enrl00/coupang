import {createContext,useContext, useEffect, useState} from 'react';
import axios from 'axios';

const ProdContext = createContext();




const CategoryContext = createContext();

export const CategoryProvider = (props) => {
    const [category,setCategory]=useState([])
    useEffect(()=>{
        try{
            axios.get('http://43.231.115.191:8085/categories?source_id=1bcc6886-c599-4697-9965-1b3155408b6b').then(function(response){setCategory(response.data)})
        }catch(err){
            console.log(err.message);
        }
    },[category])
        
    const {children} = props;
    return(
        <CategoryContext.Provider value={{category,setCategory}}>
            {children}
        </CategoryContext.Provider>
    )
}
export const useCategoryContext = () => useContext(CategoryContext);

export const ProdProvider = (props) => {
    const [prodInfo, setProdInfo]=useState([])
    const {category}=useCategoryContext()
    useEffect(()=>{
       category.map((categor,ind)=>{
        try{
            axios.get(`http://43.231.115.191:8085/products?category_id=${categor.id}=IwAR3jblfiYXiI2keHfM0MxUJu_bIgmQ-erYKlpqsig_sFSTMVeBJPk36eNmM`).then(function(response){setProdInfo([...prodInfo,{category:categor.id, data:response.data}])})
        }catch(err){
            console.log(err.message);
        }
       })
    },[category])
    const {children} = props;
    return(
        <ProdContext.Provider value={{prodInfo, setProdInfo}}>
            {children}
        </ProdContext.Provider>
    )
}
export const useProdContext = () => useContext(ProdContext);