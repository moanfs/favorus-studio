const ListUl = ({ulClass, children}) =>{
    const propertiClass = `${ulClass}`;
   return(
    <ul className={`${propertiClass}`}>
        {children}
    </ul>
   )
}
export default ListUl