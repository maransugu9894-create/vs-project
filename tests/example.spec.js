import {test} from '@playwright/test';
import { LoginPage} from '../pages/Login';
import user from '../data/user-data.json'
test('SauceDemo',async({page})=>{
  const Login = new LoginPage(page);
  await Login.login(user.user4.name,user.password);
  await page.waitForTimeout(3000);
})

