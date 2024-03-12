 //Controllers used to send requests to database
 import Hotel from "../models/Hotel.js";

export const createHotel = async (req,res,next)=> {
    const newHotel = new Hotel(req.body);
    
    try { 
        const savedHotel = await newHotel.save();
        
        res.status(200).json(savedHotel);
    }catch(err) {
        next(err);
    }
}

export const updateHotel = async (req, res, next) => {
    try {
      const updatedHotel = await Hotel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedHotel);
    } catch (err) {
      next(err);
    }
  };
  
export const deleteHotel = async (req,res,next)=> {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
       res.status(200).json("Hotel has been deleted");
   }catch(err) {
       res.status(500).json(err);
   }
};

export const getHotel = async (req,res,next)=> {

    try {
        const hotel = await Hotel.findById(req.params.id,);
        res.status(200).json(hotel);
    }catch(err) {
        res.status(500).json(err);
    }
};

export const getHotels = async (req,res,next)=> {
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    }catch(err) {
        next(err);
    }
    };
    export const countByArea = async (req,res,next)=> {
        const areas = req.query.areas.split(",");
        try {
            const list = await Promise.all(
                areas.map((area) => {
                  return Hotel.countDocuments({ area: area });
                })
              );
              res.status(200).json(list);
        }catch(err) {
            next(err);
        }
        };
    export const getAreaHotels = async (req, res, next) => {
        try {
          const {area} = req.params;
          const hotels = await Hotel.find({ area: area });
          res.status(200).json(hotels);
        } catch (err) {
          next(err);
        }
      };