const Moviescard=React.memo(({ Actionmovies, selectedGenres})=> {   
    return (
        <>
                {Actionmovies.map((actionmovie, index) => (
                        <div key={index} className={`min-w-48 h-[350px] mt-5 scrollbar hover:scale-105 ${selectedGenres.includes('Action')?'hidden':'block'}`}>
                            <img src={actionmovie.img} alt="" className='h-[80%] w-[100%] object-cover hover:cursor-pointer' />
                            <h1 className='text-white font-bold'>{actionmovie.title}</h1>
                            <ul className='flex justify-between text-gray-500'>
                                <li className='text-[.9rem]'>2021</li>
                                <div className='flex text-[.9rem] items-center gap-0.5'>
                                    <li><i class="fa-solid fa-heart"></i></li>
                                    <li ><i class="fa-solid fa-eye"></i></li>
                                    <li className='text-yellow-200'><i class="fa-solid fa-star"></i> <span>{actionmovie.rate}</span></li>

                                    <li></li>
                                </div>
                            </ul>

                        </div>

                    ))}
    
           
        </>

    )
})      

    

export default Moviescard