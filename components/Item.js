
export default function Item({children, description}){
    return(
        <div className="w-[250px] h-[300px] bg-cyan-500 my-5 rounded-md font-ibm p- flex justify-center items-center flex-col gap-8">
            <div className="text-white text-lg">
                {description}
            </div>
            <main>
                {children}
            </main>
        </div>
    )
}