import Navigation from "./Nav";

export default function Layout({children}){
    return(
        <div className="flex flex-col justify-center items-center">
            <Navigation/>
            <main>
                {children}
            </main>
        </div>
    )
}