

export const incNum = () => {
    return{ type:"INCREMENT"}
 }
   
 export const decNum = () => {
    return{ type:"DECREMENT"}
 }



const initialState = 0;
  
const change = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT": return state + 1;
    case "DECREMENT": return state - 1;
    default: return state;
  }
}
  
export default change;