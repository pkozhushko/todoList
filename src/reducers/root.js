import { combineReducers } from 'redux';
import UsersRoot from './usersRoot';
import ActiveUser from './activeUser';
import Tasks from './tasks';
import UserChanges from './userChanges';

const rootReducers = combineReducers({
  usersRoot: UsersRoot,
  active: ActiveUser,
  tasks: Tasks,
  users: UserChanges
});

export default rootReducers;
