export const getStaticPaths = async () => {
  const res = await fetch("https://positive-pushy-oatmeal.glitch.me/bands");
  const data = await res.json();

  const paths = data.map((band) => {
    return {
      params: { id: band.slug ? band.slug.toString() : "" },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    "https://positive-pushy-oatmeal.glitch.me/bands/" + id
  );
  const data = await res.json();

  return {
    props: { band: data },
  };
};

const Bio = ({ band }) => {
  let members = band.members;
  if (members && typeof members === "string") {
    members = members.split(",");
  }

  return (
    <div>
      <h1>{band.name}</h1>
      {members && (
        <ul>
          {members.map((member) => (
            <li key={member}>{member.trim()}</li>
          ))}
        </ul>
      )}
      <p>{band.genre}</p>
      <p>{band.logoCredits}</p>
      {band.logo && <img src={band.logo} alt={`${band.name} logo`} />}
      <p>{band.bio}</p>
    </div>
  );
};

export default Bio;
