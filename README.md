# CU Advancement Component Library

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Here lies the CU Advancement component library. The library is built using React, Rebass, and ...

## Usage

Install the package like normal.

```bash
yarn add @cu-advancement/component-library
```

```js
import { BaseButton as Button } from '@cu-advancement/component-library';

function SubmitButton({ handleClick }) {
  return (
    <Button onClick={handleClick} variant="primary" isDisabled>
      Submit
    </Button>
  );
}
```

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo
[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
