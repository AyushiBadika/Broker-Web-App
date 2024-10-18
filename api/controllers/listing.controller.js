import ListingModel from "../models/listing.model.js";

export const createListing = async (req, res, next) => {
  try {
    const listing = await ListingModel.create(req.body);
    res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

export const getUserListing = async (req, res, next) => {
  try {
    const listings = await ListingModel.find({ userRef: req.user.id });

    res.status(200).json(listings);
  } catch (error) {
    next(error);
  }
};
