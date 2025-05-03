import { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './style.css'
import { Navigation } from 'swiper/modules';
import Comp from './Prop.jsx'




function App() {
    let [index, setindex] = useState(0)
    let [boolean, setboolean] = useState(false)
    let [togglemenu, settogglemenu] = useState(false)
    const img = ['/121213.jpg', '/121214.jpg', '/1.jpg']
    const description = [
        {
            time: 'Duration:1h 45min',
            genre: '6.5 Action/Adventure/Sci-fi',
            title: 'Rampage',
            description: `Rampage (2018) is a sci-fi action film starring Dwayne Johnson as Davis Okoye, a primatologist who shares 
            a deep bond with a rare albino gorilla named George. When a rogue genetic experiment mutates George and two other  animals into monstrous creatures.`



        },
        {
            time: 'Duration:1h 57min',
            genre: '9.5 Action/Sci-fi/Comedy',
            title: 'Ant-Man',
            description: `Ant-Man (2015) is a Marvel superhero film about Scott Lang, a skilled thief who is given a second chance when scientist Dr. Hank Pym recruits him to don the Ant-Man suit.
         Using Pym’s shrinking technology.`


        },
        {
            time: 'Duration:2h 09min',
            genre: '7.5 Comedy/Adventure/Crime',
            title: 'Caribbean 5',
            description: ` Pirates of the Caribbean: Dead Men Tell No Tales (2017) is the fifth installment in the Pirates of the Caribbean series. It follows Captain Jack Sparrow, who is hunted by the ghostly Captain Salazar and 
        his crew, who have escaped from the Devil’s Triangle. `



        }
    ]
    useEffect(() => {
        const interval = setInterval(() => {
            setindex((prevIndex) => (prevIndex + 1) % img.length)
        }, 3000)

        return () => clearInterval(interval);
    }, [])


    const updateui = () => {
        setboolean(prevvalue => !prevvalue)
    }

    const updatetogglemenu = () => {
        settogglemenu(prevvalue => !prevvalue)
    }

















    return (
        <>

            <header>


                <div style={{ backgroundImage: `url(${img[index]})` }} className='slider relative'>
                    <nav className='flex justify-between text-gray-300 py-2 px-1 md:px-15'>
                        <div><img src="/logo.png" alt="" className='h-6' /></div>
                        <ul className='flex gap-3 relative z-1 md:gap-10'>
                            <div className='hidden md:flex md:gap-10 '>
                                <li className='hover:text-white'><a href="#home">Home</a></li>
                                <li className='hover:text-white'><a href="#home">Movies</a></li>
                                <li className='hover:text-white'><a href="#home">Series</a></li>
                                <li className='hover:text-white'><a href="#home">Category</a></li>


                            </div>
                            <li className='md:hidden' onClick={updatetogglemenu}><i className="fa-solid fa-bars hover:cursor-pointer hover:text-white"></i></li>
                            <input type="text" className={`bg-transparent ${boolean ? 'w-40' : 'w-0'} searchmovie ${boolean ? `border-1 border-gray-400` : 'border-none'} rounded-xl pl-1 transition-width duration-300 ease-in-out h-6`} placeholder='search movies' />

                            <li onClick={updateui}><i className="fa-solid fa-magnifying-glass hover:cursor-pointer hover:text-white"></i></li>
                            <li><i className="fa-solid fa-bell hover:cursor-pointer hover:text-white"></i></li>


                        </ul>
                    </nav>

                    <div className='border-b-1 border-gray-500 '></div>
                    <div className={`text-white flex flex-col gap-3 pl-3 menu absolute w-full ${togglemenu ? 'h-40' : 'h-0'} overflow-hidden menubox transition-width duration-300 ease-in-out`}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#home">Movies</a></li>
                        <li><a href="#home">Series</a></li>
                        <li><a href="#home">Category</a></li>
                    </div>

                    <div className='pt-10 pl-[11%] text-white w-[55%]'>
                        <div className='font-extrabold mb-3'>{description[index].time}</div>
                        <div className='font-extrabold mb-3'> <i className="fa-solid fa-star text-amber-300"></i><span className='ml-1'>{description[index].genre}</span></div>
                        <h1 className='text-5xl font-extrabold mb-5'>{description[index].title}</h1>
                        <p className="font-bold">{description[index].description}</p>
                        <div className='mt-5 flex gap-2 items-center '>
                            <button className="bg-red-500 py-1 px-5 rounded-2xl text-[13px] hover:cursor-pointer"><i className="fa-solid fa-play "></i>WATCH</button>
                            <button className='bg-black rounded-2xl px-2 py-1 text-[13px]'>+ ADD LIST</button>
                        </div>



                    </div>

                </div>


            </header >
            <div className='flex justify-around py-4 border-b-1 border-gray-900 '>
                <Comp name="Trends Now" icon="fa-solid fa-angle-up" />
                <Comp name="Popular" icon="fa-solid fa-fire" />
                <Comp name="Preference" icon="fa-solid fa-star" />
                <Comp name="+ Recently Added" />
            </div>
            <div className='px-5 mt-3'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    navigation={true}
                    modules={[Navigation]}
                    breakpoints={{
                        980:{
                            slidesPerView:8
                        },
                        1460:{
                            slidesPerView:10
                        }

                    }}
                    className="mySwiper"
                >
                    <SwiperSlide><button className='bg-red-500 rounded-2xl px-1 text-white'>Action</button></SwiperSlide>
                    <SwiperSlide><button>Crime</button></SwiperSlide>
                    <SwiperSlide><button>Adventure</button></SwiperSlide>
                    <SwiperSlide><button>Biography</button></SwiperSlide>
                    <SwiperSlide><button>Animation</button></SwiperSlide>
                    <SwiperSlide><button>Comedy</button></SwiperSlide>
                    <SwiperSlide><button>Documentary</button></SwiperSlide>
                    <SwiperSlide><button>Dramas</button></SwiperSlide>
                    <SwiperSlide><button>Webseries</button></SwiperSlide>
                    <SwiperSlide><button>18+</button></SwiperSlide>
                    <SwiperSlide><button>Scifi</button></SwiperSlide>
                    <SwiperSlide><button>Horror</button></SwiperSlide>
                </Swiper>
            </div>
            <div className='flex gap-2 flex-wrap'>
                <div className='flex-grow flex-shrink basis-[100px]'><img src="/images/6under.jpg" alt="" className='w-full '/></div>
                <div className='flex-grow flex-shrink basis-[100px]'><img src="/images/6under.jpg" alt="" className='w-full '/></div>
                <div className='flex-grow flex-shrink basis-[100px]'><img src="/images/6under.jpg" alt="" className='w-full '/></div>
                <div className='flex-grow flex-shrink basis-[100px]'><img src="/images/6under.jpg" alt="" className='w-full '/></div>
                <div className='flex-grow flex-shrink basis-[100px]'><img src="/images/6under.jpg" alt="" className='w-full '/></div>
                <div className='flex-grow flex-shrink basis-[100px]'><img src="/images/6under.jpg" alt="" className='w-full '/></div>
                <div className='flex-grow flex-shrink basis-[100px]'><img src="/images/6under.jpg" alt="" className='w-full '/></div>
                <div className='flex-grow flex-shrink basis-[100px]'><img src="/images/6under.jpg" alt="" className='w-full '/></div>
                <div className='flex-grow flex-shrink basis-[100px]'><img src="/images/6under.jpg" alt="" className='w-full '/></div>
                <div className='flex-grow flex-shrink basis-[100px]'><img src="/images/6under.jpg" alt="" className='w-full '/></div>
                <div className='flex-grow flex-shrink basis-[100px]'><img src="/images/6under.jpg" alt="" className='w-full '/></div>
                
                
                    
               
                
                
            </div>

        </>
        

    );


}


export default App
