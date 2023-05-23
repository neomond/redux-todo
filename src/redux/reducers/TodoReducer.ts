const initialState = {
  incompleteTodos: [],
};

export function TodoReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        incompleteTodos: [...state.incompleteTodos, action.payload],
      };
    default:
      return state;
  }
}
