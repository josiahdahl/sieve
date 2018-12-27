import { fetchNewReleases } from "./api";

describe("api.ts", () => {
  it("should paginate new releases", async () => {
    const { data: releases } = await fetchNewReleases(0, 10);

    expect(releases.length).toEqual(10);

    const { data: releases2 } = await fetchNewReleases(10, 10);

    expect(releases2.length).toEqual(10);
  });
});
