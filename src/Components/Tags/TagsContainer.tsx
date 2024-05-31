import React from "react"
import './Tag.scss'

type Tags = {
  tags: Set<string>,
  setFilter: (filt: string) => void,
  filter: string
}

export const TagsContainerComponent: React.FC<Tags> = (props) => {

  const {tags, setFilter, filter} = props;

  const filterCourses = (name: string) => {
    setFilter(name);
  }

  return (
    <div className="tags">
      <div
        onClick={() => filterCourses('Все')}
        className={`tag ${"Все" === filter && "active"}`}
      >
        Все
      </div>
      {tags.size > 0 &&
        [...tags].map((tag) => {
          return (
            <div
              onClick={() => filterCourses(tag)}
              key={tag}
              className={`tag ${tag === filter && "active"}`}
            >
              {tag}
            </div>
          );
        })}
    </div>
  );
}

export const TagsContainer = React.memo(TagsContainerComponent);