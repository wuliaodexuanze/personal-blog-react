import styled from 'styled-components';

export const ArticleWrapper = styled.article `
  .top {
    background-color: #fff;
    padding: 20px;
    border: 1px solid #ececec;
    overflow: hidden;
  }

  .title {
    border-bottom: 1px dashed #ddd;
    margin-bottom: 20px;

    h1 {
      font-size: 2em;
      line-height: normal;
      color: #24292e;
      margin-top: .3em;
      margin-bottom: .3em;
    }
  }

  .subtitle {
    font-size: .9em;
    color: #999;

    a {
      font-size: .9em;
      color: #999;

      &:hover {
        color: #046bb0;
        text-decoration: underline;
      }
    }
    
    .item {
      display: inline-block;
      margin-right: 10px;
      color: #666;

      span {
        margin-right: 3px;
      }
    }
  }

  .tag {
    span {
      margin-right: 0;
    }
    a {
      margin-right: 3px;
      background: #bbb;
      padding: 1px 2px;
      color: #f8f8f8;

      &:hover {
        background: #09f;
        color: #fff;
      }
    }
  }

  .postcopyright {
    padding: 13px 20px;
    margin: 10px 0;
    font-size: .85em;
    background-color: #f7f7f7;
    color: #393a3b;
    overflow-x: auto;
  }

  .paging {
    background-color: #fbfbfb;
    overflow: hidden;
    padding: 15px 20px;
    font-size: 15px;
    color: #999;
    margin-bottom: 20px;
    border: 1px solid #ececec;
    border-top: 0;

    .first {
      float: left;
      width: 100%;

      @media (min-width: 1024px) {
        width: 49%;
      }
    }

    .last {
      float: right;
      width: 100%;

      @media (min-width: 992px) {
        width: 49%;
      }
    }

    a {
      color: #666;
      font-size: .9em;
      
      &:hover {
        color: #046bb0;
        text-decoration: underline;
      }
    }
  }

  .favor {
    display: none;
    position: fixed;
    top: 0;
    left: -62px;
    width: 52px;
    height: 52px;
    font-size: 18px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
    box-shadow: 0 3px 10px rgba(0,0,0,.2);
    background-color: #fff;
    text-align: center;
    user-select: none;
    cursor: pointer;

    @media (min-width: 1200px) {
      display: block;
    }

    &.active {
      color: #fff;
      background: #046bb0;
      box-shadow: 0 3px 10px #046bb0;
    }

    &:hover,&:active,&:visited,&:focus {
      color: #fff;
      background: rgba(255, 102, 1, .7);
      border-color: rgba(255,102,1,.7);
      box-shadow: 0 3px 10px rgba(255,102,1,.7);
    }

    .text {
      display: block;
      font-size: 12px;
      line-height: 1.5;
    }
  }

  .bottom-favor {
    display: none;
    flex-direction: column;
    width: 60px;
    height: 60px;
    text-align: center;
    margin: 20px auto 0;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
    box-shadow: 0 2px 10px rgba(0,0,0,.2);
    justify-content: center;
    background-color: #fff;
    border-radius: 50%;

    &.active {
      color: #fff;
      background: #046bb0;
      box-shadow: 0 3px 10px #046bb0;
    }

    &:hover,&:active,&:visited,&:focus {
      color: #fff;
      background: rgba(255, 102, 1, .7);
      border-color: rgba(255,102,1,.7);
      box-shadow: 0 3px 10px rgba(255,102,1,.7);
    }

    @media (max-width: 1200px) {
      display: flex;
    }

    .fa {
      font-size: 22px;
    }

    .text {
      display: block;
      font-size: 14px;
    }
  }

  .comment {

    .comment-title {
      color: #333;
      font-weight: 600;
    }
    .text {
      width: 100%;
      min-height: 160px;
      resize: none;
      border: 1px solid #ddd;
      background: #fff;
      outline: none;
      padding: 10px;
      display: block;
      font-size: .9em;
      box-sizing: border-box;

      &:focus, &:active {
        border-color: #09f;
      }
    }

    .comment-btn {
      padding: .1rem .4rem;
      font-size: .8rem;
      line-height: 1.5;
      color: #f8f8f8;
      border: 1px solid transparent;
      background: #09f;
      cursor: pointer;
      margin-top: 15px;
    }
  }

  .comment-list {
    margin-top: 15px;
    .list-title {
      padding: 10px 0;
      color: #333;
      font-weight: 600;
      border-bottom: 1px solid #ddd;
    }
    .head {
      span {
        margin-right: 10px;
        font-size: .9em;
      }
    }

    .text {
      border-bottom: 1px solid #ddd;
      padding: 20px 18px 10px 15px;
      min-height: 35px;
      margin-bottom: 1em;
      line-height: 1.5;
      font-size: .9em;
      color: #333;

      p {
        word-wrap: break-word;
        overflow: hidden;
      }
    }

    .text-bottom {
      text-align: right;

      a {
        padding: 0 5px;
        color: #333;

        &:hover {
          color: #ff0000;
        }
      }
      .active {
        color: #f60;
      }
    }
  }
`;

