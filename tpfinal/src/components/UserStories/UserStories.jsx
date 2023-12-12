import React from 'react';

const UserStories = ({ stories }) => {
  return (
    <ul>
      {stories ? stories.map((story) => (
        <li key={story.id}>
          <h4>{story.title}</h4>
          <p>{story.description}</p>
        </li>
      )) : "No se encontraron historias"}
    </ul>
  );
};

export default UserStories;