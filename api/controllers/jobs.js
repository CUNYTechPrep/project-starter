const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const db = require("../models");
const auth = require("../middleware/auth");
const { Company, User, Companyprofile, Userprofile, Job } = db;

//@route    POST api/job
//@desc     Post job
//@access   PRIVATE
router.post(
    "/",
    [
        auth,
        check("title", "Job title is required")
            .not()
            .isEmpty(),
        check("description", "Description is required")
            .not()
            .isEmpty(),
        check("typeofposition", "Type of position is required")
            .not()
            .isEmpty(),
        check("primaryrole", "Primary role is required")
            .not()
            .isEmpty()
    ],
    async (req, res) => {
        //Users are not allowed to post jobs
        if (req.user) {
            return res.status(401).json({ msg: "Unauthorized" });
        }

        try {
            const { id } = req.company;
            const {
                title,
                description,
                typeofposition,
                primaryrole,
                city,
                state
            } = req.body;

            const jobDetails = {
                title,
                description,
                typeofposition,
                primaryrole
            };
            jobDetails.companyId = id;
            if (city) jobDetails.city = city;
            if (state) jobDetails.state = state;
            if (website) jobDetails.website = website;

            await Job.create(jobDetails);

            res.json({ msg: "Job Posted" });
        } catch (err) {
            console.error(err);
            res.status(500).json({ msg: "server error" });
        }
    }
);

//@route    PUT api/job
//@desc     Update job
//@access   PRIVATE
router.post(
    "/:job_id",
    [
        auth,
        check("title", "Job title is required")
            .not()
            .isEmpty(),
        check("description", "Description is required")
            .not()
            .isEmpty(),
        check("typeofposition", "Type of position is required")
            .not()
            .isEmpty(),
        check("primaryrole", "Primary role is required")
            .not()
            .isEmpty()
    ],
    async (req, res) => {
        //Users are not allowed to post jobs
        if (req.user) {
            return res.status(401).json({ msg: "Unauthorized" });
        }

        try {
            const { id } = req.company;
            const { job_id } = req.params;
            const {
                title,
                description,
                typeofposition,
                primaryrole,
                city,
                state
            } = req.body;

            const jobDetails = {
                title,
                description,
                typeofposition,
                primaryrole
            };
            jobDetails.companyId = id;
            if (city) jobDetails.city = city;
            if (state) jobDetails.state = state;

            const job = await Job.findByPk(job_id);
            await job.update(jobDetails);

            res.json({ msg: "Job Updated" });
        } catch (err) {
            console.error(err);
            res.status(500).json({ msg: "server error" });
        }
    }
);
