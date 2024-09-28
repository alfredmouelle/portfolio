import Link from 'next/link';

import { getCurrentLocale, getScopedI18n } from '@locales/server';

import { ScaleWhenView } from '@/components/animations/scale-when-view';
import { SlideLiIntoView } from '@/components/animations/slide-li-into-view';
import { Icons } from '@/components/icons';
import { JobCard } from '@/components/job-card';
import { Section, SectionTitle } from '@/components/section';
import { buttonVariants } from '@/components/ui/button';

import { getJobs } from '@/jobs-helper';
import { cn } from '@/lib/utils';

export const SectionJobs = async () => {
  const locale = getCurrentLocale();

  const jobsAll = await getJobs(locale);
  const featuredJob = jobsAll.find((j) => j.featured)!;
  const t = await getScopedI18n('section_jobs');
  const jobs = jobsAll.filter((j) => !j.featured).splice(0, 2);

  return (
    <Section id="jobs">
      <SectionTitle>{t('title')}</SectionTitle>

      <div className="flex flex-col items-end">
        <ul className="grid gap-4 md:grid-cols-2">
          <li key={featuredJob.slug} className="col-span-2">
            <ScaleWhenView>
              <Link href={`/jobs/${featuredJob.slug}`}>
                <JobCard job={featuredJob} />
              </Link>
            </ScaleWhenView>
          </li>

          {jobs.map((job, index) => (
            <SlideLiIntoView
              key={index}
              index={index}
              className="col-span-2 md:col-span-1"
            >
              <Link href={`/jobs/${job.slug}`}>
                <JobCard job={job} />
              </Link>
            </SlideLiIntoView>
          ))}
        </ul>

        <Link
          href="/jobs"
          className={cn('mt-4', buttonVariants({ variant: 'outline' }))}
        >
          {t('showJobs')}
          <Icons.arrowRight className="ml-1.5 h-5 w-5" />
        </Link>
      </div>
    </Section>
  );
};
