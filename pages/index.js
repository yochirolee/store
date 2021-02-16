import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vende tu Iphone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='md:container md:mx-auto grid grid-cols-2 gap-2 bg-gray-600'>
        <div>left</div>
        <div>right</div>
      </div>
    </div>
  );
}
