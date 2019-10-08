

export const initialState = {
    todos: [
        {
          item: "Learn about reducers",
          completed: false,
          id: 3892987589
        },
        {
            item:"Walk the dog",
            completed: false,
            id: Date.now(),
        }
      ]
    };


    


export const reducer = (state, action) => {
      switch(action.type) {
        case "ADD_TODO":
                return {
                  todos: [ ...state.todos,
                    {
                      item: action.payload,
                      completed: false,
                      id: Date.now()
                    }
                  ]
                };
    case "TOGGLE":
            return {
                todos: state.todos.map(item => {
                if (action.payload === item.id) {
                    return { ...item, completed: !item.completed };
                } else {
                    return item;
                }
                })
            };

    case "CLEAR_TODO":
            return {
                todos: state.todos.filter(item => !item.completed)
            };

        default:
          return state
      }
    }

