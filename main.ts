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
  await simplePVP(page);
}
