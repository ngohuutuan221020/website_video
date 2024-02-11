import styles from "./page.module.css";

// let api = [
//   {
//     name: "rh2048.com@MIZD-304.mp4",
//     link: "https://drive.google.com/file/d/1tOMrcbrOsJq-W_muDvoA2B5Spt1z1odD/preview",
//   },
//   {
//     name: "A-MOSAIC-ARCHIVE-STARS-964.mp4",
//     link: "https://drive.google.com/file/d/13LDhxXVg9ktDJYqsuF-6ObAonxL20QJP/preview",
//   },
//   {
//     name: "A-MOSAIC-ARCHIVE-STARS-964.mp4",
//     link: "https://drive.google.com/file/d/13LDhxXVg9ktDJYqsuF-6ObAonxL20QJP/preview",
//   },
// ];

const getData = async () => {
  const resp = await fetch("https://ngohuutuan221020.github.io/api/video.json", {next: {revalidate: 0}});
  return resp.json();
};

export default async function Home() {
  const api = await getData();

  return (
    <main className={styles.main}>
      <h1 style={{marginBottom: "2rem"}}>
        <img height={50} src="https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png"></img>Video
      </h1>
      <div className={styles.grid}>
        {api &&
          api.length > 0 &&
          api.map((item, index) => {
            return (
              // width="640" height="480"
              <div key={index} className={styles.card}>
                <div className={styles.title}>
                  <h4>{item.name}</h4>
                </div>
                <div className={styles.video}>
                  <iframe width="100%" height="100%" src={item.link} allow="autoplay"></iframe>
                </div>
              </div>
            );
          })}
      </div>
    </main>
  );
}
