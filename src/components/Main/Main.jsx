import { Info } from "./Info/Info";
import { List } from "./List/List";
import "./Main.scss"


export function Main(){
    return (
        <main className="main_wrapper">
            <div className="container">
                <Info />
                <List />
            </div>
        </main>
        
    )
}