import React from 'react'
import Image from 'next/image'

const Brands = () => {
  return (
    <section className='flex flex-col gap-4 items-center justify-center p-8'>
        <h2 className='text-md font-base text-center mb-4'>Trusted by teams at over 1,000 of the world\’s leading organizations</h2>
        <div className='flex items-center justify-center gap-8 flex-wrap'>
            <Image src="/logos/brand-1.svg" alt="Brand 1" width={100} height={100} />
            <Image src="/logos/brand-2.svg" alt="Brand 2" width={100} height={100} />
            <Image src="/logos/brand-3.svg" alt="Brand 3" width={100} height={100} />
            <Image src="/logos/brand-4.svg" alt="Brand 4" width={100} height={100} />
            <Image src="/logos/brand-5.svg" alt="Brand 5" width={100} height={100} />
            <Image src="/logos/brand-6.svg" alt="Brand 6" width={100} height={100} />
            <Image src="/logos/brand-7.svg" alt="Brand 7" width={100} height={100} />
        </div>
    </section>
  )
}

export default Brands