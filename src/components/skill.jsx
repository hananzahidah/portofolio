
function Skill() {
    const skills = [
        {img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" },
        {img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"},
        {img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/946px-Javascript_badge.svg.png"},
        {img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png"},
    ];

    return (
        <div className="p-5">
            <h1 className="text-4xl font-bold my-6">Skills</h1>
            <div className="flex justify-center gap-2">
                {skills.map((skills, key) => (
                <ListSkill key={key} {...skills} />
                ))}
            </div>
        </div>
    )
}

export function ListSkill({ img_url }) {
    return (
      <div className="">
        <img src={img_url} alt="" className="w-20 object-contain aspect-square"/>
      </div>
    );
}

export default Skill;