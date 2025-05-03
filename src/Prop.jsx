function Comp(prop){
    return(
        <>
        <button className="bg-black text-gray-300 rounded-2xl px-2 py-1 hover:text-white hover:cursor-pointer"> 
          <i className={prop.icon}></i>{prop.name}
        </button>
        </>
    )
}
export default Comp