export const MarkDownWrapper = styled.article`
  @font-face {
    font-family: octicons-link;
    src: url(data:font/woff;charset=utf-8;base64,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) format('woff');
  }

  img {
    width: auto;
    height: auto;
  }

  p {
    img {
      display: flex;
      margin: 0 auto;
    }
  }

  text-size-adjust: 100%;
  color: #353535;
  line-height: 1.5;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;

  .octicon {
    display: inline-block;
    fill: currentColor;
    vertical-align: text-bottom;
  }

  .anchor {
    float: left;
    line-height: 1;
    margin-left: -20px;
    padding-right: 4px;
  }

  .anchor:focus {
    outline: none;
  }

  h1 .octicon-link,
  h2 .octicon-link,
  h3 .octicon-link,
  h4 .octicon-link,
  h5 .octicon-link,
  h6 .octicon-link {
    color: #1b1f23;
    vertical-align: middle;
    visibility: hidden;
  }

  h1:hover .anchor,
  h2:hover .anchor,
  h3:hover .anchor,
  h4:hover .anchor,
  h5:hover .anchor,
  h6:hover .anchor {
    text-decoration: none;
  }

  h1:hover .anchor .octicon-link,
  h2:hover .anchor .octicon-link,
  h3:hover .anchor .octicon-link,
  h4:hover .anchor .octicon-link,
  h5:hover .anchor .octicon-link,
  h6:hover .anchor .octicon-link {
    visibility: visible;
  }

  .pl-c {
    color: #6a737d;
  }

  .pl-c1,
  .pl-s .pl-v {
    color: #005cc5;
  }

  .pl-e,
  .pl-en {
    color: #6f42c1;
  }

  .pl-s .pl-s1,
  .pl-smi {
    color: #24292e;
  }

  .pl-ent {
    color: #22863a;
  }

  .pl-k {
    color: #d73a49;
  }

  .pl-pds,
  .pl-s,
  .pl-s .pl-pse .pl-s1,
  .pl-sr,
  .pl-sr .pl-cce,
  .pl-sr .pl-sra,
  .pl-sr .pl-sre {
    color: #032f62;
  }

  .pl-smw,
  .pl-v {
    color: #e36209;
  }

  .pl-bu {
    color: #b31d28;
  }

  .pl-ii {
    background-color: #b31d28;
    color: #fafbfc;
  }

  .pl-c2 {
    background-color: #d73a49;
    color: #fafbfc;
  }

  .pl-c2:before {
    content: "^M";
  }

  .pl-sr .pl-cce {
    color: #22863a;
    font-weight: 700;
  }

  .pl-ml {
    color: #735c0f;
  }

  .pl-mh,
  .pl-mh .pl-en,
  .pl-ms {
    color: #005cc5;
    font-weight: 700;
  }

  .pl-mi {
    color: #24292e;
    font-style: italic;
  }

  .pl-mb {
    color: #24292e;
    font-weight: 700;
  }

  .pl-md {
    background-color: #ffeef0;
    color: #b31d28;
  }

  .pl-mi1 {
    background-color: #f0fff4;
    color: #22863a;
  }

  .pl-mc {
    background-color: #ffebda;
    color: #e36209;
  }

  .pl-mi2 {
    background-color: #005cc5;
    color: #f6f8fa;
  }

  .pl-mdr {
    color: #6f42c1;
    font-weight: 700;
  }

  .pl-ba {
    color: #586069;
  }

  .pl-sg {
    color: #959da5;
  }

  .pl-corl {
    color: #032f62;
    text-decoration: underline;
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  a {
    background-color: transparent;
  }

  a:active,
  a:hover {
    outline-width: 0;
  }

  strong {
    font-weight: inherit;
    font-weight: bolder;
  }

  h1 {
    font-size: 2em;
    margin: .67em 0;
  }

  img {
    border-style: none;
  }

  code,
  kbd,
  pre {
    font-family: monospace,monospace;
    font-size: 1em;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  input {
    font: inherit;
    margin: 0;
  }

  input {
    overflow: visible;
  }

  [type=checkbox] {
    box-sizing: border-box;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  input {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  a {
    color: #0366d6;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  strong {
    font-weight: 600;
  }

  hr {
    background: transparent;
    border: 0;
    border-bottom: 1px solid #dfe2e5;
    height: 0;
    margin: 15px 0;
    overflow: hidden;
  }

  hr:before {
    content: "";
    display: table;
  }

  hr:after {
    clear: both;
    content: "";
    display: table;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
  }

  details summary {
    cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 0;
    margin-top: 0;
  }

  h1 {
    font-size: 32px;
  }

  h1,
  h2 {
    font-weight: 600;
  }

  h2 {
    font-size: 24px;
  }

  h3 {
    font-size: 20px;
  }

  h3,
  h4 {
    font-weight: 600;
  }

  h4 {
    font-size: 16px;
  }

  h5 {
    font-size: 14px;
  }

  h5,
  h6 {
    font-weight: 600;
  }

  h6 {
    font-size: 12px;
  }

  p {
    margin-bottom: 10px;
    margin-top: 0;
  }

  blockquote {
    margin: 0;
  }

  ol,
  ul {
    margin-bottom: 0;
    margin-top: 0;
    padding-left: 0;
  }

  ol ol,
  ul ol {
    list-style-type: lower-roman;
  }

  ol ol ol,
  ol ul ol,
  ul ol ol,
  ul ul ol {
    list-style-type: lower-alpha;
  }

  dd {
    margin-left: 0;
  }

  code,
  pre {
    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
    font-size: 12px;
  }

  pre {
    margin-bottom: 0;
    margin-top: 0;
  }

  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }

  .border {
    border: 1px solid #e1e4e8!important;
  }

  .border-0 {
    border: 0!important;
  }

  .border-bottom {
    border-bottom: 1px solid #e1e4e8!important;
  }

  .rounded-1 {
    border-radius: 3px!important;
  }

  .bg-white {
    background-color: #fff!important;
  }

  .bg-gray-light {
    background-color: #fafbfc!important;
  }

  .text-gray-light {
    color: #6a737d!important;
  }

  .mb-0 {
    margin-bottom: 0!important;
  }

  .my-2 {
    margin-bottom: 8px!important;
    margin-top: 8px!important;
  }

  .pl-0 {
    padding-left: 0!important;
  }

  .py-0 {
    padding-bottom: 0!important;
    padding-top: 0!important;
  }

  .pl-1 {
    padding-left: 4px!important;
  }

  .pl-2 {
    padding-left: 8px!important;
  }

  .py-2 {
    padding-bottom: 8px!important;
    padding-top: 8px!important;
  }

  .pl-3,
  .px-3 {
    padding-left: 16px!important;
  }

  .px-3 {
    padding-right: 16px!important;
  }

  .pl-4 {
    padding-left: 24px!important;
  }

  .pl-5 {
    padding-left: 32px!important;
  }

  .pl-6 {
    padding-left: 40px!important;
  }

  .f6 {
    font-size: 12px!important;
  }

  .lh-condensed {
    line-height: 1.25!important;
  }

  .text-bold {
    font-weight: 600!important;
  }

  before {
    content: "";
    display: table;
  }

  after {
    clear: both;
    content: "";
    display: table;
  }

  :first-child {
    margin-top: 0!important;
  }

  :last-child {
    margin-bottom: 0!important;
  }

  a:not([href]) {
    color: inherit;
    text-decoration: none;
  }

  blockquote,
  dl,
  ol,
  p,
  pre,
  table,
  ul {
    margin-bottom: 16px;
    margin-top: 0;
  }

  hr {
    background-color: #e1e4e8;
    border: 0;
    height: .25em;
    margin: 24px 0;
    padding: 0;
  }

  blockquote {
    border-left: .25em solid #dfe2e5;
    color: #6a737d;
    padding: 0 1em;
  }

  blockquote>:first-child {
    margin-top: 0;
  }

  blockquote>:last-child {
    margin-bottom: 0;
  }

  kbd {
    background-color: #fafbfc;
    border: 1px solid #c6cbd1;
    border-bottom-color: #959da5;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #959da5;
    color: #444d56;
    display: inline-block;
    font-size: 11px;
    line-height: 10px;
    padding: 3px 5px;
    vertical-align: middle;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    line-height: 1.25;
    margin-bottom: 16px;
    margin-top: 24px;
  }

  h1 {
    font-size: 2em;
  }

  h1,
  h2 {
    border-bottom: 1px solid #eaecef;
    padding-bottom: .3em;
  }

  h2 {
    font-size: 1.5em;
  }

  h3 {
    font-size: 1.25em;
  }

  h4 {
    font-size: 1em;
  }

  h5 {
    font-size: .875em;
  }

  h6 {
    color: #6a737d;
    font-size: .85em;
  }

  ol,
  ul {
    padding-left: 2em;
  }

  ol ol,
  ol ul,
  ul ol,
  ul ul {
    margin-bottom: 0;
    margin-top: 0;
  }

  li {
    word-wrap: break-all;
  }

  li>p {
    margin-top: 16px;
  }

  li+li {
    margin-top: .25em;
  }

  dl {
    padding: 0;
  }

  dl dt {
    font-size: 1em;
    font-style: italic;
    font-weight: 600;
    margin-top: 16px;
    padding: 0;
  }

  dl dd {
    margin-bottom: 16px;
    padding: 0 16px;
  }

  table {
    display: block;
    overflow: auto;
    width: 100%;
  }

  table th {
    font-weight: 600;
  }

  table td,
  table th {
    border: 1px solid #dfe2e5;
    padding: 6px 13px;
  }

  table tr {
    background-color: #fff;
    border-top: 1px solid #c6cbd1;
  }

  table tr:nth-child(2n) {
    background-color: #f6f8fa;
  }

  img {
    background-color: #fff;
    box-sizing: content-box;
    max-width: 100%;
  }

  img[align=right] {
    padding-left: 20px;
  }

  img[align=left] {
    padding-right: 20px;
  }

  code {
    background-color: rgba(27,31,35,.05);
    border-radius: 3px;
    font-size: 85%;
    margin: 0;
    padding: .2em .4em;
  }

  pre {
    word-wrap: normal;
  }

  pre>code {
    background: transparent;
    border: 0;
    font-size: 100%;
    margin: 0;
    padding: 0;
    white-space: pre;
    word-break: normal;
  }

  .highlight {
    margin-bottom: 16px;
  }

  .highlight pre {
    margin-bottom: 0;
    word-break: normal;
  }

  .highlight pre,
  pre {
    background-color: #f6f8fa;
    border-radius: 3px;
    font-size: 85%;
    line-height: 1.45;
    overflow: auto;
    padding: 16px;
  }

  pre code {
    background-color: transparent;
    border: 0;
    display: inline;
    line-height: inherit;
    margin: 0;
    overflow: visible;
    padding: 0;
    word-wrap: normal;
  }

  .commit-tease-sha {
    color: #444d56;
    display: inline-block;
    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
    font-size: 90%;
  }

  .blob-wrapper {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    overflow-x: auto;
    overflow-y: hidden;
  }

  .blob-wrapper-embedded {
    max-height: 240px;
    overflow-y: auto;
  }

  .blob-num {
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    color: rgba(27,31,35,.3);
    cursor: pointer;
    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
    font-size: 12px;
    line-height: 20px;
    min-width: 50px;
    padding-left: 10px;
    padding-right: 10px;
    text-align: right;
    user-select: none;
    vertical-align: top;
    white-space: nowrap;
    width: 1%;
  }

  .blob-num:hover {
    color: rgba(27,31,35,.6);
  }

  .blob-num:before {
    content: attr(data-line-number);
  }

  .blob-code {
    line-height: 20px;
    padding-left: 10px;
    padding-right: 10px;
    position: relative;
    vertical-align: top;
  }

  .blob-code-inner {
    color: #24292e;
    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
    font-size: 12px;
    overflow: visible;
    white-space: pre;
    word-wrap: normal;
  }

  .pl-token.active,
  .pl-token:hover {
    background: #ffea7f;
    cursor: pointer;
  }

  kbd {
    background-color: #fafbfc;
    border: 1px solid #d1d5da;
    border-bottom-color: #c6cbd1;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #c6cbd1;
    color: #444d56;
    display: inline-block;
    font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
    line-height: 10px;
    padding: 3px 5px;
    vertical-align: middle;
  }

  :checked+.radio-label {
    border-color: #0366d6;
    position: relative;
    z-index: 1;
  }

  .tab-size[data-tab-size="1"] {
    -moz-tab-size: 1;
    tab-size: 1;
  }

  .tab-size[data-tab-size="2"] {
    -moz-tab-size: 2;
    tab-size: 2;
  }

  .tab-size[data-tab-size="3"] {
    -moz-tab-size: 3;
    tab-size: 3;
  }

  .tab-size[data-tab-size="4"] {
    -moz-tab-size: 4;
    tab-size: 4;
  }

  .tab-size[data-tab-size="5"] {
    -moz-tab-size: 5;
    tab-size: 5;
  }

  .tab-size[data-tab-size="6"] {
    -moz-tab-size: 6;
    tab-size: 6;
  }

  .tab-size[data-tab-size="7"] {
    -moz-tab-size: 7;
    tab-size: 7;
  }

  .tab-size[data-tab-size="8"] {
    -moz-tab-size: 8;
    tab-size: 8;
  }

  .tab-size[data-tab-size="9"] {
    -moz-tab-size: 9;
    tab-size: 9;
  }

  .tab-size[data-tab-size="10"] {
    -moz-tab-size: 10;
    tab-size: 10;
  }

  .tab-size[data-tab-size="11"] {
    -moz-tab-size: 11;
    tab-size: 11;
  }

  .tab-size[data-tab-size="12"] {
    -moz-tab-size: 12;
    tab-size: 12;
  }

  .task-list-item {
    list-style-type: none;
  }

  .task-list-item+.task-list-item {
    margin-top: 3px;
  }

  .task-list-item input {
    margin: 0 .2em .25em -1.6em;
    vertical-align: middle;
  }

  hr {
    border-bottom-color: #eee;
  }

  .pl-0 {
    padding-left: 0!important;
  }

  .pl-1 {
    padding-left: 4px!important;
  }

  .pl-2 {
    padding-left: 8px!important;
  }

  .pl-3 {
    padding-left: 16px!important;
  }

  .pl-4 {
    padding-left: 24px!important;
  }

  .pl-5 {
    padding-left: 32px!important;
  }

  .pl-6 {
    padding-left: 40px!important;
  }

  .pl-7 {
    padding-left: 48px!important;
  }

  .pl-8 {
    padding-left: 64px!important;
  }

  .pl-9 {
    padding-left: 80px!important;
  }

  .pl-10 {
    padding-left: 96px!important;
  }

  .pl-11 {
    padding-left: 112px!important;
  }

  .pl-12 {
    padding-left: 128px!important;
  }
`;