'use client'
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import croursesdata from '@/data/music_courses.json';
import React from 'react';

function Page() {
    return (
        <div className="min-h-screen bg-black py-12 pt-36 text-neutral-300">
            <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
                All Courses ({croursesdata.courses.length})
            </h1>

            <div className="flex flex-wrap justify-center gap-6 px-4 sm:px-6 md:px-5 lg:px-10">
                {croursesdata.courses.map((course) => (
                    <CardContainer key={course.id} className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                {course.title} {/* Change this to the actual course title */}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                {course.description} {/* Change this to the actual course description */}
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src='https://images.pexels.com/photos/2510425/pexels-photo-2510425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' // Change this to the actual image URL
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    href={'#'} // Change this to the actual course link
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                >
                                    <h2 className="text-xl">Price: ${course.price}</h2>
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    Explore now
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </div>
    );
}

export default Page;
