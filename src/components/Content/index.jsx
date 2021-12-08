import React from 'react';
import P from 'prop-types';

import { ContentDiv } from './style';

function Content({ children }) {
  return <ContentDiv>{children}</ContentDiv>;
}

Content.propTypes = {
  children: P.any.isRequired,
};

export { Content };
