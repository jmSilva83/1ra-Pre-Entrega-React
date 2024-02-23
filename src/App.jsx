import "./App.css";
import ItemListcontainer from "./components/ItemListContainer";
import Navbar from "./components/NavBar";

function App() {
    return (
        <>
            <Navbar />
            <ItemListcontainer greeting="Hola Xboxer!" />
        </>
    );
}

export default App;
