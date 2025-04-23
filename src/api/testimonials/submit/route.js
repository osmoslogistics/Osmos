async function handler({
  name,
  company,
  service,
  rating,
  review,
  email,
  image,
  companyLogo,
}) {
  try {
    if (!name || !company || !service || !rating || !review || !email) {
      return {
        error: "Missing required fields",
        status: 400,
      };
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return {
        error: "Invalid email format",
        status: 400,
      };
    }

    if (rating < 1 || rating > 5 || !Number.isInteger(rating)) {
      return {
        error: "Rating must be an integer between 1 and 5",
        status: 400,
      };
    }

    let imageUrl = null;
    let companyLogoUrl = null;

    if (image) {
      const uploadResult = await upload({ base64: image });
      if (uploadResult.error) {
        return {
          error: "Failed to upload image",
          status: 500,
        };
      }
      imageUrl = uploadResult.url;
    }

    if (companyLogo) {
      const uploadResult = await upload({ base64: companyLogo });
      if (uploadResult.error) {
        return {
          error: "Failed to upload company logo",
          status: 500,
        };
      }
      companyLogoUrl = uploadResult.url;
    }

    const result = await sql`
      INSERT INTO testimonials 
      (name, company, service, rating, review, email, image_url, company_logo_url)
      VALUES 
      (${name}, ${company}, ${service}, ${rating}, ${review}, ${email}, ${imageUrl}, ${companyLogoUrl})
      RETURNING id
    `;

    return {
      success: true,
      id: result[0].id,
      status: 201,
    };
  } catch (error) {
    return {
      error: "Failed to submit testimonial",
      status: 500,
    };
  }
}
export async function POST(request) {
  return handler(await request.json());
}