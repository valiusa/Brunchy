// componets
import Menu from "./components/menu/Menu";
import Title from "./components/title/Title";

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

    const mainTitle = "The fastest brunch delivery in";
    const spanTitle = "Your city";

    return (
        <div className="App">
            <Menu title={"BRUNCHY"} menu_items={menu_items} />
            <Title mainTitle={mainTitle} spanTitle={spanTitle} />
        </div>
    );
}

export default App;
