import ListingModel from "../models/listing.model.js";
import { errorHandler } from "../utils/error.js";

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
export const getListing = async (req, res, next) => {
  try {
    const listing = await ListingModel.findById(req.params.id);

    if (!listing) {
      return next(errorHandler({ statusCode: 404, message: "Listing not found!" }));
    }
    res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
};
export const deleteListing = async (req, res, next) => {
  const listing = await ListingModel.findById(req.params.id);

  if (!listing) {
    return next(errorHandler({ statusCode: 404, message: "Listing not found!" }));
  }

  if (req.user.id !== listing.userRef) {
    return next(errorHandler({ statusCode: 401, message: "You can only delete your own listings" }));
  }
  try {
    const listings = await ListingModel.findOneAndDelete({ userRef: req.user.id });

    res.status(200).json("Listing has been deleted!");
  } catch (error) {
    next(error);
  }
};
export const updateListing = async (req, res, next) => {
  const listing = await ListingModel.findById(req.params.id);

  if (!listing) {
    return next(errorHandler({ statusCode: 404, message: "Listing not found!" }));
  }

  if (req.user.id !== listing.userRef) {
    return next(errorHandler({ statusCode: 401, message: "You can only update your own listings" }));
  }
  try {
    const updatedListing = await ListingModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json(updatedListing);
  } catch (error) {
    next(error);
  }
};
