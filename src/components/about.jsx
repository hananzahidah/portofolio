
function AboutMe() {
    const skills = [
        {img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" },
        {img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"},
        {img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/946px-Javascript_badge.svg.png"},
        {img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png"},
    ];


    return(
            <div id="about" className="w-full p-5 bg-about lg:p-10 ">
                <h1 className="font-bold text-center text-5xl mt-12 mb-5 tracking-wide ">Abo
                    <span className="relative">
                    u
                        <div className="w-full absolute bottom-1 left-0">
                            <img src="u.png" alt="" className=" mx-auto gerak" />
                        </div>
                    </span>t 
                M
                    <span className="relative">e
                        <div className="w-full absolute bottom-2 left-0">
                            <img src="e.png" alt="" className=" mx-auto gerak"/>
                        </div>
                    </span>
                </h1>
                <div className="flex flex-wrap items-center gap-1 md:gap-0 md:flex-row-reverse md:justify-between md:px-5">
                    <div className="w-full self-center md:w-2/5 md:px-5">
                        <div className="relative">
                            <img src="bg-profile.png" alt="" />
                            <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full md:h-full">
                            <img src="profile.png" alt="" className="w-5/6 md:w-full mx-auto profile"/>
                            </span>
                        </div>
                    </div>
                    <div className="lg:flex lg:flex-col lg:w-1/2 md:w-1/2 lg:justify-between lg:items-center lg:h-full">
                        <div className="w-full text-justify p-5 md:w-full md:p-5 bg-mySelf font-medium">
                            <p className="text-base pb-4">My name is Hanan Zahidah Robbani, I'm a front-end developer based in Jakarta, Indonesia. </p>
                            <p className="text-base">Creativity and logic are two things that have always been able to describe me. I'm passionate about creating functional website displays by understanding client and user desires.</p>
                        </div>
                        <div className="hidden lg:block">
                            <h1 className="text-xl text-center font-bold my-6"><span className="pb-1 border-b-2 border-gray-500">Tech Stack</span></h1>
                            <div className="flex justify-center gap-2">
                                {skills.map((skills, key) => (
                                <ListSkill key={key} {...skills} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div> 

                <div className="mb-5 lg:hidden">
                    <h1 className="text-xl text-center font-bold my-6"><span className="pb-1 border-b-2 border-gray-500">Tech Stack</span></h1>
                    <div className="flex justify-center gap-2">
                        {skills.map((skills, key) => (
                        <ListSkill key={key} {...skills} />
                        ))}
                    </div>
                </div>
            </div>
    )
}

export default AboutMe;

export function ListSkill({ img_url }) {
    return (
        <img src={img_url} alt="" className="w-14 object-contain aspect-square"/>
    );
}