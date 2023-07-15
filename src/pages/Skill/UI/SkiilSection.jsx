import img from '../../../asset/images/Programmer-cuate 1.png';

export default function SkillSection({
  explain,
}) {
  return (
    <>
      <div className="flex items-center justify-center h-52 gap-7 bg-[#F9B234] p-5">
        <p className="text-sm">{explain}</p>
        <img src={img} alt="" />
      </div>
    </>
  );
}
