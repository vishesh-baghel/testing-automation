// workflows/loginWorkflow.ts
import { type Page } from "@browserbasehq/stagehand";
import {
  navigateToLoginPage,
  clickSignInButton,
  fillLoginForm,
  verifyLogin,
} from "../steps/loginSteps.js";

export async function loginWorkflow(
  page: Page,
  username: string,
  password: string
) {
  await navigateToLoginPage(page);
  await clickSignInButton(page);
  await fillLoginForm(page, username, password);
  await clickSignInButton(page); // click again to submit
  return await verifyLogin(page);
}
