import React from "react";

export default function ContentList({ items, contentType, viewMoreText }) {
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href="#">
              <div>{item.data.title}</div>
              <span>{viewMoreText}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
