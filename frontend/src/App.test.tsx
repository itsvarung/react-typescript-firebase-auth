import React from 'react';
import App from './App';
import {shallow} from "enzyme"

test('renders learn react link', () => {
  expect(shallow(<App />)).toBeTruthy()
});
