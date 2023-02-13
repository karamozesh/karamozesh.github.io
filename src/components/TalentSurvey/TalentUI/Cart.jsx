import JobItems from './JobItems';
export default function Cart({
  title,
  content,
  jobItem,
}) {
  return (
    <>
      <h2>{title}</h2>
      <p>{content}</p>
      <span>برخی ویژگی های مناسب</span>
      <div class=" flex gap-2 flex-wrap"></div>
    </>
  );
}
