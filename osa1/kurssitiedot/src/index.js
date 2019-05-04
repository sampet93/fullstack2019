import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <div>
            <h1>{props.courseName}</h1>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part part = {props.parts[0].name} exercises = {props.parts[0].exercises}/>
            <Part part = {props.parts[1].name} exercises = {props.parts[1].exercises}/>
            <Part part = {props.parts[2].name} exercises = {props.parts[2].exercises}/>
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>yhteensä {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} tehtävää</p>
        </div>
    )
}

const Part = (props) => {
    return (
        <>
            <p>
                {props.part} {props.exercises}
            </p>
        </>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack -sovelluskehitys',
        parts: [
          {
            name: 'Reactin perusteet',
            exercises: 10
          },
          {
            name: 'Tiedonvälitys propseilla',
            exercises: 7
          },
          {
            name: 'Komponenttien tila',
            exercises: 14
          }
        ]
      }
  

  return (
    <div>
        <Header courseName={course.name}/>
        <Content parts={course.parts} />       
        <Total parts={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))