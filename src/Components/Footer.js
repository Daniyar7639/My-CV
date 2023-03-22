import f from "../assets/images/Facebook.svg"
export default function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="footer-icons">
                    <a href="https://twitter.com/" target={"_blank"} rel="noreferrer"><img src={require("../assets/images/TwitterIcon.png")} alt="Twitter" /></a>
                    <a href="https://www.facebook.com/" target={"_blank"} rel="noreferrer"><img src={f} alt="facebook" /></a>
                    <a href="https://www.instagram.com/" target={"_blank"} rel="noreferrer"><img src={require("../assets/images/Instagram Icon.png")} alt="instagram" /></a>
                    <a href="https://www.linkedin.com/feed/" target={"_blank"} rel="noreferrer"><img src={require("../assets/images/Linkedin Icon.png")} alt="linkedin" /></a>
                    <a href="https://github.com/Daniyar7639" target={"_blank"} rel="noreferrer"><img src={require("../assets/images/GitHub Icon.png")} alt="GitHub" /></a>
                </div>
            </div>
        </footer>
    )
}