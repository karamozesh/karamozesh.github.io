const GreatTalk = ({ text, author }) => {
  return (
    <div className="px-4 text-[#545C6D] border-4 border-t-0 border-b-0 border-l-[#33A474] border-r-[#33A474] border-5">
      <p className="text-md pt-4 text-center">
        "{text}"
      </p>
      <span className="inline-block py-1 mt-1 text-[#B5B5B5]">
        {author}
      </span>
    </div>
  );
};

export default GreatTalk;
