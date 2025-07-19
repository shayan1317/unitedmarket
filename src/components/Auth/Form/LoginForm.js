import React, { useRef } from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  Input,
  HStack,
  Image,
  FormControl,
} from "native-base";
import ConnectWith from "./ConnectWith";
import { useContext, useState, useEffect } from "react";
import AccountType from "./AccountType";
import { userDetailsContext } from "../Form";
import { useForm, Controller } from "react-hook-form";
import { SignUpMutation } from "../../../Graphql_services/SignUpMutation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@apollo/client";
import { sendOTP } from "../../../Graphql_services/SignUpMutation";
// import { NotifMessages } from "../Notification";
import { ToastContainer } from "react-toastify";
import { Notification } from "../../NotifyMsg/Notification";
import { verifyOTP } from "../../../Graphql_services/SignUpMutation";
import * as Yup from "yup";
let t = 10;
function LoginForm(props) {
  const [sendOtp] = useMutation(sendOTP, {
    onCompleted(data) {
      // setLoading(false);
      if (data?.sendOtp?.message) {
        // NotifMessages("success", data.createUser.message);
        console.log(Notification("success", data.sendOtp.message));
        console.log("success", data.sendOtp.message);
        setTimeout(() => {
          // Router.push("/auth/sign-in");
        }, 1400);
      } else {
        // NotifMessages("error", data);
      }
    },
    onError(err) {
      const { graphQLErrors } = err;
      if (graphQLErrors) {
        // setLoading(false);
        graphQLErrors.forEach(({ message }) => {
          // eslint-disable-next-line no-console
          Notification("error", message);
        });
      }
      // alert(err);
    },
  });
  const getaccounttype = (e) => {
    // console.log(e.target.innerText);
    setAccountType(e.target.innerText.replace("\n", ""));
  };
  const [verifyOtp] = useMutation(verifyOTP, {
    onCompleted(data) {
      // setLoading(false);
      if (data?.sendOtp?.message) {
        // NotifMessages("success", data.createUser.message);
        console.log(Notification("success", data.verifyOtp.message));
        console.log("success", data.verifyOtp.message);
        setTimeout(() => {
          // Router.push("/auth/sign-in");
        }, 1400);
      } else {
        // NotifMessages("error", data);
      }
    },
    onError(err) {
      const { graphQLErrors } = err;
      if (graphQLErrors) {
        // setLoading(false);
        graphQLErrors.forEach(({ message }) => {
          // eslint-disable-next-line no-console
          Notification("error", message);
        });
      }
      // alert(err);
    },
  });
  const [activeStep, setActiveStep] = useContext(userDetailsContext);
  const [time, settime] = useState();
  const [sendtOTP, setSendOTP] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [isActive, setisactive] = useState(false);
  const myref = useRef();
  const inputRef = useRef();
  const [accountType, setAccountType] = React.useState("");
  // const emailschema = Yup.object().shape({
  //   // fullName: Yup.string().required('Full Name is required'),
  //   email: Yup.string().email("Invalid Email").required("Email is required"),
  //   // otp: Yup.number().required("Email is required"),

  //   // password: Yup.string()
  //   //   .required('Password is required')
  //   //   .min(6, 'Password must be at least 6 characters'),
  // });
  // const otpschema = Yup.object().shape({
  //   otp: Yup.number().required("Email is required"),
  // });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // resolver:
  //  yupResolver(emailschema)),

  // useEffect(() => {
  //   console.log("actiuve", activeStep);
  // });
  // const handleNext = (e) => {

  //   if (e.target.innerText === "Send OTP") {
  //     disabled();
  //   } else {
  //     setActiveStep((prevActiveStep) => prevActiveStep + 1);

  //   }
  // };
  // const handlePrevious = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  // const disabled = () => {
  //   setSendOTP(true);
  //   let interval = setInterval(() => {
  //     t = t - 1;
  //     settime(t < 10 ? `0${t}` : t);
  //     // console.log(time);
  //     if (t < 1) {
  //       setSendOTP(false);
  //       clearInterval(interval);
  //     }
  //   }, 1000);
  // };

  // function ValidateEmail(mail) {
  //   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
  //     return true;
  //   }
  //   alert("You have entered an invalid email address!");
  //   return false;
  // }
  const onSubmit = (data) => {
    // const buttonType = myref.current.innerText;
    // if (buttonType === "Send OTP") {
    //   disabled();
    // } else {
    console.log(data);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    apicall(data);

    // }
  };
  const apicall = (data) => {
    if (data.email) {
      sendOtp({
        variables: {
          countrycode: null,
          phoneno: null,
          email: data.email,
        },
      });
    }
    // } else {
    //   setErrMsg("invalid email");
    // }
    if (data.otp) {
      verifyOtp({
        variables: {
          otp: "4552",
        },
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <Box
        fontFamily="poppins"
        w={"60%"}
        p={8}
        backgroundColor="#D9D9D9"
        justifyContent="center"
      >
        <Box w={"70%"} alignSelf={"center"}>
          <Box mb={10}>
            <Heading
              color=" #000201;
"
              fontFamily="poppins"
              mb={1}
              fontSize={"3xl"}
              fontWeight="semibold"
            >
              {props.title}
            </Heading>
            <Text
              fontFamily="poppins"
              color="#121212"
              fontSize={"xl"}
              fontWeight="600"
            >
              {props.subtitle}
            </Text>
          </Box>
          <Box
          // width={activeStep !== 3 ? "70%" : "90%"}
          >
            {activeStep >= 5 && (
              <Box alignItems="center">
                <Image
                  size={"lg"}
                  resizeMode="contain"
                  source={require("..//..//..//assets/LoginScreens/clock.png")}
                />
              </Box>
            )}

            {activeStep === 3 && (
              <AccountType getaccounttype={getaccounttype} />
            )}
            {(activeStep < 3 || activeStep === 4) && (
              <Box>
                <Box my={3}>
                  <FormControl>
                    <FormControl.Label
                      fontFamily="poppins"
                      mb={1}
                      color={"#000000"}
                      fontWeight="semibold"
                      fontSize={"lg"}
                      textTransform={"capitalize"}
                    >
                      {props.label}
                    </FormControl.Label>
                    {/* <Input     borderColor="#AFAFAF" height="40px" /> */}
                    <Controller
                      control={control}
                      render={({ field: { onChange, value, onBlur } }) => (
                        <Input
                          onChangeText={onChange}
                          onBlur={onBlur}
                          borderColor="#AFAFAF"
                          ref={inputRef}
                          height="40px"
                          // placeholder="John"
                          // onChange={(event) => handleChange(e )}

                          value={value}
                        />
                      )}
                      // name="firstName"
                      name={props.type}

                      // rules={{ required: 'Field is required', minLength: 3 }}
                    />

                    {errors.email && (
                      <Text color="#800000">{errors.email.message}</Text>
                    )}
                  </FormControl>
                </Box>
                {(activeStep === 2 || activeStep === 4) && (
                  <Box my={3}>
                    <FormControl>
                      <FormControl.Label
                        fontFamily="poppins"
                        mb={1}
                        color={"#000000"}
                        fontWeight="semibold"
                        fontSize={"lg"}
                        textTransform={"capitalize"}
                      >
                        {props.label2}
                      </FormControl.Label>
                      {/* <Input     borderColor="#AFAFAF" height="40px" /> */}
                      <Controller
                        control={control}
                        render={({ field: { onChange, value, onBlur } }) => (
                          <Input
                            onChangeText={onChange}
                            onBlur={onBlur}
                            borderColor="#AFAFAF"
                            ref={inputRef}
                            height="40px"
                            // placeholder="John"
                            // onChange={(event) => handleChange(e )}

                            value={value}
                          />
                        )}
                        // name="firstName"
                        name={props.type2}

                        // rules={{ required: 'Field is required', minLength: 3 }}
                      />

                      {errors.email && (
                        <Text color="#800000">{errors.email.message}</Text>
                      )}
                    </FormControl>
                    {/* <Text
                      fontFamily="poppins"
                      mb={1}
                      color={"#000000"}
                      fontWeight="semibold"
                      fontSize={"lg"}
                      textTransform={"capitalize"}
                    >
                      {props.label2}
                    </Text>
                    <Input
                      // {...register("email")}

                      // ref={activeStep === 1 ? myref : ""}
                      borderColor="#AFAFAF"
                      height="40px"
                    /> */}
                  </Box>
                )}
              </Box>
            )}
            <HStack>
              <Text textTransform={"capitalize"} fontSize="sm" color="#AFAFAF">
                {props.smallText}
              </Text>
              {sendtOTP && <Text>00:{time}</Text>}
            </HStack>
            <p>{errMsg}</p>
            <Button
              _text={{
                color: "#E3E3E3",
                fontWeight: "semibold",
                fontSize: "md",
                fontFamily: "poppins",
              }}
              mt={8}
              // ref={myref}
              // onPress={handleNext}
              onPress={handleSubmit(onSubmit)}
              textTransform="capitalize"
              backgroundColor={"#2EBB55"}
              // isDisabled={sendtOTP ? true : false}
              // _disabled={{ backgroundColor: "#AFAFAF" }}
            >
              {props.btnText}
            </Button>
            {sendtOTP && (
              <Text
                // backgroundColor="transparent"
                mt={5}
                textAlign="center"
                color="#2EBB55"
                textDecorationLine="underline"
                fontWeight="semibold"
                fontFamily="poppins"
              >
                Resent OTP
              </Text>
            )}

            {activeStep === 0 && <ConnectWith />}
            {activeStep > 1 && (
              <Text
                fontFamily="poppins"
                // onPress={handlePrevious}
                mt={5}
                textAlign={"center"}
                color={"#AFAFAF"}
                textTransform={"uppercase"}
                fontWeight="semibold"
                textDecorationLine={"underline"}
              >
                previous step
              </Text>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default LoginForm;
