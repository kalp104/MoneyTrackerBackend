const category = require( "../models/categoryModel" );

exports.createCategory = async (req,res) => {

    try {
        const {type, color} = req.body;
        const respond = await category.create({ type ,color});

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