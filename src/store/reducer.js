
const initailState = {
    count:0
}
export const Reducer = function ( initailState, action) {
    switch (action.type) {
      case "INCREMENT":
        return initailState.count + 1;
      case "DECREMENT":
        return initailState - 1;
      default:
        return initailState.count;
    }
};