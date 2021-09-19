import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'SkiShop',
  description: 'We sell the best ski and snowboarding stuff',
  keywords: 'ski, snowboard, buy skis, best skis',
}

export default Meta
