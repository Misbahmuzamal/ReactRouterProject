import { useLoaderData } from "react-router-dom"
function Github(){
    const data=useLoaderData()
    return(
        <>
         <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github Followers:{data.followers}</div>
        </>
    )
}
export default Github
export const Fetchdata=async ()=>{
    let response=await fetch('https://api.github.com/users/misbahmuzamal');
    return response.json()
}