import React, { useEffect } from "react"

// components
import { navigate } from 'gatsby';

const IndexPage = () => {
  useEffect(() => navigate('/store'))
  return <span/> // empty
}

export default IndexPage
