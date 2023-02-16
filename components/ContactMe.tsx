import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {}

export default function ContactMe({ }: Props) {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        window.location.href = `mailto:settihemanthbabu2020@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message}
        (${data.email})`
    };


    return (
        <div className='min-h-screen flex flex-col text-center relative max-w-7xl mx-auto
    justify-center items-center md:text-left md:flex-row xl:px-10 xl:space-y-0 
    '>
            <h3 className='absolute top-24 uppercase tracking-[13px] text-gray-500 text-2xl'>Contact</h3>

            <div className='absolute top-36 flex flex-col sapce-y-10'>
                <h4 className='text-4xl font-semibold text-center'>I have got just what you need.
                    <span className='decoration-green-500 underline'>Lets Talk</span>
                </h4>
                <div className='mt-10 space-y-5'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-green-400 h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>+91 9490980700</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-green-400 h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>+91 9490980700</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-green-400 h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>+91 9490980700</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}
                    className='flex flex-col space-y-2 w-fit mx-auto mt-5'>
                    <div className='flex space-x-2'>
                        <input {...register('name')} className='contactInput' type="text" placeholder='Name' />
                        <input {...register('email')} className='contactInput' type="email" placeholder='Email' />
                    </div>
                    <input {...register('subject')} className='contactInput' type='text' placeholder='Subject' />
                    <textarea {...register('message')} className='contactInput' placeholder='Message' />
                    <button type="submit" className='bg-green-500 py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
                </form>
            </div>
        </div>
    )
}