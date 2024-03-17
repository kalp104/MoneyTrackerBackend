const transaction = require( "../models/transactionModel" );

exports.deleteTransaction = async (req, res) => {
    try {
        // Extract ID from request parameters
        const { id } = req.params;

        // Find and delete the todo by ID
        const deletedtransaction = await transaction.findByIdAndDelete(id);

        if (!deletedtransaction) {
            return res.status(404).json({
                success: false,
                message: "transaction not found",
            });
        }

        // Response for successful deletion
        res.status(200).json({
            success: true,
            message: "transaction deleted",
            deletedtransaction,
        });

    } catch (e) {
        console.error(e);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: e.message,
        });
    }
};
