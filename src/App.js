import './App.css';
import {useEffect} from "react";
import Button from "./components/Button/Button";

const tg = window.Telegram.WebApp


function App() {
    useEffect(() => {
        tg.ready()
    }, [])
    const onClose = () => {
        tg.close()
    }
    return (
        <div className="App">
            <Button>Кнопка</Button>
        </div>
    );
}

export default App;
