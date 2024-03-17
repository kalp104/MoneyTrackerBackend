const transaction = require( "../models/transactionModel" );

exports.getTransaction = async (req,res) => {

    try {
        const respond = await transaction.find({});

        res.status(200).json({
            success:true,
            data: respond,
            message:"get data successfully"
        });
    }catch (e) {
        console.log(e);
        console.error(e);
        res.status(500).json({
            success:false,
            data: "internal server error",
            message:e.message,
        })
    }
}