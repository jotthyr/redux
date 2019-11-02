const defaultState = {
	jablka: 0,
  gruszki: 0,
  sliwki: 0,
}

const zbierzJablka = ile => ({
	type: 'ADD_APPLES',
  payload: ile,
})

const zbierzGruszki = ile => ({
	type: 'ADD_PEARS',
  payload: ile,
})

const zbierzSliwki = ile => ({
	type: 'ADD_PLUMS',
  payload: ile,
})

const reducer = (state = defaultState, action) => {
	switch (action.type) {
  	case 'ADD_APPLES': 
    	return {
      	...state,
        jablka: state.jablka + action.payload,
      }
      
  	case 'ADD_PEARS': 
    	return {
      	...state,
        gruszki: state.gruszki + action.payload,
      }
      
  	case 'ADD_PLUMS': 
    	return {
      	...state,
        sliwki: state.sliwki + action.payload,
      }
    
    default: return state
  }
}

const store = Redux.createStore(reducer, defaultState)

console.log(JSON.stringify(store.getState(), null, 4))

store.dispatch( zbierzJablka(5) )
store.dispatch( zbierzJablka(3) )

console.log(JSON.stringify(store.getState(), null, 4))

store.dispatch( zbierzSliwki(12) )

console.log(JSON.stringify(store.getState(), null, 4))