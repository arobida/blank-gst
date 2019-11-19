import React, {createContext} from 'react'

const values ={
greeting:'Hello World'
}

export const RouteContext = createContext(values)

export const RouteProvider=({children})=>{
	return (
		<RouteContext.Provider value={values}>
		{children}
		</RouteContext.Provider>
	)
}