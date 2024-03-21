const express=require("express");
const router=express.Router();
const {createCabin, getAllCabins,getCabin, updateCabin, deleteCabin}=require("../Controllers/cabinsController")
router.post("/createcabin",createCabin)
router.get("/getcabin/:id",getCabin);
router.get("/getcabins",getAllCabins);
router.patch("/updatecabin/:id",updateCabin);
router.delete("/deletecabin/:id",deleteCabin)
module.exports=router;