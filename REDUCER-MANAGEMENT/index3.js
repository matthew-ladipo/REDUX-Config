const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers

// ACTION - OBJECT WITH A TYPE PROPRETY

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    INFO: "First redux action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    INFO: "second redux action",
  };
}

// REDUCER - ACCEPT STATE AND ACTIONS AS ARGUMENTS THEN RETURN THE NEXT STATE
// (PreviouState, action) => newState


const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCream: 20,
};

// reducer fuction
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const IceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };

    default:
      return state;
  }
};

// STORE
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: IceCreamReducer
})
const store = createStore(rootReducer);
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
