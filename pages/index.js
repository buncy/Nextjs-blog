import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm Karthik, I'm a web developer and mechanical engineer. I
          love learning new technologies and using it to build new stuff.
        </p>
        <p>
          This is one of my creations using Tailwind and create react app
          <a href="https://buncy.github.io/DeFi-Dashboard/">DeFi-Dashboard</a>.
        </p>
      </section>
    </Layout>
  );
}
