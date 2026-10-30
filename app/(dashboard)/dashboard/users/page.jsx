import Link from "next/link"

const Users = () => {
  return (
    <div className="flex flex-col justify-center align-center text-center">
      <p className='text-5xl font-bold mt-15'>This is Users Dashboard</p>
      <ul className="mt-12">
        <li><Link href="/dashboard/users/1">User 1</Link></li>
        <li><Link href="/dashboard/users/2">User 2</Link></li>
        <li><Link href="/dashboard/users/3">User 3</Link></li>
      </ul>
    </div>
  )
}

export default Users
