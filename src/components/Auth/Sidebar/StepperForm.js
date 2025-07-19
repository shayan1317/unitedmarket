import React, { useContext } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import { userDetailsContext } from "../Form";
import "./StepperForm.css";
const useStyles = makeStyles((Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    button: {
      marginTop: Theme.spacing(1),
      marginRight: Theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: Theme.spacing(2),
    },
    resetContainer: {
      padding: Theme.spacing(3),
    },
  })
);

function getSteps() {
  return [
    <b
      style={{
        color: "#2EBB55",
        fontSize: "1.2rem",
        fontFamily: "poppins",
      }}
    >
      Email / Phone Number
    </b>,
    <b style={{ color: "#2EBB55", fontSize: "1.2rem", fontFamily: "poppins" }}>
      Password
    </b>,
    <b style={{ color: "#2EBB55", fontSize: "1.2rem", fontFamily: "poppins" }}>
      Choose Account Type
    </b>,
    <b style={{ color: "#2EBB55", fontSize: "1.2rem", fontFamily: "poppins" }}>
      Set Label Name
    </b>,
    <b style={{ color: "#2EBB55", fontSize: "1.2rem", fontFamily: "poppins" }}>
      Review
    </b>,
  ];
}

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <form class="form-group">
//         <LoginForm
//           title="Get Registered On United Market"
//           subtitle="Enter your email address or phone number"
//           label="Email Address/Phone Number"
//           btnText="next"
//         />
//       </form>;
//     case 1:
//       return <form class="form-group"> <LoginForm
//       smallText="   provide the OTP send to your Phone Number."
//       title="Please Verify Your Account"
//       subtitle="Enter your verification code"
//       label="OTP"
//       btnText="send OTP"
//     /></form>;
//     case 2:
//       return <form class="form-group">  <LoginForm
//       title="Set your Label name"
//       subtitle="Enter your Label Name"
//       label="Label Name"
//       btnText="nex"
//     /></form>;
//     default:
//       return "Unknown step";
//   }
// }

export default function StepperForm() {
  // const [activeStep, setActiveStep] = useContext(userDetailsContext);
  const [activeStep, setActiveStep] = useContext(userDetailsContext);
  const [accountType, setAccountType] = useContext(userDetailsContext);
  const steps = getSteps();
  console.log("SAS", accountType);
  return (
    <div>
      <Stepper
        style={{ backgroundColor: "transparent" }}
        activeStep={activeStep}
        orientation="vertical"
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              {/* <Typography>{getStep(index)}</Typography>
              <div>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div> */}
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {/* {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>Form is submitted</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )} */}
    </div>
  );
}
