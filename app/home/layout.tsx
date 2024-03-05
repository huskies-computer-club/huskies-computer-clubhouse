import { Navbar } from '@/components/navbar'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode
    params: { storeId: string }
}

export default async function HomeLayout({ children, params }: Props) {
    const { userId } = auth()


    if (!userId) {
        redirect('/sign-in')
    }

    return (
        <>
            <Navbar />
            {children}
        </>
    )
}
