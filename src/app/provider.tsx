import { ThemeProvider } from '@/providers/themes'
import React from 'react'

const AppProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            {children}
        </ThemeProvider>
    )
}

export default AppProviders