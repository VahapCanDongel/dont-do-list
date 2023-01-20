import Link from "next/link";

export default function Navigation(){
    return(
        <div className="font-ibm w-full h-[20%] flex justify-between p-2 shadow-md items-center">
            <div className="">
                <Link href='/'>
                    <button>Dont Do List</button>
                </Link>
            </div>
            <ul>
                <li className="bg-cyan-500 text-white p-2 rounded-md">
                    <Link href='/additem'>Add Item</Link>
                </li>
                
            </ul>

        </div>
    )
}