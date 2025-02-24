const initialState = {
    isToggled: false,
};

export default function toggleReducer(state = initialState, action) {
    switch (action.type) {
        case "TOGGLE":
            return { ...state, isToggled: !state.isToggled };
        default:
            return state;
    }
}
