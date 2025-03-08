import { Page } from "@browserbasehq/stagehand";

type Node = "HBEU" | "HBUS";

export async function switchNodes(page: Page, switchToNode: Node) {
  try {
    // First, observe and act to click the dropdown
    const dropdownResults = await page.observe({
      instruction:
        "click on the 'entity' dropdown present in the header in the top left hand corner",
      returnAction: true,
    });
    console.debug("drop down results");
    console.debug(dropdownResults);

    await page.act(dropdownResults[0]);

    // Then, observe and act to select the desired option
    const optionResults = await page.observe({
      instruction: `click the ${switchToNode} option from the dropdown`,
      returnAction: true,
    });

    console.debug("option results");
    console.debug(optionResults);

    return await page.act(optionResults[0]);
  } catch (error) {
    console.error("Failed to switch nodes:", error);
  }
}
