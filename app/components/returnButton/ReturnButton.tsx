'use client'

import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

const ReturnButton: React.FC = () => {
    const router = useRouter();

    return (
        <button
            className='outline py-1 px-2 lg:py-2 lg:px-4 rounded-md cursor-pointer absolute top-25 left-8 lg:top-30 lg:left-20 bg-black '
            onClick={() => router.back()}
        >
                <p className='flex flex-row items-center text-lg lg:text-xl gap-2 lg:gap-3 text-white'>
                    <ArrowLeftIcon className='size-5 lg:size-6'/>
                    Wróć
                </p>
        </button>
    )
}

export default ReturnButton;