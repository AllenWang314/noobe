import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import data from "../eddie.json";
import { IconContext } from "react-icons";
import {
  FaInstagram,
  FaSpotify,
  FaYoutube,
  FaFacebook,
  FaTiktok,
  FaEnvelope,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import YouTube from "react-youtube";

const icons = [
  {
    name: "instagram",
    element: (
      <IconContext.Provider value={{ className: styles.socialicon }}>
        <FaInstagram />
      </IconContext.Provider>
    ),
  },
  {
    name: "spotify",
    element: (
      <IconContext.Provider value={{ className: styles.socialicon }}>
        <FaSpotify />
      </IconContext.Provider>
    ),
  },
  {
    name: "youtube",
    element: (
      <IconContext.Provider value={{ className: styles.socialicon }}>
        <FaYoutube />
      </IconContext.Provider>
    ),
  },
  {
    name: "tiktok",
    element: (
      <IconContext.Provider value={{ className: styles.socialicon }}>
        <FaTiktok />
      </IconContext.Provider>
    ),
  },
  {
    name: "facebook",
    element: (
      <IconContext.Provider value={{ className: styles.socialicon }}>
        <FaFacebook />
      </IconContext.Provider>
    ),
  },
  {
    name: "email",
    element: (
      <IconContext.Provider value={{ className: styles.socialicon }}>
        <MdOutlineEmail />
      </IconContext.Provider>
    ),
  },
];

const generateSocials = () => {
  return icons.map((icon) => {
    var website = "";
    for (const social in data.socials) {
      if (data.socials[social].name == icon["name"]) {
        website = data.socials[social].website;
        break;
      }
    }
    return (
      <a href={website} target="_blank" key={icon.name} rel="noreferrer">
        {icon.element}
      </a>
    );
  });
};

const generateVideos = () => {
  return data.videos.map((videoId) => {
    return <div className={styles.youtubewrapper} key={videoId}><YouTube videoId={videoId} 
    opts={{
      height: "300",
      width: "100%",
      playerVars: {
        autoplay: 1,
      },
    }} /></div>
  })
}

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Eddie Wang - actor, musician, model - learn more about me and drop a
          line!
        </title>
        <meta
          name="description"
          content="All about Eddie Wang - actor, musician, model - learn more about me and drop a line!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&family=Open+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <div className={styles.content}>
          <section className={styles.intro}>
            <div>
              <Image
                className={styles.headshot}
                src={"/" + data.intro.image}
                alt="Picture of Eddie"
                width={120}
                height={120}
              />
            </div>

            <div className={styles.name}>{data.intro.name}</div>
            <div className={styles.tagline}>{data.intro.tagline}</div>
            <div className={styles.socials}>{generateSocials()}</div>
          </section>
          <section className={styles.links}></section>
          <section className={styles.spotify}>
            <iframe
              style={{borderRadius: 12}}
              src="https://open.spotify.com/embed/track/3Pz84Ykgio4fXYoy0dpeGK?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </section>
          <section className={styles.videos}>
            {generateVideos()}
          </section>
          <section className={styles.instagram}>

          </section>
        </div>
        <div className={styles.author}>Made with ❤️ by <a href="mailto:hello@allenwang314.com" target="_blank" rel="noreferrer">Allen</a></div>
      </main>
    </>
  );
}
