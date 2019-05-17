export default function(state = null, action) {
    switch (action.type) {
      case "USER_SELECTED":
        return action.payload.tasks;

      case "ADD_TASK":
        return state.concat({
            name: action.payload,
            complete: false,
            edit: false
          });

      case "DELETE_TASK":
        return state.filter(function(currentValue, index) { return(index !== action.payload)});

      case "COMPLETE_TASK":
        state[action.payload].complete = !state[action.payload].complete;
        return [...state];

      case "EDIT_STATE":
        state[action.payload].edit = !state[action.payload].edit;
        return [...state];

      case "EDIT_TASK":
        state[action.taskID].name = action.payload;
        state[action.taskID].edit = !state[action.taskID].edit;
        return [...state];

      default:
        return state;
    }
}
