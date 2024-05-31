import React from "react";
import "./Course.scss";

type Props = {
    id: string,
    name: string,
    image: string,
    bgColor: string
}

export const Course: React.FC<Props> = (props) => {
    const {name, image, bgColor} = props

  return (
    <div className="course">
      <div className="course__image" style={{ backgroundColor: bgColor }}>
        <img
          src={image}
          alt={name}
        />
      </div>
      <p className="course__text">{name}</p>
    </div>
  );
};
