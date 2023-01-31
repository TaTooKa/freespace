import React, { useState, createContext } from "react"
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

export const CharacterStateContext = createContext(null);

export default function CharacterStats () {
  const [character, setCharacter] = useState()
  console.log(character)

  return (
    <Layout title="Character Stats">
      <Seo title="Character Stats" />
      <p>To Do</p>
      <p>character: {character}</p>
    </Layout>
  );
}