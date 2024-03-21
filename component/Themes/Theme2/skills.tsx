import React, { useState } from 'react'
import style from './thmem2.module.css'
import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'

interface Skill {
    name: string;
    rate: number;
}

interface img {
    image: string,
    options: string[],
}

const Skills = ({ skilldetail }: any) => {

    const skills: img[] = [
        {
            image: require('./img/c-program-icon.svg'),
            options: ['c language', 'c', 'c-programming', 'c programming']
        },
        {
            image: require('./img/js-svgrepo-com.svg'),
            options: ['java script', 'js']
        },
        {
            image: require('./img/c-sharp-programming-language-icon.svg'),
            options: ['C sharp', 'C#', "c #", 'c sharp language', 'c# language',
                ' c # language', 'c#language', 'c# programming', 'c sharp programming']
        },
        {
            image: require('./img/css-3-svgrepo-com.svg'),
            options: ['css', 'css5']
        },
        {
            image: require('./img/django-icon.svg'),
            options: ['django']
        },
        {
            image: require('./img/jquery-icon.svg'),
            options: ['jquery']
        },
        {
            image: require('./img/mongodb-icon.svg'),
            options: ['mongodb']
        },
        {
            image: require('./img/c-plus-plus-programming-language-icon.svg'),
            options: ['C++', 'c ++', "c++ language", "c ++ language"]
        },
        {
            image: require('./img/python-svgrepo-com.svg'),
            options: ['Python']
        },
        {
            image: require('./img/dart-programming-language-icon.svg'),
            options: ['dart-programming', "dart programming", 'dart', 'dart language']
        },
        {
            image: require('./img/bootstrap-5-logo-icon.svg'),
            options: ['bootstrap', 'bootstrap css']
        },
        {
            image: require('./img/node-js-icon.svg'),
            options: ['node js', 'nodejs']
        },
        {
            image: require('./img/data-science-icon.svg'),
            options: ['datascience', 'data science']
        },
        {
            image: require('./img/mysql-logo-svgrepo-com.svg'),
            options: ['MySQL', 'my sql']
        },
        {
            image: require('./img/java-programming-language-icon.svg'),
            options: ['java', 'java programming', ' java language']
        },
        {
            image: require('./img/php-programming-language-icon.svg'),
            options: ['php', 'php programming', 'php language']
        },
        {
            image: require('./img/html-5_5968267.png'),
            options: ['HTML', 'html']
        },
        {
            image: require('./img/angular-svgrepo-com.svg'),
            options: ['Angular js']
        },
        {
            image: require('./img/react-svgrepo-com.svg'),
            options: ['React js']
        },
        {
            image: require('./img/vue-svgrepo-com.svg'),
            options: ['Vue js']
        },
        {
            image: require('./img/adobe-illustrator-icon.svg'),
            options: ['illustrator']
        },
        {
            image: require('./img/adobe-photoshop-icon.svg'),
            options: ['photoshop']
        },
        {
            image: require('./img/tailwind-css-icon.svg'),
            options: ['tailwind', 'tailwind css', "tailwindcss"]
        },
        {
            image: require('./img/kotlin-programming-language-icon.svg'),
            options: ['kotlin', 'kotlin programming', 'kotlin language']
        },
        {
            image: require('./img/git-icon.svg'),
            options: ['git']
        },
        {
            image: require('./img/github-icon.svg'),
            options: ['github', 'git hub']
        },
        {
            image: require('./img/database-icon.svg'),
            options: ['database', 'data base', 'sql']
        },
        {
            image: require('./img/postgresql-icon.svg'),
            options: ['postgresql', 'postgre sql']
        },
        {
            image: require('./img/ruby-programming-language-icon.svg'),
            options: ['ruby', 'ruby programming', 'ruby language']
        },
        {
            image: require('./img/android-robot-bot-icon.svg'),
            options: ['android', 'android developer']
        },
        {
            image: require('./img/flutter-icon.svg'),
            options: ['flutter', 'flutter developer']
        },
    ]



    const [skillData, setSkillData] = useState<Skill[]>(skilldetail)


    const getImageForSkill = (skillName: string) => {
        const matchingSkill = skills.find(skill =>
            skill.options.some(option => option.toLowerCase() === skillName.toLowerCase())
        );
        return matchingSkill ? matchingSkill.image : require('./img/information-technology-icon.svg');
    };

    const renderSkillItem = (skill: Skill, index: number) => (
        <Grid key={index} item xs={6} sm={4} md={3} lg={2}>
            <Box className={style.border_box} sx={{ textAlign: 'center' }}>
                <Box className={style.bg_round} sx={{ borderRadius: '50%', width: '100px', height: '100px', overflow: 'hidden', margin: 'auto' }}>
                    {getImageForSkill(skill.name) && <Image src={getImageForSkill(skill.name)} width={70} height={70} alt='skill'></Image>}
                </Box>
                <Typography sx={{ fontSize: '24px', fontWeight: '700' }}>{skill.rate * 10}%</Typography>
                <Typography sx={{ color: "#D8F3DC", fontSize: '18px' }}>{skill.name}</Typography>
            </Box>
        </Grid>
    );




    return (
        <Box id='skills' sx={{ bgcolor: "#111010", py: 10 }}>
            <Container>
                <Box>
                    <Typography sx={{ fontSize: "30px", fontWeight: '700' }}><span style={{ color: '#FF8A00' }}>M</span>y Skills Here</Typography>

                    <Box>
                        <Typography variant='h4' align='right' sx={{ my: 5, fontSize: { xs: '24px', sm: '28px', md: '32px' }, textIndent: { xs: '10%', sm: '20%', md: '40%' } }}>
                            Over a decade of experience in interactive design and working with some of the most talented people in the business
                        </Typography>
                    </Box>

                    <Box>
                        <Grid container spacing={2} justifyContent="center">

                            <Grid container spacing={2} justifyContent="center">
                                {skillData.map(renderSkillItem)}
                            </Grid>
                        </Grid>


                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Skills
