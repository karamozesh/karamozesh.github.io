import { useRef } from "react"
import SkillRoad from "../pages/Skill/UI/SkillRoad"
const Title = ({ text }) => {

    const titleRef = useRef(null)

    const executeScroll = () => { 
        titleRef.current.scrollIntoView()
    }
    
    return <SkillRoad className="" onClick={executeScroll}>{text}</SkillRoad> 

}

export default Title