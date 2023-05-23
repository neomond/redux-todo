export const addTodo = (task: any) => {
  return {
    type: 'ADD_TODO',
    payload: task,
  };
};
