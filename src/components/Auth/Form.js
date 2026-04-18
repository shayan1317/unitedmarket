import React, { useState } from "react";
import { Box, HStack } from "native-base";
// import StepperForm from "./Sidebar/StepperForm";
import Sidebar from "./Sidebar/Sidebar";
import { createContext } from "react";
import LoginForm from "./Form/LoginForm";
import AccountType from "./Form/AccountType";
import { useLocation } from "react-router-dom";

export const userDetailsContext = createContext();

function Form() {
  const location = useLocation();
  const isLogin = location.pathname === "/login";
  const [activeStep, setActiveStep] = React.useState(0);
  const [accountType, setAccountType] = useState("");

  return (
    <userDetailsContext.Provider
      value={[activeStep, setActiveStep, accountType, setAccountType]}
    >
      <Box h={"100vh"}>
        <HStack h={"100%"}>
          <Sidebar isLogin={isLogin} />
          {isLogin ? (
            <LoginForm
              title="Sign In to United Market"
              subtitle="Enter your credentials to continue"
              label="Email/Phone Number"
              label2="Password"
              btnText="Sign In"
              type="email"
              type2="password"
              isLogin={true}
            />
          ) : (
            <>
              {activeStep === 0 && (
            <LoginForm
              title="Get Registered On United Market"
              subtitle="Enter your email address or phone number"
              label="Email Address/Phone Number"
              btnText="next"
              type="email"
            />
          )}

          {activeStep === 1 && (
            <LoginForm
              smallText="provide the OTP send to your Phone Number."
              title="Please Verify Your Account"
              subtitle="Enter your verification code"
              label="OTP"
              btnText="send OTP"
              type="otp"
            />
          )}
          {activeStep === 2 && (
            <LoginForm
              title="Create Your Password"
              subtitle="Enter your password"
              label="Password"
              label2="confirm password"
              btnText="next"
              type="password"
              type2="confirm password "
            />
          )}
          {activeStep === 3 && (
            <LoginForm
              title="Choose Your Account Type!"
              subtitle=""
              label=""
              btnText="finish"
              type="account type"
            />
          )}
          {activeStep === 4 && (
            <LoginForm
              title="Set your Label name"
              subtitle="Enter your Label Name"
              label="Label Name"
              label2="role"
              btnText="nex"
              type="label name"
              type2="role "
            />
          )}
              {activeStep >= 5 && (
                <LoginForm
                  title="Review"
                  subtitle="Our team will review your application and reach out via email."
                  label="Label Name"
                  btnText="Schedule a Demo"
                  imgUrl="clock.svg"
                  type="otp"
                />
              )}
            </>
          )}
        </HStack>
      </Box>
    </userDetailsContext.Provider>
  );
}

export default Form;
