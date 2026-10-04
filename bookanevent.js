export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Method not allowed"
        });
    }

    const {
        fullName,
        emailAddress,
        phoneNumber,
        eventType,
        serviceRequired,
        eventDate,
        numberOfGuests,
        eventLocation,
        additionalInformation
    } = req.body;

    if (
        !fullName ||
        !emailAddress ||
        !phoneNumber ||
        !eventType ||
        !serviceRequired ||
        !eventDate ||
        !numberOfGuests ||
        !eventLocation
    ) {
        return res.status(400).json({
            message: "Please fill in all required fields."
        });
    }

    return res.status(200).json({
        message: "Your event booking request has been received successfully!"
    });
}