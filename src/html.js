import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <title>Fabio's Portfolio</title>
        <meta
          name="description="content="Fabio's Front End Developer Portfolio provides information about his Front End Development skills, projects he has worked on, and background info on himself."
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no user-scalable=no"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="PUBLIC_URL/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="PUBLIC_URL/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="PUBLIC_URL/favicon-16x16.png" />
        <link rel="manifest" href="PUBLIC_URL/site.webmanifest" />
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
