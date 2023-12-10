import React from 'react';

const UserStories = ({ stories }) => {
  return (
    <ul>
      {stories.map((story) => (
        <li key={story.id}>
          <h4>{story.title}</h4>
          <p>{story.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default UserStories;