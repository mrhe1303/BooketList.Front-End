
import { useLoaderData } from 'react-router'

export async function loader({ params }) {
  const response = await fetch('https://backend-gold-alpha-80.vercel.app/users')
  const json = response.json()

  return json
}

export default function Users() {
  const users = useLoaderData()

  return (
    <>
      <h1>Users</h1>
      {users.map(e => (
        <>
          <span>
            <b>Username: </b>
            {e.username}
          </span>
          <br />
          <span>
            <b>Email: </b>
            {e.email}
          </span>
        </>
      ))}
    </>
  )
}
