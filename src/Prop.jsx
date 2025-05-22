
function Comp(prop){
    return(
        <button className="text-gray-400 bg-black px-2 rounded-2xl hover:text-white hover:cursor-pointer"><i className={prop.icon}></i>{prop.name}</button>
    )
}
export default Comp