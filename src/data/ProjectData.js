import PortfolioSS from "../images/projects/portfolio.png"
import TuneShareImg from "../images/projects/tuneShare.png";

const Details = [
    {
        "title": "Tune Share",
        "description": "Music sharing social media website. Features include searchable music, posting & commenting, and a friend system. Music interests found through searches can be added directly to a user's profile page for others to view.",
        "technologies": [
            "React",
            "Redux",
            "React Router",
            "Ant Design",
            "Ant Design Charts",
            "date-fns",
            "SCSS"
        ],
        "image": TuneShareImg,
        "liveLink": "https://tuneshare.netlify.app/",
        "sourceLink": "https://github.com/famarcellus/share-your-tunes"
    },
    {
        "title": "Portfolio Website",
        "description": "Created by myself from scratch using Gatsby to display skills possessed, projects completed, and info about myself.",
        "technologies": [
            "Gatsby",
            "React",
            "Email.js",
            "SCSS"
        ],
        "image": PortfolioSS,
        "liveLink": process.env.GATSBY_PUBLIC_URL,
        "sourceLink": "https://github.com/famarcellus/Developer-PortfolioV2"
    }
]

export default Details;