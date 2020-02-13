const initialState = [
    "Kamilah",
    "Stuart"
];


const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    // Add a Name Tag
    if (type === "ADD_NAME") {
        return {
            ...state,
            initialState: [...state]
        }
     }
    //  STATE NOT WORKING

   else {
     return state;
}


const initialState = { value: 0 };

const reducer = (state = initialState, action) => {
    const { type } = action;
    if (type === "INCREMENT") {
        return {
            value: state.value + 1
        };
    }
    return state;
}