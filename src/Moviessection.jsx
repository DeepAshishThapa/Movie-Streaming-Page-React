function Moviessection({selectedYears,moviesyear}){
    return(
          <div className={`2020movies relative mt-5 ${selectedYears.includes(2020)?
                         'grid [grid-template-columns:repeat(auto-fit,minmax(150px,1fr))]':
                         'hidden'}`}>
                            <div className='absolute text-white text-2xl   font-bold'>2020 Movies</div>
                        {moviesyear.map((movie,index)=>{
                            const{img,title,year,url,rate}=movie
                            return (
                                <div className='h-[400px] hover:scale-105 mt-10' key={index}>
                                    <a href="" className=' hover:cursor-pointer'>
                                        <img src={img} alt="" className='h-[70%] w-[100%] object-cover' />
                                        <h1 className='text-white'>{title}</h1>
                                        <div className='flex justify-between items-center'>
                                            <div className='text-gray-500 text-[12px]'>{year}</div>
                                            <div className='text-gray-500 text-[12px] flex gap-0.5 items-center'>
                                                <i class="fa-solid fa-heart"></i>
                                                <i class="fa-solid fa-eye"></i>
                                                <i class="fa-solid fa-star text-amber-200"></i>
                                                <span className='text-amber-200'>{rate}</span>

                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )


                        })}
                    </div>
    )
}

export default Moviessection