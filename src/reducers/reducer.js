export default function getData(state = [], action) {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        dataInfo: action.payload
      };
    default:
      return state;
  }
}
