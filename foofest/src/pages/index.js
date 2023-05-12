import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Rock Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to FOOFEST!!!!</h1>
        <Image src="/rock-band.jpg" alt="Rock Band" width={640} height={427} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          porttitor mi vitae nisl suscipit malesuada. Fusce congue aliquet risus
          eu malesuada. Sed ultricies, risus in commodo vestibulum, nulla lectus
          bibendum elit, in hendrerit est odio et purus.
        </p>
        <p>
          Aliquam non diam eu sapien iaculis bibendum. Proin commodo elit eget
          velit auctor, vel volutpat mauris bibendum. Donec in mauris vel odio
          tempor bibendum. Integer ultrices risus at nibh pretium, at interdum
          elit ultrices. Sed at ligula sed mi pretium euismod.
        </p>
      </main>

      <footer>
        <p>Copyright &copy; My Rock Website</p>
      </footer>
    </div>
  );
}
