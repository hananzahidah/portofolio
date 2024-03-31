function HomePage() {
    return(
        <section id="home" className="mx-auto flex justify-center">
            <div className="w-full self-center text-center p-4 py-56 lg:py-44">
                <h1 className="font-semibold text-3xl md:text-5xl">Hi, I'm</h1>

                <div className="">
                    <h1 className="font-bold text-7xl tracking-wide md:text-9xl md:font-semibold">H
                        <span className="relative font-normal">
                        a
                            <div className="w-full absolute bottom-3 left-0 md:bottom-5">
                                <img src="a.png" alt="" className=" mx-auto gerak" />
                            </div>
                         </span>
                        na
                        <span className="relative">
                        n
                            <div className="w-full absolute bottom-2 left-0 md:bottom-3">
                                <img src="n.png" alt="" className=" mx-auto gerak" />
                            </div>
                        </span>
                    </h1>
                </div>

                <h2 className="font-medium p-1 py-3 text-gray-600 text-3xl lg:text-4xl lg:py-8">Front-end  Developer</h2>
            </div>
        </section>
        
    )
}

export default HomePage;