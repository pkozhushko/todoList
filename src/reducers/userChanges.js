import Users from './usersRoot';
const users = Users();

export default function(state = users, action) {
    switch (action.type) {
      case "ADD_USER":
        return state.concat({
          id: state.length,
          name: action.name,
          surname: action.payload,
          sex: action.sex,
          photo: null,
          tasks: []
        })

      default:
        return state;
    }
}
