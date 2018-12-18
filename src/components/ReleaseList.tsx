import React from "react";

interface ReleaseListProps {
  releases: any[];
  currentPage: number;
  limit: number;
  fetchReleases: ({page, limit}) => void;
}

export const ReleaseList = (props: ReleaseListProps) => {
  const { releases, currentPage, limit, fetchReleases } = props;
  return (
    <div>
      <div>
        <b>Current Page: </b> {currentPage}
        <br />
        <b>Items Per Page: </b> {limit}
        <br />
        <button onClick={() => fetchReleases({page: currentPage - 1, limit})}>&lt;</button>
        <button onClick={() => fetchReleases({page: currentPage, limit})}>Load Releases</button>
        <button onClick={() => fetchReleases({page: currentPage + 1, limit})}>&gt;</button>
      </div>
      <ul>
        {releases.map(item => (
          <li key={item.id}>
            <b>{item.name}</b>
            <br />
            {item.album_type}
          </li>
        ))}
      </ul>
    </div>
  );
};
