import Icon from '../Icon';
import Nav from '../Nav';
import Image from 'next/image';
const Footer = () => (
  <>
    <div className="mt-20 border-t border-gray-900 sm:border-gray-800">
      <div className="w-full mx-auto px-4 sm:px-4 md:px-4 lg:px-4 xl:px-8 py-6">
        <div className="flex flex-wrap items-center gap-5">
          <a href="https://github.com/ex-magazine" target="_blank">
            <Icon name="github" className="w-[40px] h-[40px]" />
          </a>
          <a className="w-[40px] h-[40px]" href="https://www.facebook.com/tommythuy2013" target="_blank">
            <Icon name="facebook" />
          </a>
          <a className="w-[40px] h-[40px]" href="https://twitter.com/banhangvnvahan" target="_blank">
            <Icon name="twitter" />
          </a>
          {/* <h2>
            <b className="w-[40px] h-[40px]">Skills</b>
          </h2>
          <Image
            className="h-10"
            width={40}
            height={40}
            src="https://expressmagazine.net/sites/default/files/netlify-app/next.svg"
            alt=""
            priority
          />
          <Image
            className="h-10"
            width={40}
            height={40}
            src="https://expressmagazine.net/sites/default/files/netlify-app/react.svg"
            alt=""
            priority
          />
          <Image
            className="h-10"
            width={40}
            height={40}
            src="https://expressmagazine.net/sites/default/files/netlify-app/ts.svg"
            alt=""
            priority
          />
          <Image
            className="h-10"
            width={40}
            height={40}
            src="https://expressmagazine.net/sites/default/files/netlify-app/js.svg"
            alt=""
            priority
          />
          <Image
            className="h-10"
            width={40}
            height={40}
            src="https://expressmagazine.net/sites/default/files/netlify-app/nodejs.svg"
            alt=""
            priority
          />
          <Image
            className="h-10"
            width={40}
            height={40}
            src="https://expressmagazine.net/sites/default/files/netlify-app/express.svg"
            alt=""
            priority
          />
          <Image
            className="h-10"
            width={40}
            height={40}
            src="https://expressmagazine.net/sites/default/files/netlify-app/prisma.svg"
            alt=""
            priority
          />
          <Image
            className="h-10"
            width={40}
            height={40}
            src="https://expressmagazine.net/sites/default/files/netlify-app/mongodb.svg"
            alt=""
            priority
          />
          <Image
            className="h-10"
            width={40}
            height={40}
            src="https://expressmagazine.net/sites/default/files/netlify-app/firebase.svg"
            alt=""
            priority
          />
          <Image
            className="h-10"
            width={40}
            height={40}
            src="https://expressmagazine.net/sites/default/files/netlify-app/mysql.svg"
            alt=""
            priority
          />
          <Image
            className="h-10"
            width={40}
            height={40}
            src="https://expressmagazine.net/sites/default/files/netlify-app/html.svg"
            alt=""
            priority
          />
          <Image
            className="h-10"
            width={40}
            height={40}
            src="https://expressmagazine.net/sites/default/files/netlify-app/css.svg"
            alt=""
            priority
          />
          <Image
            className="h-10"
            width={40}
            height={40}
            src="https://expressmagazine.net/sites/default/files/netlify-app/styledcomponents.svg"
            alt=""
            priority
          />
          <Image
            className="h-10"
            width={40}
            height={40}
            src="https://expressmagazine.net/sites/default/files/netlify-app/tailwind.svg"
            alt=""
            priority
          />
          <Image
            className="h-10"
            width={40}
            height={40}
            src="https://expressmagazine.net/sites/default/files/netlify-app/vite.svg"
            alt=""
            priority
          />
          <Image
            className="h-10"
            width={40}
            height={40}
            src="https://expressmagazine.net/sites/default/files/netlify-app/vercel.svg"
            alt=""
            priority
          />

          <Image
            className="h-10"
            width={40}
            height={40}
            src="https://expressmagazine.net/sites/default/files/netlify-app/git.svg"
            alt=""
            priority
          />
          <Image
            className="h-10"
            width={40}
            height={40}
            src="https://expressmagazine.net/sites/default/files/netlify-app/figma.svg"
            alt=""
            priority
          />

          <Image
            className="h-10"
            width={40}
            height={40}
            src="https://expressmagazine.net/sites/default/files/netlify-app/jest.svg"
            alt=""
            priority
          />
          <Image
            className="h-10"
            width={40}
            height={40}
            src="https://expressmagazine.net/sites/default/files/netlify-app/vscode.svg"
            alt=""
            priority
          /> */}
        </div>
      </div>
      {/* <div className="flex flex-wrap items-center px-4 sm:px-4 md:px-4 lg:px-4 xl:px-8 py-6 gap-4">
        <h2>
          <b className="text-[#ffa400]">GitHub Stats</b>
        </h2>
        <picture>
          <img
            height="165em"
            alt="github"
            src="https://github-readme-stats.vercel.app/api?username=ex-magazine&show_icons=true&theme=dark&include_all_commits=true&count_private=true"
          />
        </picture>
        <picture>
          <img
            height="165em"
            alt="github"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=ex-magazine&layout=compact&langs_count=7&theme=dark"
          />
        </picture>
      </div> */}
    </div>
    <div className="border-t border-gray-800 sticky bottom-0 shadow-lg bg-background/40 p-1 backdrop-blur-lg lg:static z-30">
      <div className="w-[640px] max-w-full px-4 mx-auto relative my-3 sm:my-3 md:my-3 lg:my-4 xl:my-4">       
        <Nav />
      </div>
    </div>
  </>
);

export default Footer;
