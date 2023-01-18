//import logo from "./logo.svg";
// componets
import Menu from "./components/menu/Menu";

// styles
import "./App.css";

function App() {
    const menu_items = [
        {
            id: 1,
            name: "About",
            link: "https://www.dreamshot.bg",
            hasImg: false,
        },
        {
            id: 2,
            name: "Contact Us",
            link: "https://www.dreamshot.bg",
            hasImg: false,
        },
        {
            id: 3,
            name: "Free Delivery",
            link: "#",
            hasImg: true,
        },
    ];

    return (
        <div className="App">
            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Brunchy
                </a>
            </header> */}
            <Menu title={"BRUNCHY"} menu_items={menu_items} />
        </div>
    );
}

export default App;
