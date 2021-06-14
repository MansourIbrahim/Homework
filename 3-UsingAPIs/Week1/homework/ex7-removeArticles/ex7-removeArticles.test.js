const { articles, removeArticles } = require('./ex7-removeArticles');

// Grammatic articles (English)
const sourceText =
  'What distinguishes Pragmatic Programmers? ' +
  "We feel it's an attitude, a style, a philosophy of approaching problems and " +
  'their solutions. They think beyond the immediate problem, always trying to ' +
  'place it in its larger context, always trying to be aware of the bigger ' +
  'picture.';

const expectedText =
  'What distinguishes Pragmatic Programmers? ' +
  "We feel it's attitude, style, philosophy of approaching problems and " +
  'their solutions. They think beyond immediate problem, always trying to ' +
  'place it in its larger context, always trying to be aware of bigger ' +
  'picture.';

describe('removeArticle', () => {
  test('should remove all articles from a string of English text', () => {
    // TODO replace with your own code
    expect(false).toBe(true);
  });
});
