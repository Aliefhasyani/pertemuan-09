import { resolve } from "path";

const usersDetail = async ({params}) => {
  const resolvedParams = await params;
  const {id} = resolvedParams;
  return (
    <div className="font-bold text-5xl mt-15 flex flex-col justify-center items-center text-center ">
        <p>This is user #{id} page</p>
    </div>
  )
}

export default usersDetail
