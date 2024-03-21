const Cabins = require("../Models/cabinsModel");
const CatchAsync = require("../Utils/CatchAsync");
const AppError = require("../Utils/AppError");
exports.createCabin = CatchAsync(async (req, res, next) => {
    const newcabin = await Cabins.create(req.body);
    res.status(200).json({
        status: "success",
        message: "Cabin create sucessfully",
        newcabin
    })
})
exports.getCabin = CatchAsync(async (req, res, next) => {
    const cabin = await Cabins.findById(req.params.id);
    if (!cabin) {
        return next(new AppError("cabin not found", 400))
    }

    res.status(200).json({
        status: "success",
        message: "cabin extracted sucessfully",
        cabin
    })
})
exports.getAllCabins = CatchAsync(async (req, res, next) => {
    const cabins = await Cabins.find();
    if (!cabins) {
        return next(new AppError("cabin not found", 400))
    }

    res.status(200).json({
        status: "success",
        message: "all cabin extracted sucessfully",
        cabins
    })
})

exports.updateCabin = CatchAsync(async (req, res, next) => {
    const cabin = await Cabins.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true

    });

    if (!cabin) {
        return next(new AppError("cabin not found", 400))
    }

    res.status(200).json({
        status: "success",
        message: "cabin updated sucessfully",
        cabin
    })
})
exports.deleteCabin = CatchAsync(async (req, res, next) => {
    const cabin = await Cabins.findByIdAndDelete(req.params.id);
    if (!cabin) {
        return next(new AppError("cabin not found", 400))
    }


    res.status(200).json({
        status: "success",
        message: "cabin deleted sucessfully",

    })
})

