# mocha sinon traceur example

A simple example project using mocha, sinon and ES6 (by using traceur).

# Install

1. Run `npm install` this will set up all deps this project needs
2. Run `npm test` and all tests should be green.

# What is this an example for?

## TDD with ES6

The initial pain I had was to get up to speed with ES6 (using traceur) to be compatible
with all browsers. So I tried out jasmine-node with it, but failed misserably.
Of course I saw [mocha-traceur](https://github.com/domenic/mocha-traceur) which
seemed to make it all a breeze. But who believes documentation, right?
So I had to try it. And it worked out of the box, just the way I wanted it.

I used a bit of ES6 in the initial test, just the following:

```js
import {Some} from './test' // importing a module

describe('something', () => { // using the arrow function
  it('that should work', () => {
  });
});
```

[traceur](https://github.com/google/traceur-compiler/wiki/LanguageFeatures) does support all that.
Of course a traceur transpiler (setup) was needed, so I used the above mentioned
mocha-traceur which just required me to run `mocha --compilers js:mocha-traceur src/*.js`
as you find it in the [package.json](https://github.com/uxebu/mocha-sinon-traceur-example/blob/fb354685b590390f8695f5ecee890c4f9072f944/package.json#L7).
This takes away the pain to manually transpile it, it always does that when the tests
are run.

Of course I also made the `npm test` run, using just this snippet. Done.

## Spying, mocking and stubbing

Next up I wanted a solution that makes spying etc. easy.
Easy fo rme means that it cleans up after itself. When I create a spy in a test
I want it to be gont after test, except of course I declare it in a
beforeEach() (which isn't covered here yet).

## Looking ahead

webpack es6-loader