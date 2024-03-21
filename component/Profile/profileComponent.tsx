import React, { useState } from 'react';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  useMediaQuery,
  StepButton,
} from '@mui/material';
import Professional from '../../component/Professional';
import Personal from '../../component/Personal';
import EducationalForm from '../../component/EducationForm';
import ExperienceForm from '../../component/ExperienceForm';
import SkillForm from '../../component/SkillForm';
import AchievementForm from '../../component/AchievementForm';
import ProjectForm from '../../component/ProjectForm';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import DashboardLayout from '../../Layouts/Dashboard/DashboardLayout';

const steps = [
  'Personal Details',
  'Professional Details',
  'Educational',
  'Experience',
  'Skills',
  'Achievements & Awards',
  'Projects',
];

const ProfileComponent = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{ [k: number]: boolean }>({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);

  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {

    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  // Define a custom theme to make the typography responsive
  const theme = responsiveFontSizes(createTheme());
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <DashboardLayout>
      <Box sx={{ width: '100%', bgcolor: 'inherit', overflow: 'inherit' }} >
        <Stepper nonLinear activeStep={activeStep} alternativeLabel >
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)} className='cricle'>
                <StepLabel sx={{ fontSize: isSmallScreen ? '2rem' : '2rem'}} className='lable'>{label}</StepLabel>
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ p: 2 }}>
          <React.Fragment>
            {activeStep + 1 == 1 && <Personal handleNext={handleNext} />}
            {activeStep + 1 == 2 && <Professional handleNext={handleNext} />}
            {activeStep + 1 == 3 && <EducationalForm handleNext={handleNext} />}
            {activeStep + 1 == 4 && <ExperienceForm handleNext={handleNext} />}
            {activeStep + 1 == 5 && <SkillForm handleNext={handleNext} />}
            {activeStep + 1 == 6 && <AchievementForm handleNext={handleNext} />}
            {activeStep + 1 == 7 && <ProjectForm />}


            {/* {activeStep + 1 == 6 && <New handleNext={handleNext} />} */}


            {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleNext} sx={{ mr: 1 }}>
                  Next
                </Button>
                {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <Typography variant="caption" sx={{ display: 'inline-block' }}>
                      Step {activeStep + 1} already completed
                    </Typography>
                  ) : (
                    <Button onClick={handleComplete}>
                      {completedSteps() === totalSteps() - 1
                        ? 'Finish'
                        : 'Complete Step'}
                    </Button>
                  ))}
              </Box> */}

          </React.Fragment>
        </Box>
      </Box>
    </DashboardLayout>

  )
}

export default ProfileComponent




