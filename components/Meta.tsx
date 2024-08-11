import Head from "next/head";
// import theme from '../lib/theme'

const makeTitle = (title: string, name: string) =>
  title === name ? title : `${title} – ${name}`;

const Meta = ({
  title = `E-Med: the Bay Area's largest medical engineering hackathon!`, // page title
  name = `E-Med: the Bay Area's largest medical engineering hackathon!`, // site name
  description = "E-Med is on May XX, 2024 in the Bay Area. All high-schoolers, middle-schoolers, and undergrads can attend for free!", // page description
  image = "/eMed.png", // social card image URL
  url = "https://eMed.rsvp",
  target = "teenagers",
  children,
}: any) => (
  <Head>
    <meta key="og_locale" property="og:locale" content="en_US" />
    <meta key="og_type" property="og:type" content="website" />
    <meta key="og_site" property="og:site_name" content={name} />
    <link rel="shortcut icon" type="image/png" href="/logoEmed.png" />
    <link rel="icon" type="image/png" href="/logoEmed.png" />
    <link rel="favicon" type="image/png" href="/logoEmed.png" />
    <title key="title">
      {makeTitle(
        title.replace("teenagers", target),
        name.replace("teenagers", target)
      )}
    </title>
    <meta
      key="og_title"
      property="og:title"
      content={makeTitle(
        title.replace("teenagers", target),
        name.replace("teenagers", target)
      )}
    />

    <meta
      key="tw_title"
      name="twitter:title"
      content={makeTitle(title, name)}
    />
    {description && (
      <>
        <meta key="desc" name="description" content={description} />
        <meta key="og_desc" property="og:description" content={description} />
        <meta key="tw_desc" name="twitter:description" content={description} />
      </>
    )}
    {image && (
      <>
        <meta key="og_img" property="og:image" content={image} />
        <meta key="tw_card" name="twitter:card" content="summary_large_image" />
        <meta key="tw_img" name="twitter:image" content={`/eMed.png`} />
      </>
    )}
    <meta key="theme_color" name="theme-color" content={"#FF6961"} />
    <meta key="tile_color" name="msapplication-TileColor" content={"#FF6961"} />
    <link
      key="safari_icon"
      rel="mask-icon"
      href={`${url}/safari-pinned-tab.png`}
      color={"#FF6961"}
    />
    <link
      key="apple_icon"
      rel="apple-touch-icon"
      sizes="180x180"
      href={`${url}/apple-touch-icon.png`}
    />
    <link
      key="favicon_32"
      rel="icon"
      type="image/png"
      sizes="32x32"
      href={`${url}/favicon-32x32.png`}
    />
    <link
      key="favicon_16"
      rel="icon"
      type="image/png"
      sizes="16x16"
      href={`${url}/favicon-16x16.png`}
    />
    <link key="manifest" rel="manifest" href={`${url}/site.webmanifest`} />
    {children}
  </Head>
);

export default Meta;
