import "./Header.scss"

export function Header(){
    return (
        <header className="header_wrapper">
            <div className="container">
                <div className="logo">
                    <img src="assets/img/logo.png" alt="Disney+ Logo" />
                </div>
                <div className="menu">
                    <div className="menu_icon">
                        <span className="line"></span>
                        <span className="line"></span> 
                        <span className="line"></span>
                    </div>
                </div>
            </div>
        </header>
    )
}