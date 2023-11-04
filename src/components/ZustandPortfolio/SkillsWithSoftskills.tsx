import Softskills from './Softskills';
import SkillsIcons from './SkillsIcons';
import SkillsDescriptions from './SkillsDescriptions';

const SkillsWithSoftskills = () => {
  return (
    <div className="flex flex-col my-5">
      <div className="w-[1330px] max-w-full mx-auto flex justify-between items-center mt-10 mb-4 px-4 sm:px-4 md:px-4 lg:px-4 xl:px-8 transition-all">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 w-full">
          <aside className="grid w-full grid-cols-3 grid-rows-2 gap-5">
            <SkillsIcons />
          </aside>
          <aside
            data-aos="fade-left"
            data-aos-delay="50"
            className="flex h-auto w-full items-center justify-center overflow-hidden"
          >
            <SkillsDescriptions />
          </aside>
        </div>
      </div>
      <div className="w-[1330px] max-w-full mx-auto flex justify-between items-center mt-10 mb-4 px-4 sm:px-4 md:px-4 lg:px-4 xl:px-8 transition-all">
        <span className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 mx-auto">
          <Softskills />
        </span>
      </div>
    </div>
  );
};

export default SkillsWithSoftskills;
