import { Box, Container, Typography } from '@mui/material';
import styles from "./thmem2.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from 'react';

interface WorkExperience {
    companyName: string,
    title: string;
    startDate: Date;
    endDate: Date;
    description: string;
}

const Experience = ({ workexp }: any) => {
    const [workExperience, setWorkExperience] = useState<WorkExperience[]>(workexp)


    function formatDate(date: Date) {
        const d = new Date(date);
        const year = d.getFullYear();
        let month = (1 + d.getMonth()).toString().padStart(2, '0');
        let day = d.getDate().toString().padStart(2, '0');

        return `${day}-${month}-${year}`;
    }



    // Determine number of slides
    const numSlides = workExperience.length;
    let settings: any = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    };

    // Adjust settings based on number of slides
    if (numSlides <= 2) {
        settings.autoplay = false; // Disable autoplay
        settings.infinite = false; // Disable infinite looping
    }

    return (
        <Box id="experience" sx={{ bgcolor: "#111010", py: 10 }}>
            <Container>
                <Box>
                    <Typography sx={{ my: 5, fontSize: '30px', fontWeight: '700' }}><span styles={{ color: '#FF8A00' }}>E</span>xperience</Typography>
                </Box>

                <Box className="slider-container">
                    <Slider {...settings}>
                        {workExperience.map((el, index) => (
                            <Box gap={2} key={index}>
                                <Typography className={styles.rounded}>{formatDate(el.startDate)}  {formatDate(el.endDate)} </Typography>
                                <Box sx={{ display: "flex", flexDirection: 'column', overflow: 'auto' }}>
                                    <Typography sx={{ color: '#D8F3DC', fontSize: '25px', fontWeight: '700', mt: 2 }}>{el.companyName}</Typography>
                                    <Typography variant='body1' sx={{ mt: 2, fontSize: '25px', fontWeight: '700' }}>{el.title}</Typography>
                                    <Typography variant='body1' sx={{ mt: 2, fontSize: '20px', fontWeight: '500' }}>{el.description}</Typography>
                                </Box>
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Container>
        </Box>
    );
}

export default Experience;
