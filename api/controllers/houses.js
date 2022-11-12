const express = require("express");
const { TableHints } = require("sequelize");
const router = express.Router();
const db = require("../models");
const { UserInfo, Bill, House, Rent } = db;

//return json of houses based on userID
router.get("/", (req, res) => {
	Property.findAll({}).then((allHouses) => res.json(allHouses));
});

//return house specific information
router.get("/house/:id", (req, res) => {
	const { id } = req.params;
	House.findByPk(id).then((house) => {
		if (!house) {
			return res.sendStatus(404);
		}
		res.json(house);
	});
});

// delete a house based on id
router.delete("/house/:id", (req, res) => {
	const { id } = req.params;
	House.findByPk(id).then((house) => {
		if (!house) {
			return res.sendStatus(404);
		}
		house.destroy();
		res.sendStatus(204);
	});
});

//update billsTable with all bill information
router.post("/form", (req, res) => {
	let { address, electric, gas, mortgage, rent, step, tenanted, water } =
		req.body;

	Property.create({
		address,
		electric,
		gas,
		mortgage,
		rent,
		step,
		tenanted,
		water,
	})
		.then((newPost) => {
			res.status(201).json(newPost);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

//get a bill from billTable
router.get("/house/:id/bills/billType/:billType?", (req, res) => {
	const { id } = req.params;
	Bill.findByPk(id).then((mpost) => {
		if (!mpost) {
			return res.sendStatus(404);
		}
		res.json(mpost);
	});
});

//add a bill to billTable
router.post("/house/:id/bills/billType/:billType?", (req, res) => {
	const { id } = req.params;
});

//modify a bill in the billTable
router.put("/house/:id/bills/billType/:billType?", (req, res) => {
	const { id } = req.params;
});

//delete a bill in billTable
router.delete("/house/:id/bills/billType/:billType?", (req, res) => {
	const { id } = req.params;
});


//get a rent from rent table
router.get("/house/:id/rents", (req, res) => {
	const { id } = req.params;
});

//add a rent to rentTable
router.post("/house/:id/rents", (req, res) => {
	const { id } = req.params;
});

//modify a rent in the rentTable
router.put("/house/:id/rents", (req, res) => {
	const { id } = req.params;
});

//delete a rent  in rentTable
router.delete("/house/:id/rents", (req, res) => {
	const { id } = req.params;
});

// router.put("/:id", (req, res) => {
//   const { id } = req.params;
//   MicroPost.findByPk(id).then((mpost) => {
//     if (!mpost) {
//       return res.sendStatus(404);
//     }

//     mpost.content = req.body.content;
//     mpost
//       .save()
//       .then((updatedPost) => {
//         res.json(updatedPost);
//       })
//       .catch((err) => {
//         res.status(400).json(err);
//       });
//   });
// });

module.exports = router;
