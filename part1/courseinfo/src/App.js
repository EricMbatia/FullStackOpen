const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
    name: 'Fundamentals of React',
    exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}

  //Header component
  const Header = (props) => {
    return (
      <div>
      <h1>{props.course}</h1>
      </div>
    )
  }

  //content component
  const Content = () => {
    //part component
    const Part = (props) => {
      return (
        <div>
          {props.part.name} {props.part.exercises}
        </div>
      )
    }
    return (
      <div>
      <Part part={course.parts[0]} exercise={course.parts[0]} />
      <Part part={course.parts[1]} exercise={course.parts[1]} />
      <Part part={course.parts[2]} exercise={course.parts[2]} />
      </div>
    )
  }

  //Total component
  const Total = () => {
    const total = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
    return (
      <p>Number of exercises {total}</p>
    )
  }
  

  return (
    <div>
      <Header course={course.name} />
      <Content />
      <Total />
    </div>
  )
}

export default App