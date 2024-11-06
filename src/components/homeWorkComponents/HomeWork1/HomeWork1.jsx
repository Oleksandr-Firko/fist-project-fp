import "./homeWork1.css";
import ProfileCard from "../../profileCard/ProfileCard";

const users = [
  {
    id: 1,
    portraitUrl: "/images/photo.jpg",
    info: {
      fullName: "Alex Firko",
      hobbies: ["Cycling", "Drift", "Making handicrafts", "PC game playing"],
    },
    instLink: "https://www.instagram.com/alex_firko/?hl=en",
  },
];

function HomeWork1() {
  return (
    <div className="container">
      {users.map((user) => {
        return (
          <ProfileCard
            key={user.id}
            portraitUrl={user.portraitUrl}
            info={user.info}
            gitLink={user.gitLink}
            instLink={user.instLink}
          />
        );
      })}
    </div>
  );
}

export default HomeWork1;
