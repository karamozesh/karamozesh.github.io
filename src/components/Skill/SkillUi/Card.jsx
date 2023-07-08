export default function Card({
    img, 
    title
}){

    return(
        <div className="border align-center ">
            <img src={img} className="w-full h-3/4" />
            <p className="text-center p-5" >{title}</p>
        </div>
        
    )
}