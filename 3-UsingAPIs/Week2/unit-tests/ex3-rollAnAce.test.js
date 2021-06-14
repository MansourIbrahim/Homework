/* eslint-disable hyf/camelcase */
const walk = require('acorn-walk');
const { beforeAllHelper } = require('../../../test-runner/unit-test-helpers');

describe('ex3-rollAnAce', () => {
  const state = {};
  let rootNode;

  beforeAll(async () => {
    ({ rootNode } = beforeAllHelper(__filename, {
      noRequire: true,
      parse: true,
    }));

    rootNode &&
      walk.simple(rootNode, {
        TryStatement({ handler }) {
          if (handler.type === 'CatchClause') {
            state.tryCatch = true;
          }
        },
        FunctionDeclaration({ async }) {
          if (async) {
            state.async = true;
          }
        },
        AwaitExpression() {
          state.await = true;
        },
      });
  });

  test('should use async/wait', () => {
    expect(state.async).toBeDefined();
    expect(state.await).toBeDefined();
  });

  test('should use try/catch', () => {
    expect(state.tryCatch).toBeDefined();
  });
});
