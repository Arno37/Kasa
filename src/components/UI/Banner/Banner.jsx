function Banner ({subtitle, picture, alt}) {
    return (
        <div className="banner">
            <img className="banner__picture" src={picture} alt={alt}/>
            <div className="banner__overlay"></div>
            {subtitle ? <h1 className="banner__title">{subtitle}</h1> : null}
        </div>
    )
}
export default Banner