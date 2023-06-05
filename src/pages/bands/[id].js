import styles from "../../styles/Bands.module.css";

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

  const logoType = band.logo.includes("https://") ? band.logo 
  : `https://positive-pushy-oatmeal.glitch.me/logos/${band.logo}`;



  let members = band.members;
  if (members && typeof members === "string") {
    members = members.split(",");
  }


  return (
    <div className={styles.all_container} >
      <h1>{band.name}</h1>

      <img src={logoType}  className={styles.band_image} alt="band image" />
      

      {members && (
        <ul className={styles.band_members}>
          {members.map((member) => (
            <li key={member}><strong>{member.trim()}</strong></li>
          ))}
        </ul>
      )}

      <p>Music genre: {band.genre}</p>


      <p className={styles.band_bio}>{band.bio}</p>
      <p className={styles.credits}>Photo credits: {band.logoCredits}</p>
    </div>
  );
};

export default Bio;
