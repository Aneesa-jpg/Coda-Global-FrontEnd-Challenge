import React, { createContext, useReducer} from 'react';

import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
    recipes:[],
    loading: true,
    error:null
};


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    async function getRecipes(){
        try {
            const res = await axios.get('http://starlord.hackerearth.com/recipe');
            console.log(res);
            dispatch({
                type: 'GET_RECIPES',
                payload: await res.data
                
              });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.res.data.error
              });
        }
    }
    

    return <GlobalContext.Provider value={{
    recipes : state.recipes,
    getRecipes}}>
        {children}
    </GlobalContext.Provider>
}