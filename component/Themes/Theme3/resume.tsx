import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import styles from './theme3.module.css'

interface EducationDetail {
    degree: string;
    school: string;
    grade: string;
    passingYear: string;
}

interface WorkExperience {
    companyName: string,
    title: string;
    startDate: Date;
    endDate: Date;
    description: string;
}

const Resume = ({ work, education }: any) => {

    const [educationDetail, setEducationDetail] = useState<EducationDetail[]>(education)
    const [workExperience, setWorkExperience] = useState<WorkExperience[]>(work)

  
    function formatDate(date: Date) {
        const d = new Date(date);
        const year = d.getFullYear();
        let month = (1 + d.getMonth()).toString().padStart(2, '0');
        let day = d.getDate().toString().padStart(2, '0');

        return `${day}-${month}-${year}`;
    }


    return (
        <Box sx={{ pt: 10, pb: 4 }}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'start' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', border: "3px solid #FFFFFF1A", borderRadius: '30px', padding: '5px 20px' }}>
                    <ImportContactsIcon />
                    <Typography variant="body1" color="#fff" textTransform={'uppercase'}>
                        My Resume
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Typography variant="h2" component={'h2'} color="white" sx={{ fontSize: '40px', my: 3 }}>
                    Education
                </Typography>
            </Box>

            {educationDetail.map((data, index) => {
                return <Box className={styles.item} key={index}>
                    <Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'start' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', border: "3px solid #FFFFFF1A", borderRadius: '30px', padding: '5px 20px' }}>
                                <Typography variant="body1" color="#fff" textTransform={'uppercase'}>
                                    {data.passingYear}
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Typography variant="body1" color="initial" sx={{ fontSize: '24px', mt: 3 }}>
                                {data.degree}
                            </Typography>
                            <Typography variant="body1" color="#DDDDDD" sx={{ fontSize: '19px', mt: 3 }}>
                                ( {data.school} )
                            </Typography>
                            <Typography variant="body1" color="#DDDDDD" sx={{ fontSize: '17px', mt: 3 }}>
                                <span styles={{ fontSize: '19px', fontWeight: '700' }}>Grade / Score : </span> {data.grade}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            })}

            <Box>
                <Typography variant="h2" component={'h2'} color="white" sx={{ fontSize: '40px', my: 3 }}>
                    Experience
                </Typography>
            </Box>

            {workExperience.map((data, index) => {
                return <Box className={styles.item} key={index}>
                    <Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'start' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', border: "3px solid #FFFFFF1A", borderRadius: '30px', padding: '5px 20px' }}>
                                <Typography variant="body1" color="#fff">
                                    {formatDate(data.startDate)} &nbsp;  to  &nbsp; {formatDate(data.endDate)}
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Typography variant="body1" color="initial" sx={{ fontSize: '24px', mt: 3 }}>
                                {data.title}
                            </Typography>
                            <Typography variant="body1" color="#DDDDDD" sx={{ fontSize: '19px', mt: 3 }}>
                                ( {data.companyName} )
                            </Typography>
                            <Typography variant="body1" color="#DDDDDD" sx={{ fontSize: '17px', mt: 3 }}>
                                {data.description}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            })}

        </Box>
    )
}

export default Resume
