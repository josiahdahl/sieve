import { createSelector, selectFeature } from "./index";

describe("Selectors", () => {
  describe("createSelector", () => {
    it("should call all passed functions", () => {
      const state = {
        user: {
          name: "John Snow",
          skills: {
            weapons: {
              swords: "Good",
              bows: "Good",
              knives: "Not Good"
            }
          }
        }
      };

      const userFeatureSelector = selectFeature("user");

      const userNameSelector = createSelector(
        userFeatureSelector,
        user => user.name
      );

      expect(userNameSelector(state)).toEqual("John Snow");
    });
  });
});
