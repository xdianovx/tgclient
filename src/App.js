import './App.css';
import Button from "./components/Button/Button";
import {useTg} from "./hooks/useTg";
import {useEffect} from "react";


function App() {
    const {onToggleBtn, tg} = useTg()

    useEffect(() => {
        tg.ready()
    }, [])
    
    return (
        <div className="App">
            <Button onClick={onToggleBtn}> Toggle</Button>
        </div>
    );
}

export default App;
