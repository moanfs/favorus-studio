export default function HostLive({children}){
    return(
        <div className="host-live-talent container mt-5 col-12" id="host-live">
            <div className="text-header m-4 text-center">
                <h1 className="fw-bold fs-2 mb-3">Our <span>Host Live</span></h1>
                <figcaption className="blockquote-footer">Host yang siap membantu live anda</figcaption>
            </div>
            <div className="row gap-3 justify-content-center my-4">
                {children}
            </div>
        </div>
    )
}