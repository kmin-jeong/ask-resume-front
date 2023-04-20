import Head from 'next/head';
import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';

import { getI18nProps, getStaticPaths } from 'modules/i18n/lib/getStatic';
import styles from './index.module.scss';
import Title from 'modules/home/components/Title';
import GoToFormButton from 'modules/home/components/GoToFormButton';

const TranslateNamespaces = ['landing', 'common'];

// TODO: implement Dark mode switcher

// TODO: Add content explaining the expected effect of Ask resume.
// Ex. AskResume gives you answers to questions you might ask on your resume in a job interview.
export default function Home() {
  const { t } = useTranslation(TranslateNamespaces);

  return (
    <>
      <Head>
        <title>{t('common:page_title')}</title>
        <meta name="description" content={t('common:description') ?? ''} />
        <meta name="keyword" content={t('common:keywords') ?? ''} />
      </Head>

      <main className={styles._LANDING_}>
        <Title t={t} />
        <GoToFormButton t={t} />
      </main>
    </>
  );
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  return {
    props: {
      ...(await getI18nProps(ctx, TranslateNamespaces)),
    },
  };
}

export { getStaticPaths };
