import { addDoc, collection } from "firebase/firestore"
import { db } from "../utils/firebase"
import { useState } from "react"
import { useRouter } from "next/router"

export default function AddNewItem(){
     

    const [post, setPost] = useState({description: ''})
    const route =  useRouter()
    
    const submitPost = async (e) => {
        e.preventDefault()
        const collectionRef = collection(db, 'dontdos')
        
        console.log(db)

        await addDoc(collectionRef, {
            ...post
        })

        setPost({description: ''})
        return route.push('/')
    }

    return(
        <div className="w-[350px] bg-cyan-500 h-[340px] rounded-md text-white font-ibm flex flex-col justify-center items-center gap-4">
            <form onSubmit={submitPost}>           
                <div className="flex justify-center items-center flex-col gap-4">
                    <textarea
                    value={post.description}
                    onChange={(e) => setPost({...post, description: e.target.value})}
                    placeholder="What dont you want to do?" className="rounded-md resize-none w-[300px] h-[230px] p-3 bg-cyan-500 border-[2px] placeholder:text-slate-200 focus:outline-none"/>
        
                    <button className="bg-slate-100 text-cyan-500 p-3 rounded-md w-[100px]">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}