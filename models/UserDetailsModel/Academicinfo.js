import mongoose from "mongoose";

const academicInfoSchema = new mongoose.Schema({
  grades: [
    {
      semester: Number,
      sgpa: String,
      cgpa: String,
      gradecard: String
    }
  ],
  selectedProfessional: [String],
  selectedOpen: [String],
  projects: [
    {
      title: String,
      typeP: String,
      mode: String,      
      duration: String,
      year: String,
      graded: String,
      supervisor: String,
      coSupervisor: String,
      institute: String,
      sdgConnection: String,
      outcome: String,
      certificate: String,
      projects: []
    },
  ],
  publications: {
    journalPapers: [
      {
        title: String,
        journalName: String,
        volume: String,
        pageNo: String,
        doi: String,
        firstPage: String,
      },
    ],
    conferencePapers: [
      {
        title: String,
        conferenceName: String,
        venue: String,
        dates: String,
        organizedBy: String,
      },
    ],
    patent: [
      {
        title: String,
        details: String,
        applno: String,
        patno: String,
        certificate: String,
      },
    ],
  },
  courses: [
    {
      name: String,
      duration: String,
      mode: String,
      noCredits: String,
      platform: String,
      instituteName: String,
      facultyName: String,
      curriculumPart: Boolean,
      creditTransfer: Boolean,
      gradeCard: String,
      certificate: String,
    },
  ],
  trainings: [
    {
      place: String,
      duration: Number,
      mode: String,
      noCredits: String,
      organizedBy: String,
      certificate: String,
    },
  ],
  interns: [
    {
      place: String,
      duration: Number,
      mode: String,
      noCredits: String,
      organizedBy: String,
      certificate: String,
    },
  ],
  remedial: [{ num: Number, name: String }],
});

export default academicInfoSchema;