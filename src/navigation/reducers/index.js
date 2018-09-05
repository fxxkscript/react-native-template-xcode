import { RootNavigator } from '../navigators';
import { WELCOME } from '../screen_names';

const nav = (state, action) => {
  const nextState = RootNavigator.router.getStateForAction(
    action,
    state
  );

  return nextState || state;
};

export default nav;