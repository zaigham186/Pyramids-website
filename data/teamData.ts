// /data/teamData.ts

// 1. DEFINE AND EXPORT THE TYPE
export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image?: string; // Image is optional
}

// 2. DEFINE AND EXPORT THE DATA
// This is the correct team list from your "team.jpg" file
export const allTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Imran Siddique",
    position: "Chief Executive Officer",
    image: "/expertise-images/ceo.jpg", // The ONLY image
  },
  {
    id: 2,
    name: "Nooh Siddique",
    position: "Director",
    image:"/expertise-images/nooh .jpg",
  },
  {
    id: 3,
    name: "Asad Khan",
    position: "Structural Engineer",
  },
  {
    id: 4,
    name: "Shakeel",
    position: "Principal Architect",
  },
  {
    id: 5,
    name: "Anwar Ul Haq",
    position: "Assistant Architect",
  },
  {
    id: 6,
    name: "Junaid Khan",
    position: "Electrical Engineering",
  },
  {
    id: 7,
    name: "Yasir Siddique",
    position: "Finance Manager",
  },
  {
    id: 8,
    name: "Ashfaq Ur Rehman",
    position: "Drafts Man",
  },
  {
    id: 9,
    name: "Danish Khan",
    position: "Drafts Man",
  },
  {
    id: 10,
    name: "Muhammad Shoaid",
    position: "Drafts Man",
  },
  {
    id: 11,
    name: "Hikmat Khan",
    position: "Mechanical Engineer",
  },
  {
    id: 12,
    name: "Kamran Khan",
    position: "Quantity Surveyor",
  },
  {
    id: 13,
    name: "Shehryar Khan",
    position: "Manager Construction",
  },
];
