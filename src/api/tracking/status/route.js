async function handler({ trackingNumber }) {
  if (!trackingNumber || trackingNumber.length < 8) {
    return {
      error: "Invalid tracking number. Please provide a valid tracking number.",
      status: 400,
    };
  }

  // Mock statuses for different tracking number patterns
  if (trackingNumber.startsWith("OSM")) {
    return {
      status: 200,
      tracking: {
        trackingNumber,
        currentStatus: "In Transit",
        currentLocation: "Singapore Distribution Center",
        estimatedDelivery: "2024-02-15",
        updates: [
          {
            timestamp: "2024-02-12T14:30:00Z",
            status: "In Transit",
            location: "Singapore Distribution Center",
            description:
              "Package is being processed for international shipping",
          },
          {
            timestamp: "2024-02-11T08:15:00Z",
            status: "Picked Up",
            location: "Shanghai Warehouse",
            description: "Package picked up by carrier",
          },
        ],
      },
    };
  }

  if (trackingNumber.startsWith("DEL")) {
    return {
      status: 200,
      tracking: {
        trackingNumber,
        currentStatus: "Out for Delivery",
        currentLocation: "Local Delivery Center - London",
        estimatedDelivery: "2024-02-13",
        updates: [
          {
            timestamp: "2024-02-13T09:00:00Z",
            status: "Out for Delivery",
            location: "London",
            description: "Package is out for delivery",
          },
          {
            timestamp: "2024-02-12T23:45:00Z",
            status: "Arrived at Delivery Facility",
            location: "London Distribution Center",
            description: "Package arrived at local facility",
          },
        ],
      },
    };
  }

  return {
    error: "Tracking number not found in our system",
    status: 404,
  };
}
export async function POST(request) {
  return handler(await request.json());
}