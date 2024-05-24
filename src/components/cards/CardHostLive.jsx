const CardHostLive = ({data}) => {
   return(
   <div className="col-10 col-lg-4 card-talents">
      <img src={data.images} alt={data.nama} className="talent-image card-img-top" />
      <h5 className="text-capitalize">{data.name}</h5>
  </div>
   )
}
export default CardHostLive