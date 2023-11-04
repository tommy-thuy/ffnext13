import { ReactNode } from 'react';
import { ProjectsTypeProps } from '@/types';

type CardARootProps = {
  children: ReactNode;
} & ProjectsTypeProps;

export const CardNoneClickRoot = ({ children, ...props }: CardARootProps) => {
  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>): void => {
    event.currentTarget.style.opacity = '1';
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="50"
      className="w-full rounded-lg bg-cover bg-center"
      style={{ backgroundImage: `url(${props.banner_url})` }}
      onLoad={handleLoad}
    >
      {children}
    </div>
  );
};
