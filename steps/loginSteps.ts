import { type Page } from "@browserbasehq/stagehand";
import { actWithCache } from "../utils.js";
import { z } from "zod";

export async function navigateToLoginPage(page: Page) {
  const loginURL = process.env.LOGIN_URL;
  if (loginURL == undefined) {
    throw new Error("login url is not set in the env");
  }
  await page.goto(loginURL);
  await page.waitForLoadState("networkidle");
}

export async function clickSignInButton(page: Page) {
  await page.act({
    action: "click on the 'sign in' button",
  });
}

export async function fillLoginForm(
  page: Page,
  username: string,
  password: string
) {
  await page.act({
    action: "fill in the form with %username% and %password%",
    variables: { username, password },
  });
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
