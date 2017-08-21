import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled, { injectGlobal } from 'styled-components'

//import './index.css'

injectGlobal`
  html {
    box-sizing:border-box;
    font-size:100%;
  }

  *, *::before, *::after {
    box-sizing:inherit;
  }

  body {
    color:#555;
    padding-top: 5em;
    font-family:georgia,serif;
  }

  h1,h2,
  h3,h4,
  h5,h6 {
    color:#333;
    font-weight:300;
  }

`

const SideBarStyles = styled.aside`
  > div {
    background-color: #eee;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  height: 100vh;
`

const HeaderStyles = styled.header`
  height: 10vh;
  display: flex;
  font-weight: 400;
  justify-content: center;
  font-family: georgia;
  font-style: italic;
  align-items: center;
  margin-bottom: 3.5em;
  padding: 0.7em 0 0 0.2em;
  max-width: 73%;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 780px) {
    flex-direction: column;
    align-items: center;
    justify-items: center;
    max-width: 100%;
  }
`

const HeaderLink = styled(Link)`
  text-decoration:none;
  font-size: 2.3em;
  letter-spacing: -0.01em;
  margin-right:auto;
  align-self:center;
  font-weight:500;
  &:link{
    color:#555;
  }

  &:visited {
    color:#333;
  }
  @media screen and (max-width: 780px) {
    margin-right:0;
    margin-bottom:10px;
  }

`

const NavLink = styled(Link)`
  margin-right: 1.4em;
  font-size:1.3em;
  letter-spacing:0.05em;
  font-variant:small-caps;
  align-self:center;
  text-decoration:none;
  border-bottom:1px solid transparent;
  will-change:all;
  transition:border-bottom-color 0.2s linear;

  @media screen and (max-width: 780px) {
    margin-right:0;

    &:last-child {
      margin-bottom: 50px;
    }
  }
  &:link {
    color:#555;
  }

  &:visited {
    color:#333;
  }

  &:hover {
    border-bottom-color: #222;
  }
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 65%;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;

  @media screen and (max-width: 780px) {
    max-width: 80%;
  }
`

const SideBar = () =>
  <SideBarStyles>
    <div>asdasd</div>
    <div />
    <div />
  </SideBarStyles>

const Header = () =>
  <HeaderStyles>
    <HeaderLink to="/">The Blog</HeaderLink>
    <NavLink to="/">One</NavLink>
    <NavLink to="/page-2/">Two</NavLink>
    <NavLink to="/page-3/">Three</NavLink>
    <NavLink to="/page-4/">Four</NavLink>
  </HeaderStyles>

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Practice One Font with Georgia"
      meta={[
        {
          name: 'description',
          content: 'A website that exhibits one font prowess.'
        },
        { name: 'keywords', content: 'georgia, one font, practice' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]}
    />
    <Header />
    <Container>
      {children()}
    </Container>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
