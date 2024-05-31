import './App.scss'
import { TagsContainer } from './Components/Tags/TagsContainer'
import { CoursesContainer } from './Components/Courses/CoursesContainer'
import { useEffect, useMemo, useState } from 'react';
import { getCourses } from './API';
import { ICourse } from './types/types';

function App() {

  const [courses, setCourses] = useState<ICourse[] | []>([]);
  const [filter, setFilter] = useState<string>('Все');

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getCourses();

      setCourses(data.data);
    }
    
    fetchCourses();
  }, [])

  const tags = useMemo(() => {
    const newTags = new Set<string>();

    courses.forEach((course) => {
      course.tags.forEach((tag) => {
        newTags.add(tag);
      });
    });

    return newTags
  }, [courses])
  
  const setFilterForCourses = (filt: string) => {
    setFilter(filt);
  }

  const filteredCourses = courses.filter(course => {
    return course.tags.find((item) => item === filter);
  })

  return (
    <>
      <div className="main">
        <TagsContainer
          tags={tags}
          filter={filter}
          setFilter={setFilterForCourses}
        />
        <CoursesContainer courses={filter !== 'Все' ? filteredCourses : courses} />
      </div>
    </>
  );
}

export default App
