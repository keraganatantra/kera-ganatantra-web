import React from "react";

export type IssueCardProps = {
  tag: string;
  svg: React.ReactNode;
  title: string;
  text: string;
};

export default function IssueCard({ tag, svg, title, text }: IssueCardProps) {
  return (
    <article className="card">
      <div className="tag">{tag}</div>
      {svg}
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
