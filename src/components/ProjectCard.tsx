const ProjectCard = ({
  imageSrc,
  title,
  tags,
  desc,
  demo,
  code,
}: {
  imageSrc: string;
  title: string;
  tags: string[];
  desc: string;
  demo: string;
  code: string;
}) => {
  return (
    <div className=" group flex flex-col justify-between rounded-md border-2 border-stone-900 dark:border-white  flex-1 dark:text-white relative">
      <img loading="lazy" src={imageSrc} alt={title} />
      {/* <p
        dangerouslySetInnerHTML={{ __html: desc }}
        className="dark:text-stone-300 p-4"
      ></p> */}
      <div className="p-4">
        <h3 className="font-bold text-xl mb-3">{title}</h3>
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <li
              key={idx}
              className="font-[500] rounded-md border-2 border-stone-900 dark:border-white px-3"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className="cursor-pointer hidden pb-4 absolute  group-hover:flex space-x-2 right-0 -top-9 [&_svg]:fill-stone-900 dark:[&_svg]:fill-white">
        <a href={demo} title={title} target="_blank">
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path d="M 18 5 L 18 7 L 23.5625 7 L 11.28125 19.28125 L 12.71875 20.71875 L 25 8.4375 L 25 14 L 27 14 L 27 5 Z M 5 9 L 5 27 L 23 27 L 23 14 L 21 16 L 21 25 L 7 25 L 7 11 L 16 11 L 18 9 Z" />
          </svg>
        </a>
        <a href={code} title={title} target="_blank">
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M4.708 5.578L2.061 8.224l2.647 2.646-.708.708-3-3V7.87l3-3 .708.708zm7-.708L11 5.578l2.647 2.646L11 10.87l.708.708 3-3V7.87l-3-3zM4.908 13l.894.448 5-10L9.908 3l-5 10z" />
          </svg>
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;
