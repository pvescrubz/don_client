import FAQPage from '../../pages/FaqPage';

const Page = async ({
  params,
}: {
  params: Promise<{ platform: string }>;
}) => {
  const { platform } = await params;
  return <FAQPage platform={platform} />;
};

export default Page;
