export const todoReducer = ( initialState , action ) => {

    console.log(initialState)
    console.log(action)
    switch (action.type) {

        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ];
    
        default:
            return initialState;
    }

}