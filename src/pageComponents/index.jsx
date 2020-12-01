import React, { useEffect } from "react"
import { navigate } from 'gatsby';

const IndexPage = () => {
  useEffect(() => navigate('/creators'))
  return <span/>;
};

export default IndexPage;
