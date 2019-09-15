export function fetchData() {
  return dispatch => {
    return new Promise((res, rej) => {
      fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then(res => res.json())
        .then(data => {
          localStorage.setItem("dataInfo", JSON.stringify(data));
          dispatch({ type: "GET_DATA", payload: data });
          res();
        })
        .catch(err => {
          console.log(err);
          rej();
        });
    });
  };
}
