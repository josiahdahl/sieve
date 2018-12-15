import { fetchNewReleases } from "./api";

describe("api.ts", () => {
  it("should paginate new releases", async () => {
    const { data: releases } = await fetchNewReleases(1, 10);

    expect(releases.length).toEqual(10);

    const { data: releases2 } = await fetchNewReleases(2, 5);

    expect(releases2.length).toEqual(5);

    expect(releases.slice(5)).toStrictEqual(releases2);
  });
});
