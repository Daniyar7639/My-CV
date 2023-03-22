import "../App.css"
export default function Header() {
    return (
        <header>
            <div className="header">
                <div className="header-img" >
                    <img src={require("../assets/images/Daniyar.jpg")} />
                </div>
            </div>
        </header>
    )
}