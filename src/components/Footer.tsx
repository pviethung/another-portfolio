import { socials } from '../data/socials';

const Footer = () => {
  return (
    <div className="[&_a_svg]:fill-stone-900 mt-20 dark:[&_a_svg]:fill-white">
      <ul className="flex gap-3 justify-center">
        {socials.map((social, idx) => (
          <li key={idx}>
            <a
              target="_blank"
              href={social.link}
              title={social.title}
              dangerouslySetInnerHTML={{ __html: social.svg }}
            ></a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Footer;
