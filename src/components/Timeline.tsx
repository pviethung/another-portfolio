import { timeline } from '../data/timeline';

const Timeline = () => {
  return (
    <div className="w-11/12 md:max-w-xl mx-auto mt-20">
      <h2 className="font-bold text-2xl mb-5 dark:text-white decoration-4 underline underline-offset-8 underth">
        Timeline
      </h2>
      <ul className="space-y-10 md:space-y-14 pl-4 relative before:absolute before:w-[1px] before:h-full before:bg-stone-200 before:left-0 before:top-0 pb-16">
        {timeline.map((t, idx) => (
          <li key={idx}>
            <div className="flex flex-col md:flex-row items-start md:items-center flex-wrap mb-3 relative before:absolute before:w-3 before:h-3 before:rounded-full before:bg-stone-200 before:-left-[22px]">
              <span className="py-1 px-2 mb-3 md:mb-0 font-[500] rounded-md text-white dark:text-stone-900 bg-stone-900 dark:bg-white">
                {t.year}
              </span>
              <h3 className="font-[500] text-lg md:ml-4 pr-4 dark:text-white">
                {t.title}
              </h3>
              <span className="text-stone-400 text-sm whitespace-nowrap md:ml-auto">
                {t.time} years
              </span>
            </div>
            <p
              className="text-stone-500 dark:text-stone-300 text-base"
              dangerouslySetInnerHTML={{ __html: t.desc }}
            ></p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Timeline;
