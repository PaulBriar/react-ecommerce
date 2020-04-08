import { createSelector } from "reselect";

const categorySelector = state => state.categories;

export const selectCategoryItems = createSelector(
  [categorySelector],
  category => category.categoryItems
);
