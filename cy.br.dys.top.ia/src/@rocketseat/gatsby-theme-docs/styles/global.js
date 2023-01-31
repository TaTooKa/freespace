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

        body {
          font-size: 22px;
          font-family: ${theme.fonts.body};
          background-color: ${theme.colors.background};
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

        .dark h1 {
          color: ${theme.darkcolors.title};
        }

        h2 {
          font-size: 1.2em;
        }

        h3 {
          font-size: 1.1em;
        }

        h4 {
          font-size: 1em;
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

        .stat {
            font-family: 'Android101';
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
          text-decoration-style: dotted;
          text-decoration-color: ${theme.colors.fuchsia};

          &:hover {
            text-decoration-style: dashed;
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

        form.character-stats {
            overflow: hidden;
            max-width: 400px;

            label, span {
                font-size: 0.8em;
                font-weight: bold;
            }

            .first-row {
                display: flex;
                .left-col {
                    width: 55%;
                    input {
                        width: 100%;
                        margin: 5px;
                    }
                }
                .right-col {
                    margin: 0 0 0 10px;
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
                            margin: 5px auto;
                        }
                    }
                }
            }

            .state-container {
                margin: 10px 0 10px 0;
                width: 100%;
                .input-container {
                    width: 100%;
                    margin: auto;
                    white-space: nowrap;
                    text-align: center;
                }
                label {
                    margin: 0 30px 0 0;
                }
            }

            .stats-container {
                margin: 20px 0 30px 0;
                .stat-container {
                    margin: 10px auto;
                    display: flex;
                    .left-col {
                        label.stat {
                            font-size: 1.2em;
                            display: inline-block;
                            width: 200px;
                            text-align: right;
                        }
                        input {
                            height: 30px;
                            width: 45px;
                        }
                    }
                    .right-col {
                        margin: 0 0 0 15px;
                        span.stat-desc {
                            font-size: 0.6em;
                            font-style: italic;
                            color: #777;
                        }
                    }

                }
            }

            .stat-bar {
                margin: 10px 0 10px 0;
                display: flex;
                width: 100%;
                max-width: 400px;
                .title {
                    font-size: 0.9em;
                    display: block;
                    margin: 0 10px 0 0;
                }
                label {
                    margin: 0 3px 0 3px;
                    border: 1px solid white;
                    padding: 2px 0;
                    color: #555;
                    width: 15%;
                    text-align: center;
                }
                input:checked+label {
                    color: #fff;
                }
                input {
                    display: none;
                }
            }

            .angle-container {
                margin: 30px 0 20px 0;
                .angle-header {
                    display: flex;
                    .angle-title {
                        display: block;
                        width: 30%;
                        font-size: 1.3em;
                        float: left;
                    }
                    .angle-progress {
                        display: flex;
                        width: 60%;
                        float: right;
                        font-size: 1em;
                        margin: 3px 0 0 auto;
                        input {
                            display: block;
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
                    }
                    .col label {
                        display: inline-block;
                        width: 100%;
                        padding: 5px 0 5px 0;
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
      `}
    />
  );
}