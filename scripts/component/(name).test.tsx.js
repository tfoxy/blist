module.exports = ({ name }) => `\
import React from 'react';
import { create } from 'react-test-renderer';
import ${name} from './${name}';

describe('${name} component', () => {
  /*
  it('should be created successfully', () => {
    const component = create(<${name} />);
    const instance = component.root;
    assert(instance);
  });
  */
});
`;
