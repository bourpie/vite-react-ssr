import React from 'react'
import { alpha } from '@mui/material/styles';
import './sass/main.scss'
import { PageContextProvider } from './usePageContext'
import { SqHeader } from '../components/SqHeader/SqHeader'
import { SqFooter } from '../components/SqFooter/SqFooter'
import { SqContenu } from '../components/SqContenu/SqContenu'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

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
