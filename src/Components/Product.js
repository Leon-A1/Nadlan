import React from "react";

const CharacterItem = ({ item }) => {
  return (
    <div className="card">
      <img src={item.img} alt="" />
      <h1>{item.name}</h1>
      <ul>
        <li>
          <strong>Actor Name:</strong> {item.portrayed}
        </li>
        <li>
          <strong>Nickname:</strong> {item.nickname}
        </li>
        <li>
          <strong>Birthday:</strong> {item.birthday}
        </li>
        <li>
          <strong>Status:</strong> {item.status}
        </li>
      </ul>
    </div>
  );
};

export default CharacterItem;
