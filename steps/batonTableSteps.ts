import { Page } from "@browserbasehq/stagehand";

export async function selectNettingGroup(page: Page) {
  return await page.act({
    action: "Select the first row in the table component",
  });
}

export async function clickOnConfirmAndSettleButton(page: Page) {
  return await page.act({
    action: "Click on 'confirm and settle' button",
  });
}
