import { Page } from "@browserbasehq/stagehand";
import { actWithCache, readCache, simpleCache } from "../utils.js";

export async function selectNettingGroup(page: Page) {
  // await actWithCache(page, "Click on the first row in the table component");
  // return true;
  return await page.act({
    action: "Click on the first row in the table component",
  });
}

export async function clickOnConfirmAndSettleButton(page: Page) {
  await actWithCache(
    page,
    "Click on 'confirm and settle' button present in the top right hand corner below the header component and above the filter component"
  );
  return true;
}

// export async function clickOnWarningCheckButton(page: Page) {
//   return await page.act({
//     action: "Click on the checkbox besides 'warning' lable on the modal window",
//   });
// }

export async function clickOnWarningCheckButton(page: Page) {
  const instruction = "Click on the only checkbox present in the modal window";
  const cachedAction = await readCache(instruction);

  if (cachedAction) {
    await page.act(cachedAction);
  } else {
    try {
      const results = await page.observe({
        instruction,
        onlyVisible: true,
        returnAction: true,
      });
      await simpleCache(instruction, results[0]);
      await page.act(results[0]);
      return true;
    } catch (error) {
      console.error("Error clicking on the checkbox:", error);
    }
  }
}

export async function clickOnSaveAndContinueButton(page: Page) {
  return await page.act({
    action:
      "Click on the 'save & continue' button present at the botton left corner on the modal window",
  });
}
