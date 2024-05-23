export default function About(){
    return(
        <div className="about container mt-5 col-12 col-lg-10" id="about">
            <div className="text-header text-center m-4">
                <h1 className="fw-bold fs-2 mb-3"><span>About Us</span></h1>
                <figcaption className="blockquote-footer">Apa saja yang kami </figcaption>
            </div>
            <div className="row gap-3 justify-content-center">
                <div className="card-service card col-10 col-lg-5">
                    <p className="service-content"><b>Gambar `ini nanti gambar`</b> <br/> Digital Marketing Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste atque soluta excepturi laboriosam molestiae iure deleniti dicta voluptates consequuntur veniam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus perferendis sunt laboriosam ducimus optio nisi qui obcaecati eveniet, ad facere.</p>
                </div>
                <div className="col-10 col-lg-5">
                    <div>
                        <h4 className="">Good Solution</h4>
                        <p className="service-content">Host Live Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque explicabo omnis aut rerum dolor. Doloribus consequatur nisi sunt delectus at.</p>
                    </div>
                    <div>
                        <h4 className="">Good Solution</h4>
                        <p className="service-content">Host Live Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque explicabo omnis aut rerum dolor. Doloribus consequatur nisi sunt delectus at.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}