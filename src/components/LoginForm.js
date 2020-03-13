import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { typography } from '../shared/styles';

import { Button } from './Button';

export function LoginForm({ onClick }) {
  const [theName, setName] = useState('');
  const [thePassword, setPassword] = useState('');

  return (
    <div>
      <label>
        Name
        <input type="text" value={theName} onChange={e => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Password
        <input type="password" value={thePassword} onChange={e => setPassword(e.target.value)} />
      </label>
      <br />
      <Button appearance="primary" onClick={() => onClick({ name: theName, pass: thePassword })}>
        Login
      </Button>
    </div>
  );
}

LoginForm.propTypes = {
  handleClick: PropTypes.func,
};

// LoginForm.defaultProps = {
//   handleClick: () => {
//     alert('Foo');
//   },
// };
