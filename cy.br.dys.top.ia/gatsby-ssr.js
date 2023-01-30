import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/EuroStyleNormal.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="EuroStyle"
    />,
    <link
      rel="preload"
      href="/fonts/EuroStileBold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="EuroStyleBold"
    />,
    <link
      rel="preload"
      href="/fonts/EuroStile-Oblique.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="EuroStyleOblique"
    />,
  ])
}