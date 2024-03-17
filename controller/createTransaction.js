const transaction = require( "../models/transactionModel" );

exports.createTransaction = async (req,res) => {

    try {
        const {name1, type, amount} = req.body;
        const respond = await transaction.create({name1, type, amount});

        res.status(200).json({
            success:true,
            data: respond,
            message:"entery created successfully"
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