const jobsSchema = {
    company: {
        type: ObjectId,
        ref: "company"
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    typeOfPosition: {
        //internship, full time, contractor
        type: String,
        required
    },
    primaryRole: {
        //Software developer, technology analyst, etc
        type: String
    },
    skills: {
        type: [String]
    },
    salary: {
        type: String
    },
    applicants: [
        {
            type: ObjectId,
            ref: "jobseeker"
        }
    ]
};
