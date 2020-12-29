import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

export default function HTML(props) {
  return (
    <html lang="en" {...props.htmlAttributes}>
      <head>
        <title>Fabio's Front End Developer Portfolio</title>
        <meta
          name="description" content="Fabio's Front End Developer Portfolio provides background info about himself, skills used on the Front End, and previous projects that have been completed."
        />
        <meta name="author" content="Fabio Marcellus" />
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta httpEquiv="content-language" content="en-us" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no user-scalable=no"
        />
        {/* Facebook OpenGraph tags */}
        <meta property="og:title" content="Fabio's Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Portfolio of Front End Developer Fabio Marcellus." />
        <meta property="og:url" content={process.env.PUBLIC_URL} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Fabio Marcellus" />
        {/* Twitter cards tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Fabio Marcellus Front End Developer" />
        <meta name="twitter:description" content="Portfolio of Front End Developer Marcellus." />
        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
        <link rel="manifest" href="site.webmanifest" />
        <Helmet>
          <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "jobTitle": "Front End Developer",
              "name": "Fabio Marcellus",
              "url": process.env.PUBLIC_URL
            }
          `}
          </script>
        </Helmet>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
