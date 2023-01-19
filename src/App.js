// componets
import Menu from "./components/menu/Menu";
import Title from "./components/title/Title";
import Carousel from "./components/carousel/Carousel";
import CarouselItems from "./components/carouselItems/CarouselItems";

// styles
import classNames from "classnames";
import styles from "./App.module.scss";

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

    const items = [
        {
            name: "Sweet Yogurt",
            caption: "With strawberries",
            price: 5.0,
            image: "milk_with_strawberry.svg",
        },
        {
            name: "Classic Waffle",
            caption: "With icecream",
            price: 7.5,
            image: "waffle_with_icecream.svg",
        },
        {
            name: "Banana Bread",
            caption: "With blueberries",
            price: 5.5,
            image: "bread_with_chocalate_blueberries_and_bananas.svg",
        },
        {
            name: "French Toast",
            caption: "With butter and jam",
            price: 9.5,
            image: "bread_with_butter.svg",
        },
        {
            name: "Peanut Toast",
            caption: "With butrer",
            price: 9.5,
            image: "bread_with_peanutbutter.svg",
        },
        {
            name: "Avocado Toast",
            caption: "2 pieces",
            price: 16.5,
            image: "bread_with_avocado_and_eggs.svg",
        },
        {
            name: "Butter Pancakes",
            caption: "With honey",
            price: 14.5,
            image: "pancakes.svg",
        },
    ];

    const setting = {
        dragSpeed: 1.25,
        itemWidth: 200,
        itemHeight: 250,
        itemSideOffsets: 15,
    };

    const itemStyle = {
        width: `${setting.itemWidth}px`,
        height: `${setting.itemHeight}px`,
        margin: `0px ${setting.itemSideOffsets}px`,
    };

    const mainTitle = "The fastest brunch delivery in";
    const spanTitle = "Your city";

    return (
        <div className={classNames(styles.App)}>
            <Menu title={"BRUNCHY"} menu_items={menu_items} />
            <Title mainTitle={mainTitle} spanTitle={spanTitle} />
            <div className={classNames(styles.carousel_container)}>
                <Carousel _data={items} {...setting}>
                    <CarouselItems items={items} itemStyles={itemStyle} />
                </Carousel>
            </div>
        </div>
    );
}

export default App;
