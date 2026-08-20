import { useEffect, useRef, useState } from "react";

const team = [
  {
    initials: "VM",
    name: "Vipul Manchanda",
    role: "Founder",
  },
  {
    initials: "AK",
    name: "Ananya Kapoor",
    role: "Head of Underwriting",
  },
  {
    initials: "RS",
    name: "Rohan Sethi",
    role: "Senior Financial Analyst",
  },
  {
    initials: "MD",
    name: "Meera Desai",
    role: "Asset Management Lead",
  },
  {
    initials: "KN",
    name: "Karan Nair",
    role: "Accounting Lead",
  },
  {
    initials: "SI",
    name: "Sana Iqbal",
    role: "Investor Materials Lead",
  },
];

function TeamSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(section);

    return () => {
      observer.unobserve(section);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`teamSection ${visible ? "teamVisible" : ""}`}
    >
      <div className="teamInner">

        {/* HEADER */}

        <div className="teamHeader">

          <div className="teamHeading">

            <p className="teamEyebrow">
              THE TEAM
            </p>

            <h2>
              The people
              <br />
              <span>on your file.</span>
            </h2>

          </div>


          <div className="teamIntro">

            <p className="teamIntroLead">
              Know exactly who you're working with.
            </p>

            <p>
              No pooled resources or rotating juniors. The people
              assigned to your work stay close to it — and you can
              speak with them directly.
            </p>

          </div>

        </div>


        {/* TEAM LIST */}

        <div className="teamGrid">

          {team.map((member, index) => (

            <article
              className="teamMember"
              key={member.name}
              style={{
                "--team-delay": `${0.18 + index * 0.12}s`,
              }}
            >

              <div className="teamInitials">
                {member.initials}
              </div>


              <div className="teamMemberInfo">

                <h3>
                  {member.name}
                </h3>

                <p>
                  {member.role}
                </p>

              </div>


              <span className="teamMemberNumber">
                {String(index + 1).padStart(2, "0")}
              </span>

            </article>

          ))}

        </div>


        {/* BOTTOM */}

        <div className="teamBottom">

          <p>
            Dedicated people.
          </p>

          <p>
            Consistent work.
          </p>

        </div>

      </div>
    </section>
  );
}

export default TeamSection;