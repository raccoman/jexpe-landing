import '@/tailwind.css'
import { NextPageLayout } from '@/types'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Jexpe',
    description: 'The alternative agency for alternative brands.',
}

const PageLayout: NextPageLayout = ({ children }) => (
    <html lang='en'>
    <head>
        <link rel='icon' href='./favicon.ico' />
        <title>{metadata.title}</title>
    </head>
    <body className={inter.className}>{children}</body>
    </html>
)

export default PageLayout
