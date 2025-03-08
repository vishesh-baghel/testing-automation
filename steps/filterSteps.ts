import { Page } from "@browserbasehq/stagehand";
import { actWithCache } from "../utils.js";

export async function selectDateRange(page: Page) {
  await actWithCache(
    page,
    "Click on the calendar icon present in the value date date picker"
  );
  await actWithCache(page, "Click on '1' in the calendar component");
  await actWithCache(page, "Click on '30' in the calendar component");
  await actWithCache(
    page,
    "Click on a blank area of the UI to close the calendar"
  );

  return true;
}

export async function clickOnApplyButton(page: Page) {
  await actWithCache(page, "Click on 'Apply' button on the filter component");
  return true;
}
