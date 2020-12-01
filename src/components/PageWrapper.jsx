import React from 'react';

// styles
import '../styles/components.scss';

const PageWrapper = ({ children }) => (
    <div id={'page-wrapper'}>
        { children }
    </div>
)

export default PageWrapper;