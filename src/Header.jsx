import reactImage from "./assets/react-core-concepts.png";

const headerContent = ['Fundamental', 'Crucial', 'Core'];

function randomizeHeaderContent(header) {
    return Math.floor(Math.random() * (header + 1));
}
export default function Header() {

    const headerDescription = headerContent[randomizeHeaderContent(2)];

    return (
        <header>
            <img src={reactImage}alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {headerDescription} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}