import Head from 'next/head';
import { fetchPageData } from '@/lib/useFetchData';
import NetworkRenderer from './_components/NetworkRenderer';
import { accreditationData } from './data';
export default async function NAACPage() {



const { data, error } = await fetchPageData("naac-accreditation")

  return (
    <>
      <Head>
        <title>NAAC Accreditation | CATALYST College</title>
        <meta name="description" content="Official NAAC accreditation details of CATALYST College including current grade, quality reports, and improvement initiatives" />
        <meta name="keywords" content="NAAC accreditation, college grade, quality assurance, SSR report, AQAR, IQAC" />
        <meta property="og:title" content="NAAC Accreditation | CATALYST College" />
        <meta property="og:description" content="B++ accredited institution committed to quality education and continuous improvement" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.catalystcollege.edu.in/naac" />
        <meta property="og:image" content="https://catalystcollege.edu.in/wp-content/uploads/2023/07/naac-banner.jpg" />
      </Head>

      <NetworkRenderer accreditationData={data  ? data : accreditationData} />
    </>
  );
}