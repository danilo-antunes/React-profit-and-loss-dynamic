

// uuid is a library for generating unique id
import { v4 as uuidv4 } from "uuid";

// Kanban application components
import Card from "layouts/applications/kanban/components/Card";

// Images
import officeDark from "assets/images/office-dark.jpg";
import meeting from "assets/images/meeting.jpg";
import homeDecore from "assets/images/home-decor-1.jpg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import team5 from "assets/images/team-5.jpg";

const boards = {
  columns: [
    {
      id: uuidv4(),
      title: "Strategic Planning",
      cards: [
        {
          id: uuidv4(),
          template: (
            <Card
              image={""}
              badge={{ color: "success", label: "done" }}
              content="Mock Card"
              attachedFiles={0}
              members={[]}
            />
          ),
        }
      ],
    },
    {
      id: uuidv4(),
      title: "Implementation",
      cards: [
      ],
    },
    {
      id: uuidv4(),
      title: "Valorisation",
      cards: [
        
      ],
    },
    {
      id: uuidv4(),
      title: "Targets",
      cards: [
        
      ],
    },
  ],
};

export default boards;
