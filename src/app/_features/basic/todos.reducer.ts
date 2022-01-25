
const initialState ={
  toDoList: []
};

interface ActionWithPayload {
    payload?: any;
    type: string;
  }

export function toDoReducer(state = initialState, { type, payload }: ActionWithPayload) {

  switch (type) {
    case 'SET_TODO_LIST':
        const newState = {
            ...state,
            toDoList: [...payload]
          }
      return newState;
    default:
      return state;
  }

}
