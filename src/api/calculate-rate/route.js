async function handler({
  type,
  distance,
  weight,
  includeTollGates = false,
  includeBorderFees = false,
  includeFuelSurcharge = false,
}) {
  try {
    // Input validation
    if (!type || !distance || !weight) {
      return {
        error:
          "Missing required fields: type, distance, and weight are required",
        status: 400,
      };
    }

    // Type validation
    const validTypes = ["ground", "air", "sea"];
    if (!validTypes.includes(type.toLowerCase())) {
      return {
        error: "Invalid transport type. Must be one of: ground, air, sea",
        status: 400,
      };
    }

    // Numeric validation
    if (isNaN(distance) || distance <= 0) {
      return {
        error: "Distance must be a positive number",
        status: 400,
      };
    }

    if (isNaN(weight) || weight <= 0) {
      return {
        error: "Weight must be a positive number",
        status: 400,
      };
    }

    // Base rate calculation per type (per km)
    const baseRates = {
      ground: 2.5,
      air: 8.0,
      sea: 1.5,
    };

    // Calculate base cost with more precision
    const baseRate = Number(
      (baseRates[type.toLowerCase()] * distance * (weight / 100)).toFixed(2)
    );

    // Calculate additional fees with more precision
    const tollGatesCost = includeTollGates
      ? Number((distance * 0.1).toFixed(2))
      : 0;
    const borderFees = includeBorderFees ? 250 : 0;
    const fuelSurcharge = includeFuelSurcharge
      ? Number((baseRate * 0.15).toFixed(2))
      : 0;

    // Calculate total with proper rounding
    const totalCost = Number(
      (baseRate + tollGatesCost + borderFees + fuelSurcharge).toFixed(2)
    );

    try {
      const result = await sql`
        INSERT INTO rate_calculations (
          type,
          distance,
          weight,
          base_rate,
          toll_gates_cost,
          border_fees,
          fuel_surcharge,
          total_cost
        )
        VALUES (
          ${type.toLowerCase()},
          ${distance},
          ${weight},
          ${baseRate},
          ${tollGatesCost},
          ${borderFees},
          ${fuelSurcharge},
          ${totalCost}
        )
        RETURNING id
      `;

      return {
        success: true,
        calculation: {
          id: result[0].id,
          type: type.toLowerCase(),
          distance,
          weight,
          baseRate,
          tollGatesCost,
          borderFees,
          fuelSurcharge,
          totalCost,
          breakdown: {
            baseRate: `$${baseRate}`,
            tollGates: includeTollGates ? `$${tollGatesCost}` : "Not included",
            borderFees: includeBorderFees ? `$${borderFees}` : "Not included",
            fuelSurcharge: includeFuelSurcharge
              ? `$${fuelSurcharge}`
              : "Not included",
            total: `$${totalCost}`,
          },
        },
        status: 200,
      };
    } catch (error) {
      console.error("Rate calculation error:", error);
      return {
        error: "Failed to save rate calculation",
        status: 500,
      };
    }
  } catch (error) {
    console.error("Rate calculation error:", error);
    return {
      error:
        "Failed to calculate rate. Please check your inputs and try again.",
      status: 500,
    };
  }
}
export async function POST(request) {
  return handler(await request.json());
}