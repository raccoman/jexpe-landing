'use client'

import { NextPage } from 'next'
import { CONTACT_EMAIL, GITHUB_REPOSITORY } from '@/constants'
import Link from 'next/link'
import { GithubLogo, PaperPlaneTilt } from '@phosphor-icons/react'

const HomePage: NextPage = () => {

    return (
        <div className='sm:h-screen w-screen p-6 sm:p-12 flex'>

            <div className='h-full w-full flex flex-col gap-40 sm:justify-between'>

                <div className='flex justify-between items-center'>
                    <p>Jexpe</p>

                    <Link href={GITHUB_REPOSITORY} className='rounded p-1 aspect-square border border-white/20'>
                        <GithubLogo size={24} />
                    </Link>
                </div>

                <div className='flex flex-col gap-20'>

                    <p className='text-4xl xs:text-6xl sm:text-7xl font-semibold'>
                        The alternative agency for<br />
                        alternative brands.
                    </p>

                    <div className='flex flex-col'>
                        <p className='uppercase font-extrabold text-xs text-gray-700'>
                            CONTACT US
                        </p>
                        <p className='mt-1 font-light text-gray-300 leading-snug'>
                            Need a stunning website? Get a quote now!
                        </p>
                        <div className='mt-4 flex items-center h-10'>
                            <p className='h-full bg-gray-800 px-4 rounded-l text-sm flex items-center'>
                                {CONTACT_EMAIL}
                            </p>
                            <Link href={`mailto:${CONTACT_EMAIL}`}
                                  className='h-full rounded-r flex items-center text-black/75 hover:bg-[#97edff] bg-[#b1ff9e] px-2 px-4 uppercase font-extrabold text-xs'>
                                <span className='hidden xs:flex'>SEND EMAIL</span>
                                <PaperPlaneTilt weight='duotone' size={16} className='flex xs:hidden' />
                            </Link>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )

}

export default HomePage