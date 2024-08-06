// utils/email.js
import emailjs from "emailjs-com";

export const sendEmail = async (templateParams) => {
  //   try {
  //     const result = await emailjs.send(
  //       "service_e0p28o9",
  //       "template_a6v42ka",
  //       templateParams,
  //       "NUjazv-s3yuRAZTyc"
  //     );
  //     console.log("Email sent successfully:", result.text);
  //   } catch (error) {
  //     console.error("Failed to send email:", error);
  //   }

  emailjs
    .send(
      "service_e0p28o9",
      "template_a6v42ka",
      "NUjazv-s3yuRAZTyc",
      templateParams
    )
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
};
