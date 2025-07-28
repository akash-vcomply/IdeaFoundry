import React from 'react';

const ideas = [
  {
    title: 'SoloFounder OS',
    summary: 'All-in-one toolkit for solo startup founders',
    tags: ['#productivity', '#founder', '#startup'],
  },
];

export default function IdeaList() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Your Ideas</h2>
      <ul>
        {ideas.map((idea, idx) => (
          <li key={idx} className="mb-4 p-4 border rounded">
            <div className="font-bold">{idea.title}</div>
            <div>{idea.summary}</div>
            <div className="text-xs text-gray-500">{idea.tags.join(' ')}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
