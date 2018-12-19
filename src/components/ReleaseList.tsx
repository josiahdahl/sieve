import React from "react";

interface ReleaseListProps {
  releases: any[];
}

export const ReleaseList = (props: ReleaseListProps) => {
  const { releases } = props;
  return (
    <div>
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
