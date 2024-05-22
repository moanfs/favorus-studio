export default function Service({children}){
    return(
        <div className="service container mt-5 col-10 col-md-8">
            <div className="text-header">
                <h1 className="text-center fw-bold fs-2">Our <span>Service</span></h1>
            </div>
            <div className="row gap-3">
                {children}
            </div>
        </div>
    )
}