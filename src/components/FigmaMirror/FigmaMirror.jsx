import "./FigmaMirror.scss"

export function FigmaMirror(){

    function figmaMirror(){
        document.querySelector('.figmaMirror_img').classList.toggle('active')
    }

    return (
        <div className="figmaMirror">
            <a onClick={figmaMirror} className="figmaMirror_button"></a>
            <img src="public/assets/img/figmaMirror_img.png" alt="Mirror image of figma" className="figmaMirror_img" />
        </div>
    )
}
