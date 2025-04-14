export const emailConfig = {
  serviceId: "service_s8fh8h1",
  templateId: "template_gzcvfra",
  publicKey: "yu4deGYI9WhPkTIOl",
  senderEmail: "santhoshsharanb@gmail.com"
};

export const generateEmailTemplate = (formData) => {
  return {
    to_email: formData.email,
    from_name: "StreetDeal",
    to_name: formData.name,
    reply_to: "santhoshsharanb@gmail.com",
    subject: "Thank You for Joining Our CSR Initiative!",
    message: `
Dear ${formData.name},

Thank you for expressing your interest in StreetDeal's CSR initiatives. We are thrilled to have someone as passionate as you joining us in making a difference.

Here are the details you provided:

Name: ${formData.name}
Email Address: ${formData.email}
Phone Number: ${formData.phone}
Area of Interest: ${formData.interest}
Contribution Method: ${formData.message}

We appreciate your willingness to contribute to our cause and bring positive change. Our team will review your submission and get in touch with you shortly with more details on how you can get involved.

At StreetDeal, we firmly believe that "deals on streets are our empire" and empowering communities is at the heart of our mission. Together, we can create lasting impact.

If you have any questions or need further assistance, feel free to reach out to us at santhoshsharanb@gmail.com.

Looking forward to collaborating with you!

Warm regards,
Santhosh Sharan B
Community Manager
StreetDeal
"Deals on streets are our empire"
Contact: santhoshsharanb@gmail.com`
  };
}; 