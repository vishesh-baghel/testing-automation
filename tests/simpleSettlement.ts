import { type Page } from "@browserbasehq/stagehand";
import chalk from "chalk";
import { loginWorkflow } from "../workflows/loginWorkflow.js";
import { switchNodes } from "../steps/changeNodeSteps.js";
import { clickOnApplyButton, selectDateRange } from "../steps/filterSteps.js";
import { getEnvVar } from "../utils.js";

export async function simplePVP(page: Page) {
  await login(page);
  await switchNode(page);
  await selectValueDateRange(page);
  await clickOnApplyFilters(page);
  await confirmAndSettleNettingGroup(page);
}

async function login(page: Page) {
  try {
    const username = getEnvVar("LOGIN_USERNAME");
    const password = getEnvVar("LOGIN_PASSWORD");

    const isLoggedIn = await loginWorkflow(page, username!, password!);

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

async function switchNode(page: Page) {
  try {
    const success = await switchNodes(page, "HBEU");

    if (success) {
      console.log(chalk.green("Successfully switched the node"));
    } else {
      console.log(
        chalk.red("Switching nodes might have failed. Please verify.")
      );
    }
  } catch (error: any) {
    console.error(chalk.red("Error during node switching"), error);
    throw error;
  }
}

async function selectValueDateRange(page: Page) {
  try {
    const dateSelected = await selectDateRange(page);

    if (dateSelected) {
      console.log(chalk.green("Successfully selected the value date range"));
    } else {
      console.log(
        chalk.red("Value date selection might have failed. Please verify.")
      );
    }
  } catch (error: any) {
    console.error(chalk.red("Error during value date range selection"), error);
    throw error;
  }
}
async function clickOnApplyFilters(page: Page) {
  try {
    const clicked = await clickOnApplyButton(page);

    if (clicked.success) {
      console.log(
        chalk.green("Successfully clicked on the apply filters button")
      );
    } else {
      console.log(
        chalk.red(
          "Clicking on apply filters button have failed. Please verify."
        )
      );
    }
  } catch (error: any) {
    console.error(
      chalk.red("Error during clicking apply filter button"),
      error
    );
    throw error;
  }
}
function confirmAndSettleNettingGroup(page: Page) {
  throw new Error("Function not implemented.");
}
