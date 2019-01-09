import { validatePassword, swapJoke } from '../src/utils';
import { ERROR_MESSAGES } from '../src/constants';

const ERRORS = {
    PASSWORD_TOO_LONG : "PASSWORD_TOO_LONG",
    ONLY_ALPHABETIC: "ONLY_ALPHABETIC",
}


test('Password should contain no longer than 32 chatacters', () => {
  const longString = 'aassddffvvccxxzzbbssjjrruueeiiddo';
  const shortString = 'this is a short string';

  expect(validatePassword(longString)).toEqual(ERROR_MESSAGES.PASSWORD_TOO_LONG);
  expect(validatePassword(shortString)).not.toEqual(ERROR_MESSAGES.PASSWORD_TOO_LONG)
});

test('Password should only contain lower case alphabetic characters', () => {
  const alphaNumericString = 'string 12 is not valid';
  const onlyAlphabet = 'this is only alphabetic string';

  expect(validatePassword(alphaNumericString)).toEqual(ERROR_MESSAGES.ONLY_LOWER_ALPHABET);
  expect(validatePassword(onlyAlphabet)).not.toEqual(ERROR_MESSAGES.ONLY_LOWER_ALPHABET);
});

test('Password should not contain i, I, O', () => {
  const wrong1 = 'this is not a valid password';
  const wrong2 = 'HOW WRONG COULD BE';
  const wrong3 = 'IloveNYC';

  expect(validatePassword(wrong1)).toEqual(ERROR_MESSAGES.FORBIDDEN_LETTERS);
  expect(validatePassword(wrong2)).toEqual(ERROR_MESSAGES.ONLY_LOWER_ALPHABET);
  expect(validatePassword(wrong3)).toEqual(ERROR_MESSAGES.ONLY_LOWER_ALPHABET);
});

test('Password should contain at least two over-lapping pairs of letters', () => {
  const wrong1 = 'hjknsdaew';
  const wrong2 = 'ffghgfreds';

  expect(validatePassword(wrong1)).toEqual(ERROR_MESSAGES.LETTERS_PAIRS);
  expect(validatePassword(wrong2)).toEqual(ERROR_MESSAGES.LETTERS_PAIRS);
});

test('Service should swap Elements from array', () => {
  // Arrange
  let arr1 = [{ id: 1, text: 'joke1' }];
  let arr2 = [{ id: 23, text: 'joke2' }, { id: 25, text: 'joke3' }];

  // Act
  let result = swapJoke(1, arr1, arr2);

  // Expect
  expect(result.source.length).toBe(0);
  expect(result.destination.length).toBe(3);
  expect(result.destination[2].text).toEqual('joke1');
});

