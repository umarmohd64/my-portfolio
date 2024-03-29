import Head from "next/head";

interface Props {
    title: string;
    description: string;
  }

const Header = ({title, description} :Props) => (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>

    </Head>
);

export default Header;