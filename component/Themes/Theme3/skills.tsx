import React, { useState } from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, Typography } from '@mui/material';
import style from './theme3.module.css'


interface Skill {
    name: string;
    rate: number;
}

const Skills = ({ skill }: any) => {

    const [skillData, setSkillData] = useState<Skill[]>(skill)


    return (
        <Box sx={{ pt: 10, pb: 4 }}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'start' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', border: "3px solid #FFFFFF1A", borderRadius: '30px', padding: '5px 20px' }}>
                    <SettingsIcon />
                    <Typography variant="body1" color="#fff" textTransform={'uppercase'}>
                        My skills
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Typography variant="h2" component={'h2'} color="white" sx={{ fontSize: '35px', my: 3 }}>
                    My Advantages
                </Typography>
            </Box>
            {skillData.map((data, index) => {
                return <Box key={index} sx={{ my: 2 }}>
                    <Box className={style.skillbox} sx={{ display: 'flex', flexDirection: 'column' }} >
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', mb: 1 }}>
                            <Box className={style.skillname}>
                                {data.name}
                            </Box>
                            <Box>
                                <Typography variant="body1" sx={{ fontSize: { xs: '16px', sm: '18px', md: '20px' }, color: '#DDDDDD' }}>{data.rate * 10}%</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ width: '90%', backgroundColor: '#DDDDDD', height: '3px', margin: 'auto' }}>
                            <Box sx={{ bgcolor: '#28E98C', width: `${data.rate * 10}%`, height: '3px' }}></Box>
                        </Box>
                    </Box>
                </Box>
            })}

        </Box>
    )
}

export default Skills
