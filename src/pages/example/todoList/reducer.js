export const reducer = (state, action) => {
    // if(JUtilsValid.isEmpty(state)) return;
    // console.log("변경 데이터", state.list, action.payload);
    console.log("변경 데이터", action.payload);
    switch (action.type) {
        case 'add':
            return {...state, list: [...state.list, {...action.payload, id: Date.now()}]};
        case 'update':
            return {
                ...state,
                list: state.list.map((prev) => (
                    prev.id === action.payload.id ? {...prev, ...action.payload} : prev
                ))
            }
        case 'delete':
            return {
                ...state,
                list: state.list.filter(prev => prev.id !== action.payload.id)
            };
        default:
            return state;
    }
}
