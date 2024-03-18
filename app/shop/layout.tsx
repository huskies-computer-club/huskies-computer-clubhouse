import { ShopNavbar } from '@/components/shop/navbar'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}


export default async function ShopLayout({ children }: Props) {
    return (
        <div>
            <ShopNavbar />
            <div>
                {children}
            </div>
        </div>
    )
}
