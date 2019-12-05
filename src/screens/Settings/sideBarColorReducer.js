const initialState = {
  sideBarColor: "red"
};

const sideBarColorReducer = (state = initialState, action) => {
  return { ...state, sideBarColor: action.payload };
};

export default sideBarColorReducer;
