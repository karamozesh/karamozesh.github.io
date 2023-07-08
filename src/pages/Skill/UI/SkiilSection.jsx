import img from '../../../asset/images/Programmer-cuate 1.png'

export default function SkillSection ({explain}){

    return(

        <>

        <div className="flex items-center justify-center  gap-7 bg-[#F9B234] p-5">
                
                <p>{explain}</p>
                <img src={img} alt="" />

        </div>
        </>
    )    

}