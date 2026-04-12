const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => <Part part={part} key={part.id} />)}
    </div>
  );
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
}

const Total = ({ parts }) => {
  let total = 0
  parts.forEach(part => {
    total += part.exercises
  })
  return (
    <strong>
      total of {total} exercises
    </strong>
  )
}

const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App