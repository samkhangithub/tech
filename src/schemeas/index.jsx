import * as Yup from 'yup';

export const signUpSchema = Yup.object({
name: Yup.string().min(2).max(25).required("Please enter your name"),
email : Yup.string().email().required("Please enter your email"),
location: Yup.string().required("please enter your location"),
phone: Yup.number().required(" please enter your phone number"),
message: Yup.string().required("At least 12 characters required"),

})