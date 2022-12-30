import { createContext, useContext, useEffect, useState } from "react";
import axios from '../config/axios'

const TransactionContext = createContext();

export default function TransactionContextProvider({children}){
    const [transactions, setTransactions] = useState([]);
    const [filter , setFilter] = useState({
        searchTerm:'',
        month:'',
        year:''
    });

    const [pagination,setPagination] = useState({
        pageLimit: 10,
        currentPage: 1
    })

    useEffect(()=>{
        const fetchTransaction = async()=> {
            const res = await axios.get('/transactions');
            setTransactions(res.data.transactions)
        }
        fetchTransaction();
    },[])

 return <TransactionContext.Provider value={{transactions}}>
    {children}
 </TransactionContext.Provider>;
}


export function useTransaction(){
    return useContext(TransactionContext);
}