async function handler({ name, email, service, details }) {
  if (!name || !email || !service || !details) {
    return {
      error: "Missing required fields",
      status: 400,
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      error: "Invalid email format",
      status: 400,
    };
  }

  try {
    const result = await sql`
      INSERT INTO quote_requests (
        name,
        email,
        service,
        details, 
        created_at
      )
      VALUES (
        ${name},
        ${email},
        ${service},
        ${details},
        CURRENT_TIMESTAMP
      )
      RETURNING id`;

    return {
      success: true,
      message: "Quote request submitted successfully",
      quoteId: result[0].id,
      status: 201,
    };
  } catch (error) {
    console.error("Error submitting quote request:", error);

    return {
      error: "Failed to submit quote request",
      status: 500,
    };
  }
}
export async function POST(request) {
  return handler(await request.json());
}