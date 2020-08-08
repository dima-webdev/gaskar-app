import { createStore, combineReducers } from "redux";
import initialState from "./store";
import shortid from "shortid";

// Actions
export const CREATE_PROJECT = 'CREATE_PROJECT';

// Action Creators
export const createProject = (data) => ({
    type: CREATE_PROJECT,
    payload: { data },
});

// Reducers
const projectReducer = (state = initialState, action) => {
  switch (action.type) {
      case CREATE_PROJECT: {
          const { title, begin, end, boss, admin } = action.payload.data;
          console.log(action.payload);
          return {
              projects: [
                  ...state.projects,
                  {
                      id: shortid(),
                      title,
                      begin,
                      end,
                      boss,
                      admin
                  }
              ]
          };
      }
      default:
          return state;
  }
};

export const store = createStore(
    combineReducers({
        projects: projectReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);