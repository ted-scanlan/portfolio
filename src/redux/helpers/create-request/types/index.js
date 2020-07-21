export default (name) => {
  if (!name) {
    return undefined;
  }

  const TYPE = name.toUpperCase();

  return {
    pending: `FETCH_${TYPE}`,
    success: `FETCH_${TYPE}_SUCCESS`,
    error: `FETCH_${TYPE}_ERROR`,
    reset: `FETCH_${TYPE}_RESET`,
  };
};

// this is whats needed so the reducer stores the data in the right place.

// the type is page specific. as it includes the 'name'
//so when the type is used in the action creators (pending/ error/ success/ reset) these have the page name in to.

// its a question of undferstanding the exact process and order of things in redux.

// the api is called once when the requestHome action is called in the useEffect on the page.
// but the reducer is called 4 times, one for each of the indiviudal reducers that make up the combined root reducer.
// so if theres nothing to single out which page the data is for, it will just add it to all 4 reducers, so you'll get the home info in the state of contact and projects etc.
// this isnt what we want. so we need a way to make sure the data is saved to state for the right reducer, so we use the types object which specifices the name of the page we are maing a request for.

// i didnt now that it will
