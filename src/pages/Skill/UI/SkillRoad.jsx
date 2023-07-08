

export default function SkillRoad ({title , href }){

    return(
            
           <button className="bg-[#576BF0] text-white p-2 h-16 rounded-3xl">
            <a href={href}>{title}</a>
           </button>
    )
}