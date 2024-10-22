
import React from 'react'
import { Hint } from '@/components/tootips'
import Image from 'next/image'

export const ViewButton = () => {
    return (
        <div>
            <Hint
                side="top"
                align="center"
                label="View"
            >
                <Image src="/icons/view.svg" alt="edit" className="ease-in-out transition hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer" width={20} height={20} />
            </Hint>
        </div>
    )
}