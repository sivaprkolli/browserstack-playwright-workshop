//import {test, expect} from '@playwright/test';
import {test} from '../fixtures/login.fixture';
import {expect} from '@playwright/test';

// test.beforeEach(async ({ page }) => {
//   console.log('Before each test');
// });

// test.afterEach(async ({ page }) => {
//   console.log('After each test');
// });

// test.beforeAll(async ({ }) => {
//   console.log('Before all tests');
// });

// test.afterAll(async ({ }) => {
//   console.log('After all tests');
// });

test('Test 1 @hook' ,async ({ loginAction }) => {

  // console.log('Executing Test 1');
  // expect(true).toBe(true);
  console.log(loginAction);
  console.log('Test 1 completed');

});