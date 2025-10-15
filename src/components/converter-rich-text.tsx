import React from 'react';
import { RichText } from '@payloadcms/richtext-lexical/react'
import {SerializedEditorState} from "@payloadcms/richtext-lexical/lexical";

const ConverterRichText = ({data}: { data: SerializedEditorState }) => {

  if (!data) return;

  return <RichText data={data} />
};

export default ConverterRichText;
