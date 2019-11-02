const defaultState = 'yellow'

const stop = () => ({
	type: 'STOP',
})

const run = () => ({
	type: 'RUN',
})

const prepareToStop = () => ({
	type: 'PREPARE_TO_STOP',
})

const prepareToRun = () => ({
	type: 'PREPARE_TO_RUN',
})

const reducer = (state = defaultState, action) => {
	switch (action.type) {
  	case 'STOP': return 'red'
  	case 'PREPARE_TO_STOP': return 'red and yellow'
  	case 'RUN': return 'green'
  	case 'PREPARE_TO_RUN': return 'yellow'
    default: return state
  }
}

const store = Redux.createStore(reducer, defaultState)

store.dispatch(run())
console.log( store.getState() ) 