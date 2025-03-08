/**
 * 🤘 Welcome to Stagehand!
 *
 * TO RUN THIS PROJECT:
 * ```
 * npm install
 * npm run start
 * ```
 *
 * To edit config, see `stagehand.config.ts`
 *
 */
import {
  type Page,
  type BrowserContext,
  Stagehand,
} from "@browserbasehq/stagehand";
import { z } from "zod";
import chalk from "chalk";
import dotenv from "dotenv";
import { simplePVP } from "./tests/simpleSettlement.js";
import { loginWorkflow } from "./workflows/loginWorkflow.js";

dotenv.config();

export async function main({
  page,
  context,
  stagehand,
}: {
  page: Page;
  context: BrowserContext;
  stagehand: Stagehand;
}) {
  try {
    const username = process.env.LOGIN_USERNAME;
    const password = process.env.LOGIN_PASSWORD;

    if (username == undefined || password == undefined) {
      throw new Error("username and password are not configured in the env");
    }

    const isLoggedIn = await loginWorkflow(page, username, password);

    if (isLoggedIn) {
      console.log(chalk.green("Successfully logged in!"));
    } else {
      console.log(chalk.red("Login might have failed. Please verify."));
    }
  } catch (error) {
    console.error(chalk.red("Error during login:"), error);
    throw error;
  }
}
