import { useEffect, useState } from 'react'
import { API } from 'aws-amplify'
import { listTodos } from '../graphql/queries'

export default function HomePage() {
  const [todos, setTodos] = useState([])
  const fetchTodos = async () => {
    return API.graphql({ query: listTodos, authMode: 'AWS_IAM' })
  }
  useEffect(() => {
    fetchTodos().then((data) => {
      setTodos(data.data.listTodos.items)
    })
  }, [])
  return (
    <div>
      <pre>
        <code>{JSON.stringify(todos)}</code>
      </pre>
    </div>
  )
}
