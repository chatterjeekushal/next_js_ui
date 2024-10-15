'use client';

import * as React from 'react';
import coursedata from '@/data/music_courses.json';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Link } from '@mui/joy';

interface Course {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    featured: boolean;
}

function FeaturedCourses() {
    const featuredCourses = coursedata.courses.filter((course: Course) => course.featured);

    return (
        <div className="py-4 bg-gray-900">
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Featured Courses</h2>
                <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Learn our featured courses</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-10 px-4 sm:px-6 md:px-5 lg:px-10">
                {featuredCourses.map((course: Course) => (
                    <BackgroundGradient key={course.id} className="rounded-[22px] max-w-sm p-6 sm:p-3 md:p-6 bg-white dark:bg-zinc-900 ">
                        <Card
                            variant="solid"
                            invertedColors
                            sx={{
                                boxShadow: 'lg',
                                width: 400,
                                maxWidth: '100%',
                                overflow: 'auto',
                                backgroundColor: "black"
                            }}
                        >
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                <Chip size="sm" variant="soft">{course.instructor}</Chip>
                                <Chip size="sm" variant="soft">{course.slug}</Chip>
                            </Box>
                            <div>
                                <Typography level="h2">
                                    ${course.price}{' '}
                                    <Typography textColor="text.tertiary" sx={{ fontSize: 'sm' }}>
                                        /month
                                    </Typography>
                                </Typography>
                            </div>
                            <CardContent>
                                <Typography level="title-lg" className="text-base sm:text-lg md:text-xl">{course.title}</Typography>
                                <Typography level="body-md" className="text-sm sm:text-base md:text-lg">{course.description}</Typography>
                            </CardContent>
                            <CardActions>
                               <div className='flex justify-center items-center w-full'>
                               <Link href={`/courses/${course.slug}`}>
                                    <Button variant="solid" className='w-full sm:w-52 '>Purchase Now</Button>
                                </Link>
                               </div>
                            </CardActions>
                        </Card>
                    </BackgroundGradient>
                ))}
            </div>
        </div>
    );
}

export default FeaturedCourses;
