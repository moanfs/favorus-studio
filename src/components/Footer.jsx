export default function Footer(){
    return(
        <footer className="footer ">
            <div className="row col-12 col-lg-8 mx-auto pt-5 ">
                <div className="col-12 col-lg-8">
                    <h4 className="text-decoration-underline ">Favorus Studio</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam maiores quo ipsum molestiae libero, officia mollitia perferendis veritatis magni aliquam possimus sint repellat enim, esse nisi facilis voluptas repellendus! Nulla?</p>
                </div>
                <div className="col-12 col-lg-4">
                    <h5><i className="bi bi-whatsapp"></i> 0821321323123</h5>
                    <p><i className="bi bi-envelope"></i> favorus.studio@gmail.com</p>
                    <p><i className="bi bi-geo-alt"></i> Kota Bengkulu, Bengkulu</p>
                    <div className="fs-5 social-icon ">
                        <a  href="" target="_blank"><i className="bi bi-tiktok"></i></a>
                        <a  href="https://www.instagram.com/favorus.studios/" target="_blank"><i className="bi bi-instagram"></i></a>
                        <a  href="" target="_blank"><i className="bi bi-facebook"></i></a>
                    </div>
                </div>
                <hr className="mt-4"/>
                <p className="text-center">Favorus Studio &copy; 2024 &#9900; Web Build by <a href="https://www.instagram.com/moan.fs/" target="_blank" className="text-white moan">@moanfs</a></p>
           </div>
        </footer>
    )
}