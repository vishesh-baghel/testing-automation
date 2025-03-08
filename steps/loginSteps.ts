import { type Page } from "@browserbasehq/stagehand";
import { actWithCache, getEnvVar } from "../utils.js";
import { z } from "zod";

export async function navigateToLoginPage(page: Page) {
  const loginURL = getEnvVar("LOGIN_URL");
  await page.goto(loginURL!);
  await page.waitForLoadState("networkidle");
}

export async function clickSignInButton(page: Page) {
  await actWithCache(page, "click on the 'sign in' button");
}

export async function fillLoginForm(
  page: Page,
  username: string,
  password: string
) {
  await actWithCache(page, `fill in the form with username: ${username}`);
  await actWithCache(page, `fill in the form with password: ${password}`);
}

export async function submitForm(page: Page) {
  await actWithCache(page, "Click on the 'sign in' button to submit the form");
}

export async function verifyLogin(page: Page) {
  const { isLoggedIn } = await page.extract({
    instruction:
      "Check if we are logged in by looking for user-specific elements on the top right corner of the page",
    schema: z.object({ isLoggedIn: z.boolean() }),
    useTextExtract: false,
  });

  return isLoggedIn;
}
