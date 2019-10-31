const JobSeekerProfileSchema = {
    user: {
        type: ObjectId,
        ref: "jobseeker"
    },
    bio: {
        type: String
    },
    education: [
        {
            school: {
                type: String,
                required: true
            },
            degree: {
                type: String,
                required: true
            },
            fieldofstudy: {
                type: String,
                required: true
            },
            from: {
                type: Date,
                required: true
            },
            to: {
                type: Date
            },
            current: {
                type: Boolean,
                default: false
            }
        }
    ],
    experience: [
        {
            title: {
                type: String,
                required: true
            },
            company: {
                type: String,
                required: true
            },
            location: {
                type: String
            },
            from: {
                type: Date,
                required: true
            },
            to: {
                type: Date
            },
            description: {
                type: String
            },
            current: {
                type: Boolean,
                default: false
            }
        }
    ],
    socials: {
        youtube: {
            type: String
        },
        twitter: {
            type: String
        },
        facebook: {
            type: String
        },
        linkedin: {
            type: String
        },
        instagram: {
            type: String
        },
        github: {
            type: String
        }
    },
    skills: {
        type: [String]
    },
    date: {
        type: Date
    },
    jobsApplied: [
        {
            type: ObjectId,
            ref: "jobs"
        }
    ],
    jobsSaved: [
        {
            type: ObjectId,
            ref: "jobs"
        }
    ]
};
