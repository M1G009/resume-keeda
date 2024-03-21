import { Box, Container, Typography } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from 'react';

interface EducationDetail {
    degree: string;
    school: string;
    grade: string;
    passingYear: string;
}

const Education = ({ educationdetail }: any) => {
    const [educationDetail, setEducationDetail] = useState<EducationDetail[]>(educationdetail);



    // Determine number of slides
    const numSlides = educationDetail.length;
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
        <Box id='education' sx={{ bgcolor: "#111010", py: 10 }}>
            <Container>
                <Box>
                    <Typography sx={{ fontSize: "30px", fontWeight: '700' }}><span style={{ color: '#FF8A00' }}>E</span>ducation</Typography>
                </Box>

                <Box className="slider-container">
                    <Slider {...settings}>
                        {educationDetail.map((el, index) => (
                            <Box gap={2} key={index}>
                                {/* <Typography className={style.round}>{el.year}</Typography> */}
                                <Typography variant='body1' sx={{ mt: 2, textAlign: 'center', fontSize: '25px', fontWeight: '700' }}>{el.degree}</Typography>
                                <Typography variant='body1' sx={{ textAlign: 'center', mt: 2, fontSize: '20px', fontWeight: 300 }}>passing Year:<span style={{ fontWeight: '800' }}>{el.passingYear}</span></Typography>
                                <Typography sx={{ color: '#D8F3DC', textAlign: 'center', fontSize: '25px', fontWeight: '700', mt: 2 }}>{el.school}</Typography>
                                <Typography sx={{ color: '#D8F3DC', textAlign: 'center', fontSize: '25px', fontWeight: '700', mt: 2 }}>{el.grade}</Typography>
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Container>
        </Box>
    );
}

export default Education;
