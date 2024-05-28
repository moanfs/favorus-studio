const CardNoBorderD3 = ({cardClass, children}) =>{
    return(
        <div className={`card-no-borderD3 col-12 col-lg-4 ${cardClass}`}>
           {children}
        </div>
    )
}
export default CardNoBorderD3;