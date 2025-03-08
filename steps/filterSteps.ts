import { Page } from "@browserbasehq/stagehand";

export async function selectDateRange(page: Page) {
  // Observe the action to click on the date filter
  const dateFilterInstruction =
    "Click on the calendar icon present in the value date date picker";
  const dateFilterResults = await page.observe(dateFilterInstruction);
  await page.act(dateFilterResults[0]);

  // Observe the action to select the date range for a month
  const results1 = await page.observe("Click on '1' in the calendar component");
  await page.act(results1[0]);

  const results2 = await page.observe(
    "Click on '30' in the calendar component"
  );
  await page.act(results2[0]);

  // Click anywhere in the UI to close the calendar
  const closeCalendarResults = await page.observe(
    "Click on a blank area of the UI to close the calendar"
  );
  await page.act(closeCalendarResults[0]);

  return true;
}

export async function clickOnApplyButton(page: Page) {
  return await page.act({
    action: "Click on 'Apply' button on the filter component",
  });
}
