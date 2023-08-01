import {Helmet} from 'react-helmet-async'

const about = () => {
  return (
    <>
    <Helmet>
        <title>Manga Swipe - About us</title>
        <link rel="canonical" href="/about-us" />
        <meta name="description" content="website for reading latest manga" />
    </Helmet>
    <div>about</div>
    </>
  )
}

export default about