import Image from 'next/image';

import { getScopedI18n } from '@locales/server';

import { ScaleWhenView } from '@/components/animations/scale-when-view';
import { SlideDivIntoView } from '@/components/animations/slide-div-into-view';
import { Icon } from '@/components/icons';
import { Section, SectionTitle } from '@/components/section';

import SectionImage from '../../../public/assets/images/education-man.svg';

export const SectionScholarship = async () => {
  const t = await getScopedI18n('section_scholarship');

  return (
    <Section
      id="scholarship"
      className="bg-gradient-to-b from-blue-500/25 via-transparent to-transparent"
    >
      <SectionTitle className="flex items-center">
        <Icon name="graduation" className="size-8 mr-2" />
        {t('title')}
      </SectionTitle>

      <div className="grid lg:grid-cols-2">
        <ScaleWhenView className="flex items-center justify-center">
          <Image
            width={500}
            height={500}
            alt="Mascotte"
            src={SectionImage}
            className="hover:scale-[1.02] transition-transform duration-100 ease-in"
          />
        </ScaleWhenView>

        <div className="relative">
          <div className="absolute left-1/2 h-full -translate-x-1/2 transform border-l-2 border-foreground"></div>
          <div className="space-y-8">
            <div className="flex w-full items-center">
              <SlideDivIntoView className="w-1/2 pr-8 text-right" offset={-100}>
                <h2 className="text-lg font-semibold">{t('bts.title')}</h2>
                <p className="text-primary">{t('bts.specialty')}</p>
                <p className="text-muted-foreground">2018 - 2020</p>
              </SlideDivIntoView>

              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Icon name="check" className="text-foreground" />
              </div>

              <SlideDivIntoView className="w-1/2 pl-8" offset={100}>
                <p className="text-muted-foreground">{t('bts.academy')}</p>
                <p className="text-muted-foreground">{t('bts.location')}</p>
              </SlideDivIntoView>
            </div>

            <div className="flex w-full items-center">
              <SlideDivIntoView
                delay={0.05}
                offset={-100}
                className="w-1/2 pr-8 text-right"
              >
                <h2 className="text-lg font-semibold">{t('bac.title')}</h2>
                <p className="text-primary">{t('bac.specialty')}</p>
                <p className="text-muted-foreground">2017 - 2018</p>
              </SlideDivIntoView>

              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Icon name="check" className="text-foreground" />
              </div>

              <SlideDivIntoView
                className="w-1/2 pl-8"
                offset={100}
                delay={0.05}
              >
                <p className="text-muted-foreground">{t('bac.location1')}</p>
                <p className="text-muted-foreground">{t('bac.location2')}</p>
              </SlideDivIntoView>
            </div>

            <div className="flex w-full items-center">
              <SlideDivIntoView
                delay={0.08}
                offset={-100}
                className="w-1/2 pr-8 text-right"
              >
                <h2 className="text-lg font-semibold">
                  {t('probatoire.title')}
                </h2>
                <p className="text-primary">{t('bac.specialty')}</p>
                <p className="text-muted-foreground">2016 - 2017</p>
              </SlideDivIntoView>

              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Icon name="check" className="text-foreground" />
              </div>

              <SlideDivIntoView
                className="w-1/2 pl-8"
                offset={100}
                delay={0.08}
              >
                <p className="text-muted-foreground">{t('bac.location1')}</p>
                <p className="text-muted-foreground">{t('bac.location2')}</p>
              </SlideDivIntoView>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
