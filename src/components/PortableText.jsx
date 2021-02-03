import React from 'react';
import BasePortableText from '@sanity/block-content-to-react';

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    )
  }
}

const PortableText = ({blocks}) => (
  <BasePortableText blocks={blocks} serializers={serializers} className={'portable-text'}/>
);

export default PortableText;
