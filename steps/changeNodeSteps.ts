import { Page } from "@browserbasehq/stagehand";
import { actWithCache } from "../utils.js";

type Node = "HBEU" | "HBUS";

export async function switchNodes(page: Page, switchToNode: Node) {
  try {
    await actWithCache(
      page,
      "click on the 'entity' dropdown present in the header in the top left hand corner"
    );

    await actWithCache(
      page,
      `click the ${switchToNode} option from the dropdown`
    );

    return true;
  } catch (error) {
    console.error("Failed to switch nodes:", error);
  }
}
