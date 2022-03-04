import React from 'react'
import './sass/main.scss'
import { PageContextProvider } from './usePageContext'
import { SqHeader } from '../components/SqHeader/SqHeader'
import { SqFooter } from '../components/SqFooter/SqFooter'
import { SqContenu } from '../components/SqContenu/SqContenu'

export { PageShell }

function PageShell({ pageContext, children }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <>
          <SqHeader>
            {children}
          </SqHeader>
          <SqContenu>
            {children}
          </SqContenu>
          <SqFooter />
        </>
      </PageContextProvider>
    </React.StrictMode>
  )
}
