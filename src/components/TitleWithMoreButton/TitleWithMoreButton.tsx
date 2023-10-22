import Link from 'next/link';

interface Props {
  title: string;
  href: string;
}

const TitleWithMoreButton = ({ title, href }: Props) => (
  <div className="flex items-center justify-between my-5">
    <h1 className="text-xl">{title}</h1>
    <Link href={href}>
      <button className="hover:text-yellow-500 focus:outline-none cursor-pointer transition duration-100 transform hover:scale-125">
        See more &rarr;
      </button>
    </Link>
  </div>
);

export default TitleWithMoreButton;
