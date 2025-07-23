import { createContext, useContext, useReducer } from 'react'

const store = createContext()
store.displayName = 'Store'

export const useStore = () => useContext(store)

export function StoreProvider ({ children, reducer, initialState }) { 

    const [ state, dispatch ] = useReducer(reducer, initialState)
    
    return (
      <store.Provider value={[state, dispatch]}>{ children }</store.Provider>
    )
}