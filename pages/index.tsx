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
  FaLink,
  FaPaypal,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import YouTube from "react-youtube";
import { InstagramEmbed } from "react-social-media-embed";
import { useEffect, useState } from "react";

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
  {
    name: "paypal",
    element: (
      <IconContext.Provider value={{ className: styles.socialicon }}>
        <FaPaypal />
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

const generateLinks = () => {
  return data.links.map((linkInfo) => {
    return (
      <a
        href={linkInfo.link}
        target="_blank"
        rel="noreferrer"
        className={styles.linkchild}
        key={linkInfo.link}
      >
        <Image
          className={`${styles.linkimage} ${styles.desktop}`}
          src={"/" + linkInfo.image}
          alt="Picture of Eddie"
          width={65}
          height={65}
        />
        <Image
          className={`${styles.linkimage} ${styles.mobile}`}
          src={"/" + linkInfo.image}
          alt="Picture of Eddie"
          width={65}
          height={65}
        />
        <div className={styles.linkdescription}>
          <div className={styles.linkcategory}>
            {linkInfo.category} <FaLink />
          </div>
          <div className={styles.linktitle}>{linkInfo.title}</div>
        </div>
      </a>
    );
  });
};

const generateSpotify = () => {
  return data.spotify.map((songId, ind) => {
    return (
      <div key={ind} className={styles.spotifyChild}>
        <iframe
          className={styles.desktop}
          key={songId}
          style={{ borderRadius: 12 }}
          src={`https://open.spotify.com/embed/track/${songId}?utm_source=generator&theme=0`}
          width="100%"
          height={"80"}
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          className={styles.mobile}
          key={songId}
          style={{ borderRadius: 12 }}
          src={`https://open.spotify.com/embed/track/${songId}?utm_source=generator&theme=0`}
          width="100%"
          height={"80"}
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    );
  });
};

const generateVideos = () => {
  return data.videos.map((videoId) => {
    return (
      <div className={styles.youtubewrapper} key={videoId}>
        <YouTube
          className={styles.desktop}
          videoId={videoId}
          opts={{
            height: "270",
            width: "100%",
            playerVars: {
              autoplay: 0,
            },
          }}
        />
        <YouTube
          className={styles.mobile}
          videoId={videoId}
          opts={{
            height: "200",
            width: "100%",
            playerVars: {
              autoplay: 0,
            },
          }}
        />
      </div>
    );
  });
};

const generateInstagrams = () => {
  return data.instagram.map((postUrl) => {
    return (
      <div key={postUrl}>
        <div className={styles.desktop}>
          <InstagramEmbed url={postUrl} height={375} width={"100%"} />
        </div>
        <div className={styles.mobile}>
          <InstagramEmbed url={postUrl} height={300} width={"100%"} />
        </div>
      </div>
    );
  });
};

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
          content="All about Eddie Wang - actor, musician, model - learn more about me and drop a line! "
        />
        <meta
          name="keywords"
          content="eddie, wang, eddiewang, eddie-wang, @wang.eddie_, EddieWangOfficial, 10mgmt, wang.eddie_, modeling, fashion, acting, actor, arts, artist, performer, film, theatre, TV, commercial, singer, songwriter, composition, asian, chinese, music, eddie.w.model, boston, cambridge, chicago, northwestern, music, economics, acton"
        ></meta>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="/" />
        <meta property="og:title" content="/headshot.png" />
        <meta
          property="og:description"
          content="All about Eddie Wang - actor, musician, model - learn more about me and drop a line!"
        />
        <meta property="og:image" content="" />
        <meta property="og:type" content="website" />
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
          <section className={styles.longlinks}>{generateLinks()}</section>
          <section className={styles.spotify}>{generateSpotify()}</section>
          <section className={styles.videos}>{generateVideos()}</section>
          <section className={styles.instagram}>{generateInstagrams()}</section>
        </div>

        <a
          href="mailto:hello@allenwang314.com"
          target="_blaank"
          rel="noreferrer"
          className={styles.author}
        >
          Noobe, made with {"<3"} by Allen
        </a>
      </main>
    </>
  );
}
