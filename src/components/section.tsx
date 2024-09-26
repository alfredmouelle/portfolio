import { HTMLAttributes, PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

import { FadeInSection } from './fade-in';

interface PageWrapperProps extends HTMLAttributes<HTMLElement> {
  innerWrapperClassName?: string;
  skipFadeIn?: boolean;
}

export const Section = ({
  children,
  className,
  skipFadeIn,
  innerWrapperClassName,
  ...props
}: PropsWithChildren<PageWrapperProps>) => {
  return (
    <section className={cn('py-10 md:py-24', className)} {...props}>
      {skipFadeIn ? (
        <div className={cn('container', innerWrapperClassName)}>{children}</div>
      ) : (
        <FadeInSection>
          <div className={cn('container', innerWrapperClassName)}>
            {children}
          </div>
        </FadeInSection>
      )}
    </section>
  );
};

export const SectionTitle = ({ children }: PropsWithChildren<{}>) => {
  return <h1 className="mb-10 text-3xl font-bold">{children}</h1>;
};
