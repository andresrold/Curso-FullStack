const Header = (props) => {
  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  const parts = props.parts
  console.log(parts)
  return (
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises}/>
      <Part name={parts[1].name} exercises={parts[1].exercises}/>
      <Part name={parts[2].name} exercises={parts[2].exercises}/>
    </div>
  )
}

const Part = (props) => {  
  return (
    <>
      <p>
        {props.name} {props.exercises}
      </p>
    </>
  )
}

const Total = (props) => {
  const parts = props.parts
  var totalNumber = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return (
    <>
     <p>Number of exercises {totalNumber}</p>
    </>
  )
}

const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App