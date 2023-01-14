import { useState } from "react"
import Counter from "./components/counter"
import Heading from "./components/heading"
import Section from "./components/section"
import List from "./components/list"

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <Heading title="Hello"/>
      <Section>How come</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List items={["☕ Coffee", "🌮 Tacos", "💻 Code"]} render={(item: string) => <span className="bold">{item}</span>} />
    </> 
    
  )
}

export default App
