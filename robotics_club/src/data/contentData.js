import  AboutUs  from "../assets/icons/about.svg?react"
import  Projects  from "../assets/icons/project.svg?react"
import  Events  from "../assets/icons/events.svg?react"
import  Team  from "../assets/icons/team.svg?react"
import  News  from "../assets/icons/news.svg?react"
import  Achievements  from "../assets/icons/achievements.svg?react"
import  Contact  from "../assets/icons/contact.svg?react"
import Circle from "../assets/icons/industryCircle.svg?react"
import Innovation from "../assets/icons/innovation.svg?react"


const contentData = [
  {
    id: 1,
    type: "explore",
    Icon: AboutUs,
    style: "aboutUs",
    title: "About Us",
    description: "Discover our mission and vision",
    btnText: "Learn more ➜"
  },
  {
    id: 2,
    type: "explore",
    Icon: Projects,
    style: "projects",
    title: "Projects",
    description: "Explore our innovative work",
    btnText: "Learn more ➜",
  },
  {
    id: 3,
    type: "explore",
    Icon: Events,
    style: "events",
    title: "Events",
    description: "Join upcoming workshops",
    btnText: "Learn more ➜",
  },
  {
    id: 4,
    type: "explore",
    Icon: Team,
    style: "teams",
    title: "Team",
    description: "Meet the innovators",
    btnText: "Learn more ➜",
  },
  {
    id: 5,
    type: "explore",
    Icon: News,
    style: "news",
    title: "News",
    description: "Robotics Club featured in newspaper.",
    btnText: "Learn more ➜",
  },
  {
    id: 6,
    type: "explore",
    Icon: Achievements,
    style: "achievements",
    title: "Achievements",
    description: "look what we had achieved",
    btnText: "Learn more ➜",
  },
  {
    id: 7,
    type: "explore",
    Icon: Contact,
    style: "contact",
    title: "Contact",
    description: "get in touch with us",
    btnText: "Learn more ➜",
  },
  {
    id: 8,
    type: "highlight",
    Icon: Achievements,
    title: "National Robotics Championship",
    description: "Our autonomous drone was 1st place at the National Tech Fest 2025",
    time: "December 2025",
  },
  {
    id: 9,
    type: "highlight",
    Icon: Projects,
    title: "AI-Powered Sorting Robot",
    description: "Developed an intelligent waste management system using computer vision",
    time: "Ongoing Project",
  },
  {
    id: 10,
    type: "highlight",
    Icon: Circle,
    title: "Industry Workshop Series",
    description: "Monthly workshops with leading robotics companies and researcheers",
    time: "Every Month",
  },
  {
    id: 11,
    type: "highlight",
    Icon: Innovation,
    title: "Best Innovation Award",
    description: "Recognition for our IoT-enabled agricultural monitoring robot",
    time: "November 2025",
  },
  {
    id: 12,
    type: "recent-Achievements",
    Icon: Achievements,
    time: "January 2026",
    title: "IEEE International Robotics Competition - 2nd Place",
    description: "Our team secured second place with an advanced obstacle-avoiding robot using LIDAR and ML algorithms"
  },
  {
    id: 13,
    type: "recent-Achievements",
    Icon: Achievements,
    time: "December 2025",
    title: "Smart City Hackathon Winners",
    description: "Developed an IoT based traffic management system using swarm robotics principles."
  },
];

export default contentData;