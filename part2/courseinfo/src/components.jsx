const Header = ({ course }) => {
  return <h2>{course.name}</h2>;
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => <Part part={part} key={part.id} />)}
    </div>
  );
}

const Total = ({ parts }) => {
  let total = 0;
  parts.forEach(part => {
    total += part.exercises;
  });
  return (
    <strong>
      total of {total} exercises
    </strong>
  );
}

const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
}

export default Course;