
const Main = () => {
    return (
        <main>
            <div className="main" >
                <div className="main-name">
                    <h1 className="main-h1">Daniyar Kurbanov</h1>
                    <p className="main-p1">Frontend Developer</p>
                    <a className="main-p2" href="https://t.me/Daniyar0110" target="_blank" rel="noreferrer">dkurbanov.telegram</a>
                    <div>
                        <a href="mailto:daniyar010110@mail.ru">
                            <button className="main-btn">
                                <img src={require("../assets/images/Icon.png")} alt="iconOfEnvelope " />
                                <p>Email</p>
                            </button>
                        </a>
                    </div>
                    <div className="main-article">
                        <h3 className="article-h3">About</h3>
                        <p className="article-p">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                        <h3 className="article-h3">Interests</h3>
                        <p className="article-p">Food expert. Music scholar. Reader. Internet fanatic. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;