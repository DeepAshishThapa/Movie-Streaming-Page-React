import { useState, useEffect, useRef, useMemo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './style.css'
import { Navigation } from 'swiper/modules';
import Comp from './Prop.jsx'
import Moviescard from './Moviescard.jsx'





function App() {
    let [index, setindex] = useState(0)
    let [boolean, setboolean] = useState(false)
    let [togglemenu, settogglemenu] = useState(false)
    const moviecarousalref = useRef(null)

    const genres = ["Action", "Crime", "Adventure", "Biography", "Animation", "Comedy",
        "Documentary", "Dramas", "Webseries", "18+", "Scifi", "Horror"]
    const [selectedGenres, setSelectedGenres] = useState([]);
    const togglegenre = (genre) => {
        setSelectedGenres(prev =>
            prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
        )

    }
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
    const movies = [{
        id: 36,
        img: "/mimg/the gazi attck.jpg",
        down_img: "img/the-ghazi-attack-poster.webp",
        title: "The Gazi Attack",
        letter: "t",
        genre1: "action",
        genre2: "none",
        genre3: "none",
        genre4: "biography",
        genre5: "animation",
        genre6: "none",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2021,
        rate: 9.9,
        url: "the_gazi_attack.html",
        tppr: "trend",
        msot: "movie",
        screen1: "img/gazi1.jpg",
        screen2: "img/gazi2.jpg",
        screen3: "img/gazi3.jpg",
        ph420: "img/the-ghazi-attack-poster.webp",
        ph720: "mimg/comndo.jpg",
        ph1080: "img/the-ghazi-attack-poster.webp",
    },
    {
        id: 35,
        img: "/mimg/comndo.jpg",
        title: "Comndo",
        letter: "c",
        genre1: "action",
        genre2: "none",
        genre3: "none",
        genre4: "biography",
        genre5: "animation",
        genre6: "none",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2022,
        rate: 9.3,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 34,
        img: "/mimg/caption phillips.jpg",
        title: "Caption Phillips",
        letter: "c",
        genre1: "action",
        genre2: "none",
        genre3: "none",
        genre4: "biography",
        genre5: "animation",
        genre6: "none",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2020,
        rate: 9.1,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 33,
        img: "/mimg/bloodshoot.jpg",
        title: "Blood Shoot",
        letter: "b",
        genre1: "action",
        genre2: "none",
        genre3: "none",
        genre4: "biography",
        genre5: "animation",
        genre6: "none",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2021,
        rate: 9.7,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 32,
        img: "/mimg/blade.jpg",
        title: "Blade",
        letter: "b",
        genre1: "action",
        genre2: "none",
        genre3: "none",
        genre4: "biography",
        genre5: "animation",
        genre6: "none",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2021,
        rate: 7.7,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 31,
        img: "/mimg/takepoint.webp",
        title: "Take Point",
        letter: "t",
        genre1: "action",
        genre2: "none",
        genre3: "none",
        genre4: "biography",
        genre5: "animation",
        genre6: "none",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2022,
        rate: 7.9,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 30,
        img: "/mimg/battel drown.jpg",
        title: "Battel Drown",
        letter: "b",
        genre1: "action",
        genre2: "none",
        genre3: "none",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2022,
        rate: 8.9,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 29,
        img: "/mimg/bagi.jpg",
        title: "Bagi",
        letter: "b",
        genre1: "action",
        genre2: "none",
        genre3: "none",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2022,
        rate: 8.8,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 28,
        img: "/mimg/bad boys.jpg",
        title: "Bad Boys",
        letter: "b",
        genre1: "action",
        genre2: "none",
        genre3: "none",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2021,
        rate: 6.8,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 27,
        img: "/mimg/ateet.jpg",
        title: "Ateet",
        letter: "a",
        genre1: "action",
        genre2: "none",
        genre3: "none",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2022,
        rate: 9.7,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 26,
        img: "/mimg/aqwaman.jpg",
        title: "Aqwaman",
        letter: "a",
        genre1: "action",
        genre2: "crime",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2020,
        rate: 9.6,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 25,
        img: "/mimg/angel.jpg",
        title: "Angel",
        letter: "a",
        genre1: "action",
        genre2: "crime",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2022,
        rate: 8.8,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 24,
        img: "/mimg/allahdin.jpg",
        title: "Allahdin",
        letter: "a",
        genre1: "action",
        genre2: "crime",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2021,
        rate: 8.2,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 23,
        img: "/mimg/air.jpg",
        title: "Air",
        letter: "a",
        genre1: "none",
        genre2: "crime",
        genre3: "none",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2021,
        rate: 9.1,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 22,
        img: "/mimg/acceleration.jpg",
        title: "Acceler ration",
        letter: "a",
        genre1: "none",
        genre2: "crime",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2020,
        rate: 9.9,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 21,
        img: "/mimg/abcd.jpg",
        title: "ABCD",
        letter: "a",
        genre1: "none",
        genre2: "crime",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2020,
        rate: 7.9,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 20,
        img: "/mimg/a perfact.jpg",
        title: "A Pefact",
        letter: "a",
        genre1: "none",
        genre2: "crime",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2021,
        rate: 6.9,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 19,
        img: "/mimg/6under.jpg",
        title: "6 Underground",
        letter: "u",
        genre1: "none",
        genre2: "crime",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2021,
        rate: 9.2,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 18,
        img: "/mimg/noah.webp",
        title: "Noah",
        letter: "n",
        genre1: "none",
        genre2: "crime",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2020,
        rate: 8.2,
        url: "themanor.html",
        tppr: "popular",
        msot: "movie"
    },
    {
        id: 17,
        img: "/mimg/notimethedie.webp",
        title: "No Time The Die",
        letter: "n",
        genre1: "none",
        genre2: "crime",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2021,
        rate: 8.5,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie",
        upload: "latest"
    },
    {
        id: 16,
        img: "/mimg/oz.webp",
        title: "OZ",
        letter: "o",
        genre1: "none",
        genre2: "crime",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2021,
        rate: 8.6,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 15,
        img: "/mimg/paul.webp",
        title: "Paul",
        letter: "p",
        genre1: "none",
        genre2: "crime",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2021,
        rate: 9.3,
        url: "themanor.html",
        tppr: "recent",
        msot: "movie",
        upload: "latest"
    },
    {
        id: 14,
        img: "/mimg/pixels.webp",
        title: "Pixels",
        letter: "p",
        genre1: "none",
        genre2: "crime",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2020,
        rate: 7.3,
        url: "themanor.html",
        tppr: "popluar",
        msot: "movie"
    },
    {
        id: 13,
        img: "/mimg/Qismat_2.webp",
        title: "Qismat 2",
        letter: "q",
        genre1: "none",
        genre2: "crime",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2020,
        rate: 5.8,
        url: "themanor.html",
        tppr: "recent",
        msot: "movie",
        upload: "latest"
    },
    {
        id: 12,
        img: "/mimg/red_notice.jpg",
        title: "Red Notice",
        letter: "r",
        genre1: "none",
        genre2: "none",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "drama",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2020,
        rate: 6.8,
        url: "themanor.html",
        tppr: "recent",
        msot: "movie"
    },
    {
        id: 11,
        img: "/mimg/shershaah.webp",
        title: "Shershaah",
        letter: "s",
        genre1: "none",
        genre2: "none",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "drama",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2020,
        rate: 7.8,
        url: "themanor.html",
        tppr: "recent",
        msot: "series",
        upload: "latest"
    },
    {
        id: 10,
        img: "/mimg/shiddat.webp",
        title: "Shiddat",
        letter: "s",
        genre1: "none",
        genre2: "none",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "drama",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2020,
        rate: 8.8,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 9,
        img: "/mimg/snakeeyes.webp",
        title: "Snake Eyes",
        letter: "s",
        genre1: "none",
        genre2: "none",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "drama",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2020,
        rate: 8.9,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie",
        upload: "latest"
    },
    {
        id: 8,
        img: "/mimg/takepoint.webp",
        title: "Take Point",
        letter: "t",
        genre1: "none",
        genre2: "none",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "drama",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2021,
        rate: 9.8,
        url: "themanor.html",
        tppr: "popular",
        msot: "movie"
    },
    {
        id: 7,
        img: "/mimg/The-Manor.webp",
        title: "The Manor",
        letter: "t",
        genre1: "none",
        genre2: "none",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "drama",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2021,
        rate: 8.8,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie",
        upload: "latest"
    },
    {
        id: 6,
        img: "/mimg/theblackwater.webp",
        title: "The Black Water",
        letter: "t",
        genre1: "none",
        genre2: "none",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "drama",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2020,
        rate: 8.8,
        url: "theblackwater.html",
        tppr: "recent",
        msot: "series"
    },
    {
        id: 5,
        img: "/mimg/theoutpost.webp",
        title: "The Out Post",
        letter: "t",
        genre1: "none",
        genre2: "none",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "drama",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2019,
        rate: 5.8,
        url: "venom2.html",
        tppr: "recent",
        msot: "series",
        upload: "latest"
    },
    {
        id: 4,
        img: "/mimg/thevault.webp",
        title: "The Vault",
        letter: "t",
        genre1: "none",
        genre2: "none",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "drama",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2019,
        rate: 5.8,
        url: "venom2.html",
        tppr: "popular",
        msot: "movie"
    },
    {
        id: 3,
        img: "/mimg/venom2.webp",
        title: "Venom 2",
        letter: "v",
        genre1: "none",
        genre2: "",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "drama",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2021,
        rate: 9.2,
        url: "venom2.html",
        tppr: "trend",
        msot: "movie",
        upload: "latest"
    },
    {
        id: 2,
        img: "/mimg/warrior.webp",
        title: "Warrior",
        letter: "w",
        genre1: "none",
        genre2: "none",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "drama",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2020,
        rate: 8.6,
        url: "bfg.html",
        tppr: "popular",
        msot: "movie"
    },
    {
        id: 1,
        img: "/mimg/xtreme.webp",
        title: "Xtreme",
        letter: "x",
        genre1: "none",
        genre2: "none",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "drama",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2022,
        rate: 6.5,
        url: "bfg.html",
        tppr: "recent",
        msot: "movie",
        upload: "latest"
    },
    ]

    const Actionmovies = useMemo(() => {
        return movies.filter((movie, index) => (
            movie.genre1 == 'action'
        ))
    }, [])
    const Crimemovies = movies.filter((movie, index) => (
        movie.genre2 == 'crime'
    ))
    const Adventuremovies = movies.filter((movie, index) => (
        movie.genre3 == 'adeventure'
    ))
    const Biographymovies = movies.filter((movie, index) => (
        movie.genre4 == 'biography'
    ))
    const Animationmovies = movies.filter((movie, index) => (
        movie.genre5 == 'animation'
    ))
    const Comedymovies = movies.filter((movie, index) => (
        movie.genre6 == 'comady'
    ))
    const Documentarymovies = movies.filter((movie, index) => (
        movie.genre7 == 'documentary'
    ))
    const Dramamovies = movies.filter((movie, index) => (
        movie.genre8 == 'drama'
    ))
    const Eighteenmovies = movies.filter((movie, index) => (
        movie.genre9 == '18+'
    ))
    const Scifimovies = movies.filter((movie, index) => (
        movie.genre10 == 'scifi'
    ))
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



    const slideleft = () => {

        console.log(moviecarousalref.current);
        if (moviecarousalref.current) {
            moviecarousalref.current.scrollLeft -= 150;
        }
    }
    const slideright = () => {

        console.log(moviecarousalref.current);
        if (moviecarousalref.current) {
            moviecarousalref.current.scrollLeft += 150;
        }
    }













    return (
        <>

            <header className='relative'>


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

                    <div className='pt-10 pl-[11%] text-white w-[70%] sm:w-[55%]'>
                        <div className='font-extrabold mb-3'>{description[index].time}</div>
                        <div className='font-extrabold mb-3'> <i className="fa-solid fa-star text-amber-300"></i><span className='ml-1'>{description[index].genre}</span></div>
                        <h1 className='text-5xl font-extrabold mb-5'>{description[index].title}</h1>
                        <p className="font-bold hidden sm:block">{description[index].description}</p>
                        <div className='mt-5 flex gap-2 items-center '>
                            <button className="bg-red-500 py-1 px-5 rounded-2xl text-[13px] hover:cursor-pointer "><i className="fa-solid fa-play "></i>WATCH</button>
                            <button className='bg-black rounded-2xl px-2 py-1 text-[13px] hover:cursor-pointer'>+ ADD LIST</button>
                        </div>



                    </div>

                </div>
                <div className='flex gap-5 absolute top-[97%] z-1 left-[45%] dots'>
                    <div className={`w-10 h-1  ${index == 0 ? 'bg-white' : 'bg-gray-500'}`}></div>
                    <div className={`w-10 h-1  ${index == 1 ? 'bg-white' : 'bg-gray-500'}`}></div>
                    <div className={`w-10 h-1 ${index == 2 ? 'bg-white' : 'bg-gray-500'}`}></div>

                </div>


            </header >
            <div className='flex flex-col gap-1 sm:gap-0 sm:flex-row sm:justify-around py-4 border-b-1 border-gray-900 '>
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
                        980: {
                            slidesPerView: 8
                        },
                        1460: {
                            slidesPerView: 10
                        }

                    }}
                    className="mySwiper"
                >
                    {genres.map((genre, index) =>
                        <SwiperSlide key={index}>
                            <button onClick={() => togglegenre(genre)}
                                className={`${selectedGenres.includes(genre) ? 'bg-gray-500' : 'bg-red-500'

                                    } text-white rounded-2xl px-1 hover:cursor-pointer`}>
                                {genre}


                            </button>

                        </SwiperSlide>

                    )}

                </Swiper>
            </div>
            <div className='flex gap-2 overflow-scroll moviecarousal h-auto' ref={moviecarousalref} >
                <div className='absolute left-[5%] top-[130%] sm:top-[110%] z-10'><button className='w-8 h-8 rounded-full p-1  arrowbutton  hover:cursor-pointer' id='arrowbutton1' onClick={slideleft}><i className="fa-solid fa-angle-left text-blue-500" ></i></button></div>
                <div className='absolute left-[90%] sm:left-[95%] top-[130%] sm:top-[110%] z-10'><button className='w-8 h-8 rounded-full p-1  arrowbutton  hover:cursor-pointer' id='arrowbutton2' onClick={slideright} ><i className="fa-solid fa-angle-right text-blue-500"></i></button></div>
                {/* {movies.map((item, index) => (
                    <div key={index} className='min-w-48 mt-5 scrollbar hover:scale-105'>
                        <img src={item.img} alt="" className='h-[85%] w-[100%] object-cover hover:cursor-pointer ' />
                        <h1 className='text-white font-bold'>{item.title}</h1>
                        <ul className='flex justify-between text-gray-500'>
                            <li className='text-[.9rem]'>2021</li>
                            <div className='flex text-[.9rem] items-center gap-0.5'>
                                <li><i class="fa-solid fa-heart"></i></li>
                                <li ><i class="fa-solid fa-eye"></i></li>
                                <li className='text-yellow-200'><i class="fa-solid fa-star"></i> <span>{item.rate}</span></li>

                                <li></li>
                            </div>
                        </ul>

                                

                    </div>  
                ))} */}

                <div className='flex gap-2 h-auto'>
                    {/* {Actionmovies.map((actionmovie, index) => (
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
                    {Crimemovies.map((crimemovie, index) => (
                        <div key={index} className={`min-w-48 mt-5 scrollbar hover:scale-105 ${selectedGenres.includes('Crime')?'hidden':'block' }`}>
                            <img src={crimemovie.img} alt="" className={`h-[80%] w-[100%] object-cover hover:cursor-pointer }`}/>
                            <h1 className='text-white font-bold'>{crimemovie.title}</h1>
                            <ul className='flex justify-between text-gray-500'>
                                <li className='text-[.9rem]'>2021</li>
                                <div className='flex text-[.9rem] items-center gap-0.5'>
                                    <li><i class="fa-solid fa-heart"></i></li>
                                    <li ><i class="fa-solid fa-eye"></i></li>
                                    <li className='text-yellow-200'><i class="fa-solid fa-star"></i> <span>{crimemovie.rate}</span></li>

                                    <li></li>
                                </div>
                            </ul>

                        </div>

                    ))}
                    {Adventuremovies.map((adventuremovie, index) => (
                        <div key={index} className={`min-w-48 mt-5 scrollbar hover:scale-105  ${selectedGenres.includes('Adventure')?'hidden':'block' }`}>
                            <img src={adventuremovie.img} alt="" className='h-[80%] w-[100%] object-cover hover:cursor-pointer' />
                            <h1 className='text-white font-bold'>{adventuremovie.title}</h1>
                            <ul className='flex justify-between text-gray-500'>
                                <li className='text-[.9rem]'>2021</li>
                                <div className='flex text-[.9rem] items-center gap-0.5'>
                                    <li><i class="fa-solid fa-heart"></i></li>
                                    <li ><i class="fa-solid fa-eye"></i></li>
                                    <li className='text-yellow-200'><i class="fa-solid fa-star"></i> <span>{adventuremovie.rate}</span></li>

                                    <li></li>
                                </div>
                            </ul>

                        </div>

                    ))}
                    {Biographymovies.map((biographymovie, index) => (
                        <div key={index} className={`min-w-48 mt-5 scrollbar hover:scale-105 ${selectedGenres.includes('Biography')?'hidden':'block' }`}>
                            <img src={biographymovie.img} alt="" className='h-[80%] w-[100%] object-cover hover:cursor-pointer' />
                            <h1 className='text-white font-bold'>{biographymovie.title}</h1>
                            <ul className='flex justify-between text-gray-500'>
                                <li className='text-[.9rem]'>2021</li>
                                <div className='flex text-[.9rem] items-center gap-0.5'>
                                    <li><i class="fa-solid fa-heart"></i></li>
                                    <li ><i class="fa-solid fa-eye"></i></li>
                                    <li className='text-yellow-200'><i class="fa-solid fa-star"></i> <span>{biographymovie.rate}</span></li>

                                    <li></li>
                                </div>
                            </ul>

                        </div>

                    ))}
                    {Animationmovies.map((animationmovie, index) => (
                        <div key={index} className={`min-w-48 mt-5 scrollbar hover:scale-105 ${selectedGenres.includes('Animation')?'hidden':'block' }`}>
                            <img src={animationmovie.img} alt="" className='h-[80%] w-[100%] object-cover hover:cursor-pointer' />
                            <h1 className='text-white font-bold'>{animationmovie.title}</h1>
                            <ul className='flex justify-between text-gray-500'>
                                <li className='text-[.9rem]'>2021</li>
                                <div className='flex text-[.9rem] items-center gap-0.5'>
                                    <li><i class="fa-solid fa-heart"></i></li>
                                    <li ><i class="fa-solid fa-eye"></i></li>
                                    <li className='text-yellow-200'><i class="fa-solid fa-star"></i> <span>{animationmovie.rate}</span></li>

                                    <li></li>
                                </div>
                            </ul>

                        </div>

                    ))}
                    {Comedymovies.map((comedymovie, index) => (
                        <div key={index} className={`min-w-48 mt-5 scrollbar hover:scale-105 ${selectedGenres.includes('Comedy')?'hidden':'block' }`}>
                            <img src={comedymovie.img} alt="" className='h-[80%] w-[100%] object-cover hover:cursor-pointer' />
                            <h1 className='text-white font-bold'>{comedymovie.title}</h1>
                            <ul className='flex justify-between text-gray-500'>
                                <li className='text-[.9rem]'>2021</li>
                                <div className='flex text-[.9rem] items-center gap-0.5'>
                                    <li><i class="fa-solid fa-heart"></i></li>
                                    <li ><i class="fa-solid fa-eye"></i></li>
                                    <li className='text-yellow-200'><i class="fa-solid fa-star"></i> <span>{comedymovie.rate}</span></li>

                                    <li></li>
                                </div>
                            </ul>

                        </div>

                    ))}
                    {Documentarymovies.map((documentarymovie, index) => (
                        <div key={index} className={`min-w-48 mt-5 scrollbar hover:scale-105 ${selectedGenres.includes('Documentary')?'hidden':'block' }`}>
                            <img src={documentarymovie.img} alt="" className='h-[80%] w-[100%] object-cover hover:cursor-pointer' />
                            <h1 className='text-white font-bold'>{documentarymovie.title}</h1>
                            <ul className='flex justify-between text-gray-500'>
                                <li className='text-[.9rem]'>2021</li>
                                <div className='flex text-[.9rem] items-center gap-0.5'>
                                    <li><i class="fa-solid fa-heart"></i></li>
                                    <li ><i class="fa-solid fa-eye"></i></li>
                                    <li className='text-yellow-200'><i class="fa-solid fa-star"></i> <span>{documentarymovie.rate}</span></li>

                                    <li></li>
                                </div>
                            </ul>

                        </div>

                    ))}
                    {Dramamovies.map((dramamovie, index) => (
                        <div key={index} className={`min-w-48 mt-5 scrollbar hover:scale-105 ${selectedGenres.includes('Dramas')?'hidden':'block' }`}>
                            <img src={dramamovie.img} alt="" className='h-[80%] w-[100%] object-cover hover:cursor-pointer' />
                            <h1 className='text-white font-bold'>{dramamovie.title}</h1>
                            <ul className='flex justify-between text-gray-500'>
                                <li className='text-[.9rem]'>2021</li>
                                <div className='flex text-[.9rem] items-center gap-0.5'>
                                    <li><i class="fa-solid fa-heart"></i></li>
                                    <li ><i class="fa-solid fa-eye"></i></li>
                                    <li className='text-yellow-200'><i class="fa-solid fa-star"></i> <span>{dramamovie.rate}</span></li>

                                    <li></li>
                                </div>
                            </ul>

                        </div>

                    ))}
                    {Eighteenmovies.map((eighteenmovie, index) => (
                        <div key={index} className={`min-w-48 mt-5 scrollbar hover:scale-105 ${selectedGenres.includes('18+')?'hidden':'block' }`}>
                            <img src={eighteenmovie.img} alt="" className='h-[80%] w-[100%] object-cover hover:cursor-pointer' />
                            <h1 className='text-white font-bold'>{eighteenmovie.title}</h1>
                            <ul className='flex justify-between text-gray-500'>
                                <li className='text-[.9rem]'>2021</li>
                                <div className='flex text-[.9rem] items-center gap-0.5'>
                                    <li><i class="fa-solid fa-heart"></i></li>
                                    <li ><i class="fa-solid fa-eye"></i></li>
                                    <li className='text-yellow-200'><i class="fa-solid fa-star"></i> <span>{eighteenmovie.rate}</span></li>

                                    <li></li>
                                </div>
                            </ul>

                        </div>

                    ))}
                    {Scifimovies.map((scifimovie, index) => (
                        <div key={index} className={`min-w-48 mt-5 scrollbar hover:scale-105 ${selectedGenres.includes('Scifi')?'hidden':'block' }`}>
                            <img src={scifimovie.img} alt="" className='h-[80%] w-[100%] object-cover hover:cursor-pointer' />
                            <h1 className='text-white font-bold'>{scifimovie.title}</h1>
                            <ul className='flex justify-between text-gray-500'>
                                <li className='text-[.9rem]'>2021</li>
                                <div className='flex text-[.9rem] items-center gap-0.5'>
                                    <li><i class="fa-solid fa-heart"></i></li>
                                    <li ><i class="fa-solid fa-eye"></i></li>
                                    <li className='text-yellow-200'><i class="fa-solid fa-star"></i> <span>{scifimovie.rate}</span></li>

                                    <li></li>
                                </div>
                            </ul>

                        </div>

                    ))} */}


                    <Moviescard Actionmovies={Actionmovies} selectedGenres={selectedGenres} genre='Action' />
                    <Moviescard Actionmovies={Crimemovies} selectedGenres={selectedGenres} genre='Crime' />
                    <Moviescard Actionmovies={Adventuremovies} selectedGenres={selectedGenres} genre='Adventure' />
                    <Moviescard Actionmovies={Biographymovies} selectedGenres={selectedGenres} genre='Biography' />
                    <Moviescard Actionmovies={Animationmovies} selectedGenres={selectedGenres} genre='Animation' />
                    <Moviescard Actionmovies={Comedymovies} selectedGenres={selectedGenres} genre='Comedy' />
                    <Moviescard Actionmovies={Documentarymovies} selectedGenres={selectedGenres} genre='Documentary' />
                    <Moviescard Actionmovies={Dramamovies} selectedGenres={selectedGenres} genre='Dramas' />
                    <Moviescard Actionmovies={Eighteenmovies} selectedGenres={selectedGenres} genre='18+' />
                    <Moviescard Actionmovies={Scifimovies} selectedGenres={selectedGenres} genre='Scifi' />



                </div>







            </div>
            <div className='relative'>
                <video src="/john wick.webm" className='w-[90%] m-auto mt-5 border-2 border-white rounded-2xl' controls muted></video>
                <div className='absolute w-3 h-3'><img src="/121213.jpg" alt="" /></div>
                <div className='absolute w-3 h-3'><img src="/121213.jpg" alt="" /></div>
                <div className='absolute w-3 h-3'><img src="/121213.jpg" alt="" /></div>
            </div>

          
        </>


    );


}


export default App
