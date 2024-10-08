'use client';

import { useRouter } from 'next/navigation';

import { useScopedI18n } from '@locales/client';

import { Button } from '@/components/ui/button';

const anchor = 'contact';

export const ContactButton = () => {
  const router = useRouter();
  const t = useScopedI18n('section_hero');

  const jumpToAnchor = () => {
    const element = document.getElementById(anchor);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    router.push(`/?anchor=${anchor}`, { scroll: false });
  };

  return (
    <Button variant="link" onClick={jumpToAnchor}>
      {t('contact')}
    </Button>
  );
};
