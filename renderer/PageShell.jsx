import React from 'react'
import logo from './logo.svg'
import './PageShell.scss'
import { PageContextProvider } from './usePageContext'
import { SqFooter } from '../components/SqFooter/SqFooter'
import { Link } from './Link'

export { PageShell }

function PageShell({ pageContext, children }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <>
          <SqHeader>
            <Logo />
            <Link className="navitem" href="/">
              Home
            </Link>
            <Link className="navitem" href="/about">
              About
            </Link>
          </SqHeader>
          <Content>{children}</Content>
          <SqFooter />
        </>
      </PageContextProvider>
    </React.StrictMode>
  )
}

function Layout({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        maxWidth: 900,
        margin: 'auto',
      }}
    >
      {children}
    </div>
  )
}

function SqHeader({ children }) {
  return (
    <header
      style={{
      }}
    >
      {children}
    </header>
  )
}

function Content({ children }) {
  return (
    <main
      style={{
      }}
    >
      {children}
    </main>
  )
}

function Logo() {
  return (
    <div
      style={{
      }}
    >
      <a href="/">
        <img src={logo} height={64} width={64} alt="logo" />
      </a>
    </div>
  )
}
