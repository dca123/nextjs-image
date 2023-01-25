import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen p-6">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <h1>Hi, Here is an image </h1>
        <div className="mt-4">
          <h1 className="text-xl">w-32 h-32</h1>
          <div className="w-32 h-32 relative">
            <Image
              src="https://images.unsplash.com/photo-1674582037808-7ca33039f3a8?ixlib=rb-4.0.3&dl=caleb-woods-IxHl9cBF8KE-unsplash.jpg&w=2400&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
              fill={true}
              alt="image"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="mt-4">
          <h1 className="text-xl">w-64 h-64</h1>
          <div className="w-64 h-64 relative">
            <Image
              src="https://images.unsplash.com/photo-1674582037808-7ca33039f3a8?ixlib=rb-4.0.3&dl=caleb-woods-IxHl9cBF8KE-unsplash.jpg&w=2400&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
              fill={true}
              alt="image"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="mt-4">
          <h1 className="text-xl">w-80 h-80</h1>
          <div className="w-80 h-80 relative">
            <Image
              src="https://images.unsplash.com/photo-1674582037808-7ca33039f3a8?ixlib=rb-4.0.3&dl=caleb-woods-IxHl9cBF8KE-unsplash.jpg&w=2400&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
              fill={true}
              alt="image"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="mt-4">
          <h1 className="text-xl">w-96 h-96</h1>
          <div className="w-96 h-96 relative">
            <Image
              src="https://images.unsplash.com/photo-1674582037808-7ca33039f3a8?ixlib=rb-4.0.3&dl=caleb-woods-IxHl9cBF8KE-unsplash.jpg&w=2400&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
              fill={true}
              alt="image"
              objectFit="cover"
            />
          </div>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
