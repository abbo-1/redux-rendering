const initialState = [
    {
        radius: 50,
        color: "#FF00FF"
    },
    {
        radius: 30,
        color: "#FF99AA"
    },
    {
        radius: 60,
        color: "#0000FF"
    },
    {
        radius: 10,
        color: "#000000"
    },
];

function deepClone(newObject) {
    return JSON.parse(JSON.stringify(newObject));
}

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    // ACTION: Add a random circle
    if (type === "ADD_CIRCLE") {

        let newState = deepClone(state);
        newState.push({
            radius: 50,
            color: "#FF99AA"
         } )
        return newState

    }

   else {
     return state;
   }
}