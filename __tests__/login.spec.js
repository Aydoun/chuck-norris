import React from 'react';
import { validatePassword } from '../src/utils';
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

  expect(validatePassword(alphaNumericString)).toEqual(ERROR_MESSAGES.ONLY_ALPHABET);
  expect(validatePassword(onlyAlphabet)).not.toEqual(ERROR_MESSAGES.ONLY_ALPHABET);
});

