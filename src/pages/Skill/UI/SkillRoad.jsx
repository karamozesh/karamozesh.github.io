
import Button from '../../../components/UI/Button'

export default function SkillRoad ({title , href }){

    return(
            
           <Button className="bg-[#576BF0] text-xs font-light leading-4 text-white p-6 h-12 rounded-3xl">
            <a href={href}>{title}</a>
           </Button>
    )
}