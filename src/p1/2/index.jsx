import * as f1 from './1.components';
import * as f2 from './2.attributes';
import * as f3 from './3.expressions';
import * as f4 from './4.xss';

export const Second1 = () => {
  return f1.Wrapper;
};

export const Second2 = () => {
  return f2.attributesEl;
};

export const Second3 = () => {
  return f3.element;
};

export const Second4 = () => {
  return (
    <>
      <div>
        <h1>Secure:</h1>
        {f4.xssEl}
      </div>
      <div>
        <h1>Insecure:</h1>
        {f4.xssEl2}
      </div>
    </>
  );
};
