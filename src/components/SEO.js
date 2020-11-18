import React from 'react'
import { Helmet } from 'react-helmet'

export default function SEO() {
    return (
    <Helmet title={title}>
      {/* General tags */}
      <meta name="description" content={description} />
      {/* OpenGraph tags */}
      <meta property="og:type" content={isBlogPost ? 'article' : 'website'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
    )
}
