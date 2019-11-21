import styled from 'styled-components';

export const FooterWrapper = styled.div`
  clear: both;
	margin-top: 20px;
	padding: 20px 10px;
	background: #333;
	color: #fff;
	font-size: 12px;
	line-height: 22px;

  .group {
    float: left;
    width: 10%;
    box-sizing: border-box;
    padding: 0 30px 20px 0;
    font-size: 12px;
    overflow: hidden;
    width: 33%;
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }

  .group li, .group li a, .ffooter, .ffooter a {
    color: #999;
  }

  .group li a:hover {
    text-decoration: underline;
  }

  .ffooter {
    padding-top: 10px;
    border-top: 1px solid rgba(255,255,255,.065);
    text-align: center;
  }
`;