async function handler({ name, email, subject, message }) {
  try {
    // Enhanced input validation
    if (
      !name?.trim() ||
      !email?.trim() ||
      !subject?.trim() ||
      !message?.trim()
    ) {
      return {
        error: "All fields are required and cannot be empty",
        status: 400,
      };
    }

    // Improved email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return {
        error: "Please enter a valid email address",
        status: 400,
      };
    }

    // Length validations
    if (name.length > 100) {
      return {
        error: "Name must be less than 100 characters",
        status: 400,
      };
    }
    if (subject.length > 200) {
      return {
        error: "Subject must be less than 200 characters",
        status: 400,
      };
    }
    if (message.length > 1000) {
      return {
        error: "Message must be less than 1000 characters",
        status: 400,
      };
    }

    const result = await sql`
      INSERT INTO contact_submissions (name, email, subject, message)
      VALUES (${name.trim()}, ${email.trim()}, ${subject.trim()}, ${message.trim()})
      RETURNING id
    `;

    return {
      success: true,
      id: result[0].id,
      message: "Thank you for your message. We'll get back to you soon!",
      status: 201,
    };
  } catch (error) {
    console.error("Contact form submission error:", error);
    return {
      error: "Failed to submit contact form. Please try again later.",
      status: 500,
    };
  }
}
export async function POST(request) {
  return handler(await request.json());
}