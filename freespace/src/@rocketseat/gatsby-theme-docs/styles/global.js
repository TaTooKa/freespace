import React from 'react';
import { useTheme, Global, css } from '@emotion/react';

export default function GlobalStyle() {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        @font-face {
            font-family: 'EuroStyle';
            font-weight: normal;
            font-display: swap;
            font-style: normal;
            font-named-instance: 'Regular';
            src: url(/fonts/EuroStyleNormal.woff2) format("woff2");
            size-adjust: 110%;
        }

        @font-face {
            font-family: 'EuroStyle';
            font-weight: bold;
            font-display: swap;
            font-style: normal;
            font-named-instance: 'Bold';
            src: url(/fonts/EurostileBold.woff2) format("woff2");
        }

        @font-face {
            font-family: 'EuroStyle';
            font-weight: normal;
            font-display: swap;
            font-style: italic;
            font-named-instance: 'Italic';
            src: url(/fonts/Eurostile-Oblique.woff2) format("woff2");
            size-adjust: 90%;
        }

        @font-face {
            font-family: 'Android101';
            font-weight: normal;
            font-display: swap;
            font-style: normal;
            font-named-instance: 'Regular';
            src: url(/fonts/Android101.woff2) format("woff2");
            size-adjust: 100%;
        }

        @font-face {
            font-family: 'The Outbox ST';
            font-weight: normal;
            font-display: swap;
            font-style: normal;
            font-named-instance: 'Regular';
            src: url(/fonts/TheOutboxST.woff2) format("woff2");
            size-adjust: 100%;
        }

        @font-face {
            font-family: 'Osiris';
            font-weight: normal;
            font-display: swap;
            font-style: normal;
            font-named-instance: 'Regular';
            src: 
              url(/fonts/Osiris.woff2) format("woff2"),
              url(/fonts/Osiris.otf) format("opentype");
            size-adjust: 100%;
        }

        body {
          font-size: 22px;
          font-family: ${theme.fonts.body};
          ${'' /* background-color: ${theme.colors.background}; */}
          background-color: ${theme.darkcolors.background};
          text-rendering: optimizelegibility;
          -webkit-font-smoothing: antialiased;
          overflow-y: scroll;
          letter-spacing: 0.05em;
        }

        body .dark {
          background-color: ${theme.darkcolors.background};
          color: ${theme.darkcolors.text};
        }

        h1 {
          font-size: 1.6em;
          color: ${theme.colors.title};
          font-weight: bold;
          margin-bottom: 24px;
        }

        h2 {
          font-size: 1.2em;
        }

        h3 {
          font-size: 1.1em;
        }

        h4 {
          font-size: 1em;
          font-style: italic;
          letter-spacing: 0.1em;
        }

        h2,
        h3,
        h4,
        h5,
        h6 {
          color: ${theme.colors.title};

          margin: 24px 0 16px 0;
          font-weight: bold;
        }
        
        .dark h2,
        .dark h3,
        .dark h4,
        .dark h5,
        .dark h6 {
          color: ${theme.darkcolors.title};
        }
        .dark h1 {
          color: ${theme.darkcolors.text};
          text-shadow: 0 1px 0 #999, 0 2px 0 #666, 0 3px 0 #333, 3px 3px 3px #000;
        }
        .dark h2 {
          font-size: 1.2em;
          color: ${theme.darkcolors.text};
          -webkit-text-stroke: 1px #000;
          text-shadow: 0 0 10px ${theme.colors.turquoise}, 2px 2px 5px #000;

          .anchor svg {
            box-shadow: inset 0 0 10px ${theme.colors.turquoise};
            border-radius: 6px;
            padding: 2px;
          }
        }

        p {
          color: ${theme.colors.text};
          font-size: 1em;
          line-height: 28px;
          margin-bottom: 16px;
          font-weight: 400;
        }

        .dark p {
          color: ${theme.darkcolors.text};
        }
        
        .turquoise {
            color: ${theme.colors.turquoise};
            -webkit-text-stroke: 1px #008978;
        }

        .fuchsia {
            color: ${theme.colors.fuchsia};
            -webkit-text-stroke: 1px #9b005b;
        }

        .bold {
            font-weight: bold;
        }

        .header-title {
            font-family: 'Osiris';
            font-size: 1.2em;
            -webkit-text-stroke: 0.5px ${theme.colors.accent};
        }

        .stat {
            font-family: 'Osiris';
            -webkit-text-stroke: 0.8px ${theme.colors.accent};
        }
        .stat-value {
          font-size: 0.7em;
          font-weight: bold;
          color: #888;
          opacity: 0.7;
          margin: 0 0 0 3px;
          vertical-align: middle;
          text-shadow: 0 0 10px #000;
          cursor: help;
        }
        .stat-value.bad {
          color: #c36963ff;
        }
        .stat-value.normal {
          color: #989057ff;
        }
        .stat-value.good {
          color: #578498ff;
        }

        code.inline-code {
          display: inline-block;
          vertical-align: middle;
          line-height: 1;
          padding: 0.2em;
          background-color: #44475a;
          color: rgba(248, 248, 242);
          font-size: 0.9em;
          border-radius: 3px;
          font-feature-settings: 'clig' 0, 'calt' 0;
          font-variant: no-common-ligatures no-discretionary-ligatures
            no-historical-ligatures no-contextual;
        }

        h1 code.inline-code,
        h2 code.inline-code {
          font-size: calc(100% - 5px);
          padding: 4px;
        }

        a {
          color: ${theme.colors.text};
          font-weight: bold;
          text-decoration-style: dashed;
          text-decoration-color: ${theme.colors.turquoise};
          transition: 0.5s;

          &:hover {
            text-decoration-style: dashed;
            text-decoration-color: ${theme.colors.boost.light};
            text-shadow: 0 0 3px ${theme.colors.turquoise}, 0 0 5px ${theme.colors.accent};
          }
        }

        .dark a {
            color: ${theme.darkcolors.text};
        }

        blockquote {
          margin-bottom: 16px;
          width: 100%;

          p {
            padding: 1rem;
            border-radius: 5px;
            background: ${theme.colors.components.blockquote.background};
            color: ${theme.colors.components.blockquote.text};
            margin: 0;

            a {
              color: ${theme.colors.components.blockquote.text};
            }
          }
        }

        .dark blockquote {
            p {
                color: ${theme.darkcolors.components.blockquote.text};
                background: ${theme.darkcolors.components.blockquote.background};

                a {
                color: ${theme.darkcolors.components.blockquote.text};
                }
            }
        }

        hr {
          border: 0;
          height: 0;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        }

        table {
          border-collapse: separate;
          border-spacing: 0 4px;
          margin-top: -4px;
          margin-bottom: 16px;
          width: 100%;
          font-size: 0.8em;

          th,
          td {
            margin: 0;
            color: ${theme.colors.text};
            background-color: ${theme.colors.shape};
            border: solid 1px ${theme.colors.shape};
            border-style: solid none;
            padding: 12px;

            :first-of-type {
              border-left-style: solid;
              border-top-left-radius: 5px;
              border-bottom-left-radius: 5px;
            }

            :last-child {
              border-right-style: solid;
              border-bottom-right-radius: 5px;
              border-top-right-radius: 5px;
            }
          }

          tr {
            th {
              color: ${theme.colors.title};
              text-align: left;
              font-weight: bold;
            }
          }
        }

        .dark table {
            th, 
            td {
                color: ${theme.darkcolors.text};
                background-color: ${theme.darkcolors.shape};
                border: solid 1px ${theme.darkcolors.shape};
            }

            tr {
                th {
                    color: ${theme.darkcolors.title};
                }
            }
        }

        iframe {
          margin-bottom: 16px;
        }

        img {
          max-width: 100%;
        }

        img.art {
          border: 1px solid ${theme.colors.accent};
          border-radius: 0 15px 0 15px;
          margin: 15px auto 5px auto;
          width: 100%;
          height: 350px;
          transition: 0.5s;
          filter: brightness(0.8) saturate(0.7) hue-rotate(-5deg);
          object-fit: cover;
          :hover {
            border: 0px !important;
            border-radius: 5px;
            box-shadow: 0px 0px 10px #000 !important;
            width: 100%;
            height: 550px;
          }
          @media screen and (max-width: 1350px) {
            height: 320px !important;
            :hover {
              height: 450px !important;
            }
          }
          @media screen and (max-width: 1200px) {
            height: 500px !important;
            :hover {
              height: 600px !important;
            }
          }
          @media screen and (max-width: 1100px) {
            height: 450px !important;
            :hover {
              height: 500px !important;
            }
          }
          @media screen and (max-width: 900px) {
            height: 300px !important;
            :hover {
              height: 400px !important;
            }
          }
          @media screen and (max-width: 780px) {
            height: 400px !important;
            :hover {
              height: 500px !important;
            }
          }
          @media screen and (max-width: 600px) {
            height: 300px !important;
            :hover {
              height: 400px !important;
            }
          }
          @media screen and (max-width: 450px) {
            height: 200px !important;
            :hover {
              height: 300px !important;
            }
          }
          :hover {
            animation: slideImg 30s linear infinite;
            @keyframes slideImg {
              0% { object-position: center center; }
              30% { object-position: 25% 25%; }
              60% { object-position: 75% 75%; }
              100% { object-position:  center center; }
            }
          }
        }

        ul,
        ol {
          color: ${theme.colors.text};
          padding-left: 15px;
          margin-bottom: 16px;

          li {
            line-height: 28px;
          }
        }
        
        .dark ul,
        .dark ol {
          color: ${theme.darkcolors.text};
        }

        li ul,
        li ol {
          margin-bottom: 0;
        }

        .gatsby-highlight {
          font-family: Hack, SFMono-Regular, Menlo, Monaco, Consolas,
            'Liberation Mono', 'Courier New', monospace;
          font-variant: no-common-ligatures no-discretionary-ligatures
            no-historical-ligatures no-contextual;

          position: relative;
          z-index: 0;
          margin: 0 0 16px 0;
          overflow: auto;

          .token {
            font-style: normal !important;
          }
        }

        pre[class*='language-'] code {
          font-family: inherit;
        }

        pre[class*='language-']::before {
          background: #d9d7e0;
          border-radius: 0 0 4px 4px;
          color: #232129;
          font-size: 0.8em;
          font-family: inherit;
          letter-spacing: 0.075em;
          line-height: 1;
          padding: 0.25rem 0.5rem;
          position: absolute;
          left: 1rem;
          text-align: right;
          text-transform: uppercase;
          top: 0;
        }

        pre[class~='language-js']::before,
        pre[class~='language-javascript']::before {
          content: 'js';
          background: #f7df1e;
        }

        pre[class~='language-jsx']::before {
          content: 'jsx';
          background: #61dafb;
        }

        pre[class~='language-typescript']::before,
        pre[class~='language-ts']::before {
          content: 'ts';
          background: #294e80;
          color: #fff;
        }

        pre[class~='language-tsx']::before {
          content: 'tsx';
          background: #294e80;
          color: #fff;
        }

        pre[class~='language-graphql']::before {
          content: 'GraphQL';
          background: #e10098;
          color: #fff;
        }

        pre[class~='language-html']::before {
          content: 'html';
          background: #005a9c;
          color: #fff;
        }

        pre[class~='language-css']::before {
          content: 'css';
          background: #ff9800;
          color: #fff;
        }

        pre[class~='language-mdx']::before {
          content: 'mdx';
          background: #f9ac00;
          color: #fff;
        }

        pre[class~='language-shell']::before {
          content: 'shell';
        }

        pre[class~='language-sh']::before {
          content: 'sh';
        }

        pre[class~='language-bash']::before {
          content: 'bash';
        }

        pre[class~='language-yaml']::before,
        pre[class~='language-yml']::before {
          content: 'yaml';
          background: #ffa8df;
        }

        pre[class~='language-markdown']::before {
          content: 'md';
        }

        pre[class~='language-json']::before,
        pre[class~='language-json5']::before {
          content: 'json';
          background: linen;
        }

        pre[class~='language-diff']::before {
          content: 'diff';
          background: #e6ffed;
        }

        pre[class~='language-text']::before {
          content: 'text';
          background: #fff;
        }

        pre[class~='language-flow']::before {
          content: 'flow';
          background: #e8bd36;
        }

        input[type=number] {
          -moz-appearance: textfield;
        }

        .floating-number-container {
          font-weight: bold;
          text-shadow: 2px 2px 4px #000;
          font-size: 0.9em;
          animation: float 1s ease-out 1;
          @keyframes float {
            70% { opacity: 1; }
            100% { transform: translate(0, -20px) rotate(-10deg); opacity: 0; }
          }
        }

        ${'' /* MENU */}
        aside {
          background-color: ${theme.darkcolors.background} !important;
          nav {
            margin: 0 0 20px 0;
            ul {
              margin: 0 !important;
              li[class*="Heading"] {
                margin: 18px 0 0 0;
                padding: 0;
                text-align: center !important;
                display: inline-block !important;
              }
              li {
                margin: 8px 0 0 0;
                line-height: 20px;
                transition: 1s;
                a {
                  border-radius: 15px !important;
                  font-weight: bold !important;
                  font-family: 'Eurostyle';
                  font-variant: small-caps;
                  font-size: 1.2em !important;
                  text-align: center !important;
                  display: inline-block !important;
                  color: ${theme.colors.turquoise} !important;
                  background-color: ${theme.darkcolors.components.input.background} !important;
                  text-shadow: 1px 1px 3px black;
                  box-shadow: inset -2px -2px 4px #000;
                  transition: 1.5s ease-out !important;
                  :hover {
                    box-shadow: inset 0 0 5px ${theme.colors.turquoise};
                    text-shadow: 0 0 10px ${theme.colors.turquoise};
                    transition: .3s ease-in !important;
                  }
                }
                a.active-link {
                  background-color: ${theme.colors.fuchsia} !important;
                  box-shadow: inset -2px -2px 4px ${theme.darkcolors.components.blockquote.background}, inset 2px 4px 6px #ffffff88;
                  text-shadow: 1px 1px 3px black, 0 0 10px ${theme.colors.turquoise};
                  transition: 1s;
                }
              }
            }
          }
        }

        ${'' /* FORMS */}
        form.character-stats {
            /* max-width: 400px; */

            ${'' /* .left-side {
              float: left;
              max-width: 350px;
              padding: 0 20px 0 0;
              margin: 0;
            }
            .right-side {
              float: left;
              max-width: 350px;
              padding: 0 20px 0 0;
            } */}

            label, span {
                font-size: 0.8em;
                font-weight: bold;
            }

            input {
                text-align: center;
                background-color: ${theme.darkcolors.components.input.background};
                font-family: 'EuroStyle';
                font-weight: bold;
                border: 1px solid ${theme.colors.turquoise};
                border-radius: 0 20px 0 3px;
                color: ${theme.darkcolors.components.input.text};
                transition: 3s;
            }
            input[type="radio"]::before {
                outline: 1px solid red;
            }
            input:focus, textarea:focus {
                box-shadow: 0 0 15px ${theme.colors.turquoise};
                transition: 0.5s;
            }
            textarea {
                background-color: ${theme.darkcolors.components.input.background};
                color: ${theme.darkcolors.components.input.text};
                font-family: 'EuroStyle';
                font-weight: bold;
                font-size: 0.8em;
                padding: 3px 5px;
                border: 1px solid ${theme.colors.turquoise};
                border-radius: 0 10px 0 3px;
                transition: 1s;
            }

            .first-row {
                display: flex;
                .left-col {
                    width: 55%;
                    input {
                        width: 100%;
                        height: 25px;
                        margin: 5px;
                        padding: 0 5px 0 5px;
                        text-align: left;
                    }
                }
                .right-col {
                    margin: 0 0 0 20px;
                    width: 40%;
                    text-align: center;
                    .xp-title {
                        white-space: nowrap;
                    }
                    .curtot {
                        font-size: 0.5em;
                        white-space: nowrap;
                    }
                    .input-container {
                        display: flex;
                        text-align: center;
                        input {
                            width: 40%;
                            height: 25px;
                            margin: 5px auto;
                        }
                        input#xpCurrent {
                            border-radius: 20px 3px 3px 20px;
                        }
                        input#xpTotal {
                            border-radius: 3px 20px 20px 3px;
                        }
                    }
                }
            }

            .state-container {
                margin: 0 auto;
                position: relative;
                width: 100%;
                height: 80px;
                overflow: hidden;
                max-width: 500px;

                .heart-rate {
                  width: 350px;
                  height: 73px;
                  position: relative;
                  margin: 5px auto;
                  z-index: 1;
                  polyline {
                    transition: 2.5s;
                  }
                }

                .fade-in {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  background-color: ${theme.darkcolors.background};
                  top: 0;
                  right: 0;
                  animation: heartRateIn 2.5s linear infinite;
                }

                .fade-out {
                  position: absolute;
                  width: 120%;
                  height: 100%;
                  top: 0;
                  left: -120%;
                  animation: heartRateOut 2.5s linear infinite;
                  background: ${theme.darkcolors.background};
                  background: -moz-linear-gradient(left, ${theme.darkcolors.background} 0%, ${theme.darkcolors.background} 50%, rgba(255, 255, 255, 0) 100%);
                  background: -webkit-linear-gradient(left, ${theme.darkcolors.background} 0%, ${theme.darkcolors.background} 50%, rgba(255, 255, 255, 0) 100%);
                  background: -o-linear-gradient(left, ${theme.darkcolors.background} 0%, ${theme.darkcolors.background} 50%, rgba(255, 255, 255, 0) 100%);
                  background: -ms-linear-gradient(left, ${theme.darkcolors.background} 0%, ${theme.darkcolors.background} 50%, rgba(255, 255, 255, 0) 100%);
                  background: linear-gradient(to right, ${theme.darkcolors.background} 0%, ${theme.darkcolors.background} 80%, rgba(255, 255, 255, 0) 100%);
                }

                @keyframes heartRateIn {
                  0% {
                    width: 100%;
                  }
                  50% {
                    width: 0;
                  }
                  100% {
                    width: 0;
                  }
                }

                @keyframes heartRateOut {
                  0% {
                    left: -120%;
                  }
                  30% {
                    left: -120%;
                  }
                  100% {
                    left: 0;
                  }
                }

                .input-container {
                    z-index: 2;
                    width: 100%;
                    margin: auto;
                    position: absolute;
                    top: 35px;
                    display: flex;
                    justify-content: space-between;
                    white-space: nowrap;
                    text-align: center;
                    input {
                        display: none;
                    }
                    #inControlInput+label {
                    }
                    #inABadSpotInput+label {
                    }
                    #inControlInput:checked+label {
                        color: ${theme.colors.turquoise};
                        text-shadow: 0 0 15px ${theme.colors.turquoise};
                        transition: 0.5s;
                        box-shadow: inset 0 0 5px ${theme.colors.turquoise};
                    }
                    #inABadSpotInput:checked+label {
                        color: ${theme.colors.fuchsia};
                        text-shadow: 0 0 15px ${theme.colors.fuchsia};
                        transition: 0.5s;
                        box-shadow: inset 0 0 5px ${theme.colors.fuchsia};
                    }
                }
                label {
                    transition: 2s;
                    border: 1px solid #444;
                    padding: 2px 10px;
                    border-radius: 6px;
                    box-shadow: inset 0 0 5px #000;
                    font-size: 0.9em;
                    background-color: #00000099;
                    @media screen and (max-width: 500px) {
                      font-size: 0.8em;
                      margin-top: 3px;
                    }

                    @media screen and (max-width: 430px) {
                      font-size: 0.7em;
                      margin-top: 5px;
                    }
                }
            }

            .stats-container {
                margin: 10px 0 10px 0;
                display: flex;
                flex-wrap: no-wrap;
                width: 100%;

                .stat-container {
                    margin: 3px auto;
                    text-align: center;

                    .label-n-input-container {

                      .stat-label {
                          font-family: 'The Outbox ST';
                          font-size: 1.1em;
                          text-shadow: 0 0 5px #aaa;
                          margin: 0 auto;

                          @media screen and (max-width: 1300px) {
                            font-size: 1em;
                          }

                          @media screen and (max-width: 1200px) {
                            font-size: 1.0em;
                          }

                          @media screen and (max-width: 950px) {
                            font-size: 0.9em;
                          }

                          @media screen and (max-width: 850px) {
                            font-size: 0.8em;
                          }

                          @media screen and (max-width: 780px) {
                            font-size: 1.1em;
                          }

                          @media screen and (max-width: 650px) {
                            font-size: 0.9em;
                          }

                          @media screen and (max-width: 540px) {
                            font-size: 0.7em;
                          }

                          @media screen and (max-width: 450px) {
                            font-size: 0.6em;
                          }

                          @media screen and (max-width: 380px) {
                            font-size: 0.5em;
                          }

                        }

                      .stat-input {
                          margin: 5px auto 2px auto;
                          input {
                            height: 30px;
                            border-radius: 3px;
                            width: 60px;

                            @media screen and (max-width: 500px) {
                              width: 45px;
                            }
                          }
                      }
                    }

                    .stat-desc-container {
                        span {
                          margin: 5px 2px 0 0;
                          display: inline-block;
                          line-height: 1.2em;
                          font-size: 0.6em;
                          font-style: italic;
                          color: #777;
                          vertical-align: top;

                          @media screen and (max-width: 1200px) {
                            font-size: 0.5em;
                          }

                          @media screen and (max-width: 1100px) {
                            font-size: 0.45em;
                          }

                          @media screen and (max-width: 850px) {
                            font-size: 0.5em;
                          }

                          @media screen and (max-width: 780px) {
                            font-size: 0.6em;
                          }

                          @media screen and (max-width: 540px) {
                            font-size: 0.5em;
                          }

                          @media screen and (max-width: 480px) {
                            font-size: 0.4em;
                          }

                        }
                    }

                  }

            }

            .stat-bar {
                margin: 10px 0 10px 0;
                display: flex;
                width: 100%;
                /* max-width: 400px; */
                .title {
                    font-size: 0.9em;
                    display: block;
                    margin: 0 10px 0 0;
                }
                label {
                    margin: 0 3px 0 3px;
                    border: 1px solid #444;
                    box-shadow: inset 0 0 5px #000;
                    border-radius: 0 10px 10px 0;
                    padding: 2px 0;
                    color: #555;
                    width: 15%;
                    text-align: center;
                    transition: 0.5s;
                }
                input:checked+label {
                    color: #fff;
                    border: 1px solid ${theme.colors.turquoise};
                    box-shadow: inset 0 0 5px ${theme.colors.turquoise};
                    text-shadow: 0 0 10px ${theme.colors.turquoise};
                }
                input:checked+label.stat-level-0 {
                  filter: hue-rotate(135deg);
                }
                input:checked+label.stat-level-1 {
                  filter: hue-rotate(160deg);
                }
                input:checked+label.stat-level-2 {
                  filter: hue-rotate(190deg);
                }
                input:checked+label.stat-level-3 {
                  filter: hue-rotate(210deg);
                }
                input:checked+label.stat-level-4 {
                  filter: hue-rotate(260deg);
                }
                input:checked+label.stat-level-5 {
                  filter: hue-rotate(0deg);
                }
                input {
                    display: none;
                }
            }

            #stats-chart-container {
              font-family: 'Eurostyle';
              height: 300px;
              width: 100%;
              margin: 10px auto 0 auto;

              @media screen and (max-width: 500px) {
                height: 200px;
              }

              #stats-chart {
                padding-left: 0;
                padding-right: 0;
                margin-left: auto;
                margin-right: auto;
                display: block;
                height: 400px;
                width: 400px;

                @media screen and (max-width: 500px) {
                  width: 300px;
                }
              }
            }

            #traits-container {
              border: 1px solid #444;
              background-color: ${theme.darkcolors.components.input.background};
              margin: 20px 0 10px 0;
              padding: 10px 15px;
              line-height: 28px;
              color: #888;
              border-radius: 10px;
              box-shadow: inset 0 0 5px #000;
            }

            .angle-container {
                margin: 30px 0 20px 0;
                border: 1px solid #444;
                box-shadow: 0 0 5px #000;
                border-radius: 5px 32px 5px 5px;
                padding: 10px 10px;
                .angle-header {
                    display: flex;
                    justify-content: space-between;
                    .angle-title {
                      display: flex;
                      width: 30%;
                      font-size: 1.3em;
                    }
                    .angle-progress {
                      justify-content: flex-end;
                      display: flex;
                      font-size: 1em;
                      flex-grow: 1;
                      input {
                          margin: -3px 0 0 10px;
                          height: 30px;
                          width: 45px;
                      }
                    }
                }
                .angle-options {
                    margin: 10px 0 0 0;
                    .columns {
                        display: flex;
                        margin: 5px 0 0 0;
                        justify-content: space-around;
                    }
                    .col input {
                        display: none;
                    }
                    .col label {
                        font-size: 0.7em;
                        text-align: center;
                        display: inline-block;
                        width: 95%;
                        padding: 6px 0 6px 0;
                        border: 1px solid #444;
                        border-radius: 15px;
                        margin: 2px;
                        transition: 0.5s;
                        box-shadow: inset 0 0 5px #000;
                    }
                    .col input:checked+label {
                        color: ${theme.colors.turquoise};
                        text-shadow: 0 0 10px ${theme.colors.turquoise};
                        box-shadow: inset 0 0 5px ${theme.colors.turquoise};
                        border: 1px solid ${theme.colors.turquoise};
                        border-radius: 15px;
                        transition: 0.5s;
                    }
                }
            }
            
            .notes-container {
                margin: 5px 0 60px 0;
                label {
                    display: block;
                    font-size: 1.1em;
                    textarea {
                        display: block;
                        margin: 10px 0 0 0;
                        width: 100%;
                        min-height: 100px;
                        min-width: 100%;
                    }
                }

            }
        }

        div.active-traits {
          border: 1px solid ${theme.colors.accent};
          padding: 10px 20px;
          border-radius: 0 15px 0 15px;
          span#active-traits-title {
            color: ${theme.colors.accent};
            font-size: 0.9em;
            font-weight: bold;
          }
          span#active-traits-text {
            font-weight: bold;
          }
        }

        #traits-loading-container {
            text-align: center;
          span {
            display: block;
            margin: 30px 0;
            font-weight: bold;
            font-size: 1.5em;
          }
        }
        form.character-traits {
          display: none;
          #toggle-visibility-container {
            display: flex;
            .toggleVisibilityInput {
              display: none;
            } 
            .toggleVisibilityInput:checked+label {
              border: 1px solid ${theme.colors.turquoise};
              box-shadow: inset 0 0 5px ${theme.colors.turquoise}; 
              color: ${theme.colors.turquoise};
            }
            .toggleVisibilityLabel {
              border: 1px solid #666;
              color: #ffffff66;
              margin: 25px 10px;
              padding: 4px 15px;
              display: block;
              width: 100%;
              text-align: center;
              transition: 0.5s;
              border-radius: 3px;
              box-shadow: 0 0 5px #000;
              font-weight: bold;
              cursor: pointer;
            }          
          }
          .trait {
            border: 1px solid ${theme.colors.accent}66;
            margin: 10px 0 25px 0;
            ${'' /* padding: 10px 0; */}
            padding: 20px;
            transition: 0.5s;
            opacity: 0.9;
            :has(input:checked) {
              opacity: 1;
              border: 1px solid ${theme.colors.accent};
              box-shadow: inset 0 0 50px ${theme.colors.accent};

              background: linear-gradient(
                48deg,
                black 5%,
                ${theme.colors.accent}22 20%,
                black 25%,
                ${theme.colors.accent}66 30%,
                black 40%,
                ${theme.colors.accent}22 50%,
                black 55%,
                ${theme.colors.accent}66 60%,
                black 70%,
                ${theme.colors.accent}22 
              );
              animation: foil 40s ease infinite;
              background-size:400% 400%;
              @keyframes foil {
                0% { background-position: 84% 0; }
                50% { background-position: 17% 100%; }
                100% { background-position: 84% 0; }
              }
            }
            input[type="checkbox"] {
              appearance: none;
              width: 16px;
              height: 16px;
              border: 1px solid #666;
              box-shadow: inset 0 0 6px #000;
              transform: translateY(0px) rotate(90deg);
              transition: 0.5s;

              ::before {
                content: "";
                font-family: "EuroStyle";
                font-size: 14px;
                color: #666;
                transition: 0.5s ease-in-out;
                box-shadow: inset 1em 1em var(--form-control-color);
              }

              :checked {
                border: 1px solid ${theme.colors.turquoise};
                box-shadow: inset 0 0 6px ${theme.colors.turquoise}, inset 0 0 20px ${theme.colors.fuchsia}, 0 0 12px ${theme.colors.turquoise};
                transform: translate(-8px, 0px);
              }
              :checked::before {
                color: ${theme.colors.turquoise};
                text-shadow: 0 0 3px ${theme.colors.turquoise};
              }
            }
            label {
              line-height: 1.32em;
              .stat {
                font-size: 0.9em;
              }
              .trait-name {
                margin: 0 0 0 5px;
                font-weight: bold;
                letter-spacing: 0.1em;
                transition: 0.5s;
                color: #000;
                text-shadow: 0 0 8px ${theme.colors.turquoise};
              }
            }
            input:checked+label .trait-name {
              margin: 0 0 0 -5px;
              letter-spacing: 0.15em;
              text-shadow: 0 0 10px ${theme.colors.turquoise};
              color: ${theme.colors.turquoise};
            }

            input:checked+label +img.art, img.art:hover {
              border: 1px solid ${theme.colors.fuchsia};
              box-shadow: 0 0 5px ${theme.colors.fuchsia}; 
              filter: brightness(1);
            }

          }
          .trait.contact {
            margin: 40px 0 10px 0;
            .name-container {
              margin: 10px 0 0 0;
              label {
                border: 1px solid #666;
                padding: 6px 5px 5px 10px;
                font-size: 0.8em;
                font-weight: bold;
                color: #888;
                margin: 0 0 0 0;
                border-radius: 10px 0 0 10px;
                box-shadow: inset 1px 1px 8px #000;
                text-shadow: 2px 2px 4px #000;
                width: 25%;
                @media screen and (max-width: 700px) {
                  font-size: 0.7em;
                }
              }
              input {
                  background-color: ${theme.darkcolors.components.input.background};
                  height: 32px; 
                  width: 74%;
                  font-family: 'EuroStyle';
                  font-weight: bold;
                  font-size: 0.9em;
                  padding: 2px 3px 2px 10px;
                  border: 1px solid ${theme.colors.turquoise};
                  border-radius: 0 10px 10px 0;
                  color: ${theme.darkcolors.components.input.text};
                  transition: 3s;
                  @media screen and (max-width: 1350px) {
                    width: 65%;
                  }
                  @media screen and (max-width: 900px) {
                    width: 50%;
                  }
              }
              input:focus {
                  box-shadow: 0 0 15px ${theme.colors.turquoise};
                  transition: 0.5s;
              }
            }
          }
        }

        ${'' /* CHALLENGES */}

        button#add-challenge-button {
          border: 1px solid ${theme.colors.turquoise};
          height: 30px;
          padding: 5px 10px;
          font-family: 'EuroStyle';
          font-size: 0.8em;
          font-weight: bold;
          border-radius: 5px;
          background-color: ${theme.darkcolors.components.input.background};
          color: ${theme.colors.turquoise};
          box-shadow: inset 0 0 5px ${theme.colors.turquoise};
          transition: .5s ease;
          :hover {
            box-shadow: inset 0 0 15px ${theme.colors.turquoise};

          }
        }

        form.challenges {
          input {
            text-align: center;
            background-color: ${theme.darkcolors.components.input.background};
            font-family: 'EuroStyle';
            font-weight: bold;
            font-size: 1em;
            border: 1px solid ${theme.colors.turquoise};
            color: ${theme.darkcolors.components.input.text};
            transition: 3s;
          }
          input:focus {
            box-shadow: 0 0 15px ${theme.colors.turquoise};
            transition: 0.5s;
          }

          .challenge-container {
            margin: 30px 0 30px 0;
            border: 1px solid #0a6d6199;
            background-color: ${theme.darkcolors.background};
            border-radius: 5px 15px 5px 5px;
            padding: 15px 5px;
            transition: 0.25s ease-out;
            &.created {
              box-shadow: 0 0 10px #fff !important; 
            }
            .challenge-inputs {
              width: 98%;
              margin: 0 5px 0 5px;
              .minimize-button {
                margin: -10px 0 0 -5px;
                width: 25px;
                display: block;
                position: absolute;
                span.button {
                  margin: 5px;
                  display: block;
                  width: 100%;
                  height: 25px;
                  border: 1px solid ${theme.colors.turquoise};
                  box-shadow: inset 0 0 5px ${theme.colors.turquoise};
                  border-radius: 3px;
                  text-align: center;
                  vertical-align: middle;
                  transition: .5s ease;
                  :hover {
                    box-shadow: inset 0 0 15px ${theme.colors.turquoise};
                    cursor: pointer;
                  }
                  svg.MuiSvgIcon-root {
                    margin: 0px auto;
                    text-align: center;
                    transition: 1s ease;
                    color: ${theme.colors.turquoise};
                    opacity: .7;
                    scale: 90%;
                    :hover {
                      opacity: 1;
                      scale: 105%;
                      color: #fff;

                    }
                  }
                }
              }
              .description-container {
                display: inline-block;
                width: 78%;
                label {
                  display: block;
                  font-size: 0.8em;
                  text-transform: uppercase;
                  font-weight: bold;
                  height: 20px;
                  margin: 0 0 5px 40px;
                  @media screen and (max-width: 700px) {
                    font-size: 0.7em;
                    margin: 0 0 5px 40px;
                    white-space: nowrap;
                  }
                }
                input.description {
                  width: 100%;
                  height: 35px;
                  border-radius: 20px 0 0 3px;
                  text-align: left;
                  padding: 0 0 0 15px;
                  @media screen and (max-width: 700px) {
                    font-size: 0.8em;
                  }
                }
              }
              .progress-container {
                width: 20%;
                display: inline-block;
                float: right;
                label {
                  font-size: 0.6em;
                  height: 20px;
                  display: block;
                  margin: 5px 0 0 0;
                  @media screen and (max-width: 500px) {
                    font-size: 0.5em;
                  }
                }
                input.progress {
                  width: 100%;
                  height: 35px;
                  border-radius: 0 20px 3px 0;
                  :disabled {
                    border: 1px solid #222;
                    color: #999;
                    box-shadow: inset 0 0 6px #666;
                    text-shadow: 0 0 15px #222;
                    cursor: not-allowed;
                  }
                }
              }
            }

            .challenge-controls {
              transition: 0.5s ease-in;
              max-height: 200px;
            }

            .progress-bar-container {
              margin: 12px 5px 6px 5px;
              .progress-bar-outer {
                border: 1px solid #666;
                box-shadow: inset 0 0 3px #000;
                border-radius: 4px;
                height: 10px;
                width: calc(100% -3px);
                .progress-bar-inner {
                  border-radius: 4px;
                  transition: 0.5s;
                  background: linear-gradient(
                    120deg,
                    ${theme.colors.fuchsia},
                    ${theme.colors.turquoise},
                    ${theme.darkcolors.background}
                  );
                  background-size: 150%;
                  animation: gradient 40s ease infinite;
                  height: 8px;
                }
                @keyframes gradient {
                  0% { background-position: 0 0; }
                  50% { background-position: 100% 0; }
                  100% { background-position:  0 0; }
                }
              }
            }

            .make-progress-container {
              margin: 0 5px 0 5px;
              .progress-button {
                cursor: pointer;
                background: ${theme.darkcolors.background};
                font-family: 'EuroStyle';
                font-weight: bold;
                letter-spacing: .2em;
                border: none;
                height: 30px;
                border-radius: 5px;
                transition: .5s ease;
                :hover {
                  color: #fff;
                  text-shadow: 0 0 5px #fff;
                  letter-spacing: .3em;
                }
              }
              .make-progress-button {
                width:70%;
                color: ${theme.colors.turquoise};
                text-shadow: 0 0 15px ${theme.colors.turquoise};
                box-shadow: inset 0 0 6px ${theme.colors.turquoise};
                :hover {
                  box-shadow: inset 0 0 4px ${theme.colors.turquoise};
                }
                :active {
                  box-shadow: inset 0 0 20px ${theme.colors.turquoise};
                }
                :disabled {
                  border: 1px solid #222;
                  color: #666;
                  box-shadow: inset 0 0 6px #666;
                  text-shadow: 0 0 15px #222;
                  cursor: not-allowed;
                }
              }
              .revert-progress-button {
                width: 28%;
                margin: 0 0 0 2%;
                color: ${theme.colors.fuchsia};
                text-shadow: 0 0 15px ${theme.colors.fuchsia};
                box-shadow: inset 0 0 6px ${theme.colors.fuchsia};
                :hover {
                  box-shadow: inset 0 0 4px ${theme.colors.fuchsia};
                }
                :active {
                  box-shadow: inset 0 0 20px ${theme.colors.fuchsia};
                }
                :disabled {
                  border: 1px solid #222;
                  color: #666;
                  box-shadow: inset 0 0 6px #666;
                  text-shadow: 0 0 15px #222;
                  cursor: not-allowed;
                }
              }

            }
            .hidden-make-progress-container {
              display: none;
            }

            .selectors-container {
              display: flex;
              flex-flow: row;
              flex-wrap: wrap;
              margin: 10px 0;

              .ranks-container {
                margin: 3px 5px;
                display: flex;
                flex-basis: 150px;
                flex-grow: 1;
                text-align: center;
                .rank-label {
                  font-size: 0.7em;
                  font-weight: bold;
                  width: 30%;
                  padding: 8px 0 0 0;
                }
                select {
                  border: 1px solid ${theme.colors.turquoise};
                  border-radius: 5px;
                  color: ${theme.colors.turquoise};
                  cursor: pointer;
                  background-color: ${theme.darkcolors.background};
                  box-shadow: inset 0 0 5px ${theme.colors.turquoise};
                  height: 30px;
                  padding: 5px;
                  margin: 0 5px;
                  flex-grow: 1;
                  font-family: 'EuroStyle';
                  font-weight: bold;
                  letter-spacing: 0.1em;
                  text-align: center;
                  :disabled {
                    border: 1px solid #222;
                    color: #666;
                    box-shadow: inset 0 0 6px #666;
                    text-shadow: 0 0 15px #222;
                    cursor: not-allowed;
                  }
                }
              }

              .state-container {
                margin: 3px 5px;
                display: flex;
                flex-basis: 150px;
                flex-grow: 1;
                text-align: center;
                .state-label {
                  font-size: 0.7em;
                  font-weight: bold;
                  width: 30%;
                  padding: 8px 0 0 0;
                }
                select {
                  border: 1px solid ${theme.colors.turquoise};
                  border-radius: 5px;
                  color: ${theme.colors.turquoise};
                  cursor: pointer;
                  background-color: ${theme.darkcolors.background};
                  box-shadow: inset 0 0 5px ${theme.colors.turquoise};
                  height: 30px;
                  padding: 5px;
                  margin: 0 5px;
                  flex-grow: 1;
                  font-family: 'EuroStyle';
                  font-weight: bold;
                  letter-spacing: 0.1em;
                  text-align: center;
                }
              }

            }
            .hidden-selectors-container {
              display: none;
            }

            .restore-button-container {
              margin: 10px 0;
              button {
                cursor: pointer;
                background: ${theme.darkcolors.background};
                font-family: 'EuroStyle';
                font-weight: bold;
                letter-spacing: .2em;
                border: none;
                height: 50px;
                border-radius: 5px;
                transition: .5s ease;
                width: 100%;
                color: ${theme.colors.turquoise};
                text-shadow: 0 0 15px ${theme.colors.turquoise};
                box-shadow: inset 0 0 6px ${theme.colors.turquoise};
                :hover {
                  box-shadow: inset 0 0 4px ${theme.colors.turquoise};
                  color: #fff;
                  text-shadow: 0 0 5px #fff;
                  letter-spacing: .3em;
                }
                :active {
                  box-shadow: inset 0 0 20px ${theme.colors.turquoise};
                }
              }

            }
            .hidden-restore-button-container {
              display: none;
            }


            .buttons-container {
              display: flex;
              .button {
                display: flex;
                justify-content: center;
                border: 1px solid ${theme.colors.turquoise};
                box-shadow: inset 0 0 5px ${theme.colors.turquoise};
                color: ${theme.colors.turquoise};
                border-radius: 5px;
                margin: 0 4px;
                flex-grow: 1;
                transition: 0.5s;
                :hover {
                  box-shadow: inset 0 0 15px ${theme.colors.turquoise};
                  cursor: pointer;
                  color: #fff;
                }
              }
              .button.delete {
                border: 1px solid ${theme.colors.fuchsia};
                box-shadow: inset 0 0 5px ${theme.colors.fuchsia};
                color: ${theme.colors.fuchsia};
                :hover {
                  box-shadow: inset 0 0 15px ${theme.colors.fuchsia};
                  color: #fff;
                }
              }

            }
          }

          .challenge-container.minimized .challenge-controls {
            opacity: 0;
            max-height: 0px;
            visibility: hidden;
          }

          .challenge-container.challenge-indent-0 {
            margin-left: 0px;
          }
          .challenge-container.challenge-indent-1 {
            margin-left: 20px;
          }
          .challenge-container.challenge-indent-2 {
            margin-left: 40px;
          }

          .challenge-container.state-active {
            border: 1px solid #585d66ff;
            box-shadow: inset 0 0 5px #585d66ff;
            background: #242d39ff;
          }

          .challenge-container.state-fulfilled {
            border: 1px solid #146157ff;
            box-shadow: inset 0 0 15px #146157ff;
            background: #0f2a27ff;
          }

          .challenge-container.state-failed {
            border: 1px solid #552240ff;
            box-shadow: inset 0 0 15px ${theme.colors.fuchsia};
            background: #291220ff;
          }

          #archived-challenges-container {
            .challenge-container {
              filter: opacity(70%) grayscale(30%);
            }
          }

          .challenge-deleted-anim {
            transition: .5s ease-out;
            margin: 30px 0 30px 0;
            border: 1px solid #0a6d6199;
            border-radius: 5px 15px 5px 5px;
            box-shadow: inset 0 0 5px #000;
            padding: 15px 5px;
            text-align: center;
            vertical-align: middle;
            background: linear-gradient(
              ${theme.colors.fuchsia},
              #000,
              ${theme.colors.fuchsia},
              #000,
              ${theme.colors.fuchsia}
            )
            0 0/100% 200%;
            background-size: 100% 20%;
            animation: gradient 6s linear infinite;
            &.phase1 {
              height: 150px !important;
              opacity: .7;
              box-shadow: inset 0 0 15px #000;
              font-size: .9em;
              filter: saturate(75%);
            }
            &.phase2 {
              height: 100px !important;
              opacity: .5;
              box-shadow: inset 0 0 30px #000;
              font-size: .7em;
              filter: saturate(50%);
            }
            &.phase3 {
              height: 50px !important;
              opacity: .2;
              box-shadow: inset 0 0 60px #000;
              font-size: .5em;
              filter: saturate(25%);
            }
            &.phase4 {
              padding: 0;
              margin: 0;
              height: 1px !important;
              opacity: 0;
              box-shadow: inset 0 0 120px #000;
              font-size: .3em;
              filter: saturate(1%);
            }
            span {
              transition: .5s;
              display: inline-block;
              margin: 0 auto;
              font-weight: bold;
              color: #ffff;
              text-shadow: 0 0 5px ${theme.colors.fuchsia};
            }
          }
        }
        @keyframes gradient {
          to {background-position:0 -800%};
        }

        ${'' /* GLITCH EFFECT */}
        span.glitch {
          display: inline-block;
          position: relative;
          color: white;
          font-size: 1em;
          font-weight: bold;
          letter-spacing: 0.1em;
          animation: glitch-skew 1s infinite linear alternate-reverse;
          text-shadow: 0 0 15px ${theme.colors.fuchsia}, 0 0 3px #fff;
        }
        span.glitch::before {
          content: attr(data-text);
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          left: 2px;
          text-shadow: -2px 0 ${theme.colors.fuchsia}, 0 0 3px ${theme.colors.turquoise};
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim 5s infinite linear alternate-reverse;
        }
        span.glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          left: -2px;
          text-shadow: -2px 0 ${theme.colors.turquoise}, 2px 2px ${theme.colors.fuchsia};
          animation: glitch-anim2 1s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim {
          0% {
            clip: rect(37px, 9999px, 80px, 0);
            transform: skew(0.19deg);
          }
          5% {
            clip: rect(53px, 9999px, 12px, 0);
            transform: skew(0.93deg);
          }
          10% {
            clip: rect(60px, 9999px, 54px, 0);
            transform: skew(0.18deg);
          }
          15% {
            clip: rect(5px, 9999px, 53px, 0);
            transform: skew(0.06deg);
          }
          20% {
            clip: rect(29px, 9999px, 72px, 0);
            transform: skew(0.23deg);
          }
          25% {
            clip: rect(62px, 9999px, 54px, 0);
            transform: skew(0.34deg);
          }
          30% {
            clip: rect(9px, 9999px, 9px, 0);
            transform: skew(0.75deg);
          }
          35% {
            clip: rect(70px, 9999px, 25px, 0);
            transform: skew(0.62deg);
          }
          40% {
            clip: rect(33px, 9999px, 61px, 0);
            transform: skew(0.83deg);
          }
          45% {
            clip: rect(47px, 9999px, 18px, 0);
            transform: skew(0.36deg);
          }
          50% {
            clip: rect(2px, 9999px, 42px, 0);
            transform: skew(0.09deg);
          }
          55% {
            clip: rect(89px, 9999px, 13px, 0);
            transform: skew(0.57deg);
          }
          60% {
            clip: rect(84px, 9999px, 7px, 0);
            transform: skew(0.54deg);
          }
          65% {
            clip: rect(95px, 9999px, 48px, 0);
            transform: skew(0.68deg);
          }
          70% {
            clip: rect(85px, 9999px, 85px, 0);
            transform: skew(0.45deg);
          }
          75% {
            clip: rect(8px, 9999px, 92px, 0);
            transform: skew(0.41deg);
          }
          80% {
            clip: rect(35px, 9999px, 86px, 0);
            transform: skew(0.03deg);
          }
          85% {
            clip: rect(3px, 9999px, 89px, 0);
            transform: skew(0.78deg);
          }
          90% {
            clip: rect(86px, 9999px, 8px, 0);
            transform: skew(0.66deg);
          }
          95% {
            clip: rect(47px, 9999px, 95px, 0);
            transform: skew(0.37deg);
          }
          100% {
            clip: rect(92px, 9999px, 65px, 0);
            transform: skew(0.29deg);
          }
        }
        @keyframes glitch-anim2 {
          0% {
            clip: rect(80px, 9999px, 37px, 0);
            transform: skew(0.33deg);
          }
          5% {
            clip: rect(40px, 9999px, 55px, 0);
            transform: skew(0.13deg);
          }
          10% {
            clip: rect(65px, 9999px, 83px, 0);
            transform: skew(0.82deg);
          }
          15% {
            clip: rect(31px, 9999px, 37px, 0);
            transform: skew(0.27deg);
          }
          20% {
            clip: rect(92px, 9999px, 77px, 0);
            transform: skew(0.63deg);
          }
          25% {
            clip: rect(87px, 9999px, 95px, 0);
            transform: skew(0.35deg);
          }
          30% {
            clip: rect(37px, 9999px, 12px, 0);
            transform: skew(0.7deg);
          }
          35% {
            clip: rect(90px, 9999px, 39px, 0);
            transform: skew(0.47deg);
          }
          40% {
            clip: rect(99px, 9999px, 37px, 0);
            transform: skew(0.38deg);
          }
          45% {
            clip: rect(55px, 9999px, 7px, 0);
            transform: skew(0.38deg);
          }
          50% {
            clip: rect(51px, 9999px, 36px, 0);
            transform: skew(0.98deg);
          }
          55% {
            clip: rect(41px, 9999px, 13px, 0);
            transform: skew(0.53deg);
          }
          60% {
            clip: rect(39px, 9999px, 74px, 0);
            transform: skew(0.73deg);
          }
          65% {
            clip: rect(29px, 9999px, 5px, 0);
            transform: skew(0.31deg);
          }
          70% {
            clip: rect(43px, 9999px, 22px, 0);
            transform: skew(0.77deg);
          }
          75% {
            clip: rect(49px, 9999px, 90px, 0);
            transform: skew(0.24deg);
          }
          80% {
            clip: rect(98px, 9999px, 61px, 0);
            transform: skew(0.33deg);
          }
          85% {
            clip: rect(62px, 9999px, 96px, 0);
            transform: skew(0.26deg);
          }
          90% {
            clip: rect(15px, 9999px, 75px, 0);
            transform: skew(0.95deg);
          }
          95% {
            clip: rect(28px, 9999px, 4px, 0);
            transform: skew(0.78deg);
          }
          100% {
            clip: rect(35px, 9999px, 90px, 0);
            transform: skew(0.09deg);
          }
        }
        @keyframes glitch-skew {
          0% {
            transform: skew(-1deg);
          }
          10% {
            transform: skew(-4deg);
          }
          20% {
            transform: skew(-3deg);
          }
          30% {
            transform: skew(1deg);
          }
          40% {
            transform: skew(3deg);
          }
          50% {
            transform: skew(5deg);
          }
          60% {
            transform: skew(5deg);
          }
          70% {
            transform: skew(3deg);
          }
          80% {
            transform: skew(-4deg);
          }
          90% {
            transform: skew(-2deg);
          }
          100% {
            transform: skew(-1deg);
          }
        }
        ${'' /* END GLITCH EFFECT */}

        ${'' /* BOOST EFFECT */}
        span.boost {
          display: inline-block;
          font-size: 1em;
          font-weight: bold;
          background-image: linear-gradient(
            -40deg, 
            rgba(255,255,255,0) 0%, 
            rgba(255,255,255,0) 40%, 
            #fff 50%, 
            rgba(255,255,255,0) 60%, 
            rgba(255,255,255,0) 100%
          );
          color: rgba(255, 255, 255, 0.1);
          -webkit-background-size: 50px;
          -webkit-background-clip: text;
          -webkit-animation-name: shine;
          -webkit-animation-duration: 15s;
          -webkit-animation-iteration-count: infinite;
          background-size: 50px;
          animation-name: shine;
          animation-duration: 15s;
          animation-iteration-count: infinite;
          text-shadow: 0 0 0 ${theme.colors.shine};
          ${'' /* -webkit-text-stroke: 1px #ffffff11; */}
        }

        @-webkit-keyframes shine {
          0%, 10% {
            background-position: 200px;
            text-shadow: 0 0 0 ${theme.colors.shine};
            transform: skew(0deg);
          }
          50% {
            text-shadow: 0 0 0 ${theme.colors.boost.light};
            transform: skew(-10deg);
          }
          75% {
            text-shadow: 0 0 0 ${theme.colors.shine};
            transform: skew(-5deg);
          }
          100% {
            background-position: -200px;
            transform: skew(0deg);
          }
        }

        ${'' /* END BOOST EFFECT */}

        ${'' /* ORACLE PAGES  */}
        div#oracles-log {
          border: 1px solid #444;
          background-color: ${theme.darkcolors.components.input.background};
          border-radius: 5px;
          font-size: 0.9em;
          padding: 5px 10px;
          box-shadow: inset 0 0 5px #000;
          height: 150px;
          overflow: auto;
          color: #999;
          transition: 1s;
          :after {
            content: "ORACLE LOG";
            color: #444;
            text-shadow: 0 0 10px #000;
            float: right;
            font-style: italic;
            font-weight: bold;
            font-size: 0.8em;
          }
          .log-entry {
            line-height: 25px;
          }
          /* width */
          ::-webkit-scrollbar {
            width: 10px;
            transition: 1s;
          }
          /* Track */
          ::-webkit-scrollbar-track {
            background: #222; 
            box-shadow: inset 0 0 5px #000;
          }
          /* Handle */
          ::-webkit-scrollbar-thumb {
            background: ${theme.colors.turquoise};
            transition: 1s;
            border-radius: 3px;
            box-shadow: inset 0 0 5px ${theme.colors.turquoise};
          }
          /* Handle on hover */
          ::-webkit-scrollbar-thumb:hover {
            background: ${theme.colors.fuchsia};
            transition: 1s;
            box-shadow: 0 0 5px ${theme.colors.fuchsia};
          }
        }

        .oracles-container {
          min-height: 850px;
          h4 {
            color: #666;
            text-shadow: 0 0 6px #444;
          }
          a {
            text-shadow: 0 0 5px ${theme.colors.turquoise};
            color: ${theme.colors.turquoise};
          }
          blockquote {
            font-size: 0.8em;
            p {
              padding: 0.5em 0.8em;
            }
          }
          .oracle-container {
            display: flex;
            margin: 0 auto;
            .oracle-result {
              width: 75%;
              background-color: ${theme.darkcolors.components.input.background};
              padding: 5px 6px 4px 9px;
              font-family: 'EuroStyle';
              font-weight: bold;
              border: 1px solid ${theme.colors.turquoise};
              border-radius: 3px 0 0 3px;
              min-height: 35px;
              font-size: 1em;
              color: ${theme.darkcolors.components.input.text};
              transition: 1s;
            }
            .oracle-result.toggled {
              box-shadow: inset 0 0 15px ${theme.colors.turquoise};
              text-shadow: 0 0 15px ${theme.colors.fuchsia};
              color: ${theme.colors.fuchsia};
            }
            button.randomize-button {
              border: 2px solid ${theme.colors.fuchsia};
              overflow: hidden;
              background-color: #000;
              min-height: 35px;
              width: 25%;
              padding: 5px 10px;
              color: ${theme.colors.fuchsia};
              font-family: 'EuroStyle';
              font-weight: bold;
              font-size: 0.6em;
              letter-spacing: 0.1em;
              box-shadow: inset 0 0 10px ${theme.colors.fuchsia};
              border-radius: 0 10px 10px 0;
              transition: 0.2s;
              :before {
                content: "RANDOMIZE";
              }
              @media screen and (max-width: 800px) {
                font-size: 0.5em;
              }
              @media screen and (max-width: 450px) {
                font-size: 0.6em;
                :before {
                  content: "GET";
                }
              }
              :active {
                box-shadow: inset 0 0 20px ${theme.colors.fuchsia}, 5px 0 15px ${theme.colors.fuchsia};
                color: #fff;
                text-shadow: 0 0 5px ${theme.colors.fuchsia};
              }

            }
          }

        } 

        ${'' /* END ORACLE PAGES  */}

        ${'' /* IMPORT/EXPORT PAGE  */}
        div.import-export-container {
          button#export, button#delete-all, input#import {
            width: 100%;
            margin: 10px 0 20px 0 : "hidden-make-progress-container";
            border: 2px solid ${theme.colors.fuchsia};
            overflow: hidden;
            background-color: #000;
            min-height: 35px;
            padding: 5px 10px;
            color: ${theme.colors.fuchsia};
            font-family: 'EuroStyle';
            font-weight: bold;
            font-size: 0.6em;
            letter-spacing: 0.1em;
            box-shadow: inset 0 0 10px ${theme.colors.fuchsia};
            border-radius: 5px;
            transition: 0.2s;
            :active {
              box-shadow: inset 0 0 20px ${theme.colors.fuchsia}, 5px 0 15px ${theme.colors.fuchsia};
              color: #fff;
              text-shadow: 0 0 5px ${theme.colors.fuchsia};
            }
          }
          blockquote {
            font-size: 0.8em;
            p {
              padding: 0.5em 0.8em;
            }
          }
        }
        ${'' /* END IMPORT/EXPORT PAGE  */}

        ${'' /* HOW TO PLAY PAGE  */}

        div.gatsby-highlight {
          button {
            visibility: hidden;
            top: 7px;
          }
          button:after {
            visibility: visible;
            content: 'EXAMPLE';
            color: ${theme.colors.turquoise};
            font-style: italic;
            font-family: 'EuroStyle';
            letter-spacing: 0.2em;
            opacity: 0.5;
            background: #000;
            padding: 3px 5px;
            border-radius: 3px;
          }
          pre {
            overflow: hidden;
            word-wrap: break-word;
            white-space : pre-wrap !important;
          }
          code .token-line {
            margin: 5px 0 0 0;
          }
        }        

        ${'' /* END HOW TO PLAY PAGE  */}
        
      `}
    />
  );
}