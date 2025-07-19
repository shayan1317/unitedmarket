import { gql } from "@apollo/client";

export const SignUpMutation = gql`
  mutation createUserMutation($email: String!) {
    createUser(
      input: {
        firstname: "Haris"
        lastname: "Abbasi 2"
        email: $email
        password: "Hahaha88*"
        countrycode: null
        phoneno: null
        labelName: "Lab test"
        roleId: "63244aca9c4a234c0e3ad726"
      }
    ) {
      success
      message
      user {
        firstname
        lastname
        email
      }
    }
  }
`;

export const sendOTP = gql`
  mutation ($email: String!, $countrycode: Float, $phoneno: Float) {
    sendOtp(email: $email, countrycode: $countrycode, phoneno: $phoneno) {
      success
      message
    }
  }
`;

export const verifyOTP = gql`
  mutation ($otp: String!) {
    verifyOtp(otp: $otp) {
      success
      message
    }
  }
`;
