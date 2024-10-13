import * as Yup from "yup"

export const contactForm = Yup.object({
    name:Yup.string().min(2).max(25).required("Please enter your name"),
    email:Yup.string().email().required("Please enter your email"),
    subject:Yup.string().min(5).max(50).required("Please enter the subject"),
    message:Yup.string().min(5).max(300).required("Please enter the message")
    
})

