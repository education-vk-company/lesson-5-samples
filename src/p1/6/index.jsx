import * as f1 from './1.Greeting';
import * as f2 from './2.LoginControl';

export const Six1 = (props) => {
  return <f1.Greeting {...props} />
};

export const Six2 = () => {
  return <f2.LoginControl />
};
