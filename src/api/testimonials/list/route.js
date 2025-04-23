async function handler({ service, page = 1, limit = 10 }) {
  try {
    const offset = (page - 1) * limit;
    let queryStr = "SELECT * FROM testimonials";
    const values = [];
    let paramCount = 0;

    if (service) {
      queryStr += " WHERE service = $1";
      values.push(service);
      paramCount++;
    }

    queryStr += " ORDER BY created_at DESC";
    queryStr += ` LIMIT $${paramCount + 1} OFFSET $${paramCount + 2}`;
    values.push(limit, offset);

    const testimonials = await sql(queryStr, values);

    const countQueryStr =
      "SELECT COUNT(*) FROM testimonials" +
      (service ? " WHERE service = $1" : "");
    const countValues = service ? [service] : [];
    const totalCount = await sql(countQueryStr, countValues);

    const totalPages = Math.ceil(totalCount[0].count / limit);

    return {
      success: true,
      data: testimonials,
      pagination: {
        currentPage: page,
        totalPages,
        totalItems: parseInt(totalCount[0].count),
        itemsPerPage: limit,
      },
      status: 200,
    };
  } catch (error) {
    return {
      error: "Failed to fetch testimonials",
      status: 500,
    };
  }
}
export async function POST(request) {
  return handler(await request.json());
}