import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {sum, isNullOrEmpty} from './utils';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const keyPartners = getByText('Key Partners');
  expect(keyPartners).toBeInTheDocument();
});

it('sums numbers', () => {
  expect(sum(1,2)).toEqual(3)
  expect(sum(2,2)).toEqual(4)
})

test('checkes if object is null or empty', () => {
  expect(isNullOrEmpty({})).toEqual(true);
  expect(!isNullOrEmpty({})).toEqual(false);
  expect(!isNullOrEmpty({key: 'value'})).toEqual(true);
})
