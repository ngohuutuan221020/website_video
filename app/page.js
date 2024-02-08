// import Image from "https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png";
import styles from "./page.module.css";
const getData = async () => {
  const resp = await fetch("https://ngohuutuan221020.github.io/api/video.json");
  return resp.json();
};
const getData2 = async () => {
  const resp = await fetch("https://api.sampleapis.com/coffee/hot");
  return resp.json();
};
export default async function Home() {
  const api = await getData();
  const api2 = await getData2();

  return (
    <main className={styles.main}>
      {api2.map((item, index) => {
        return (
          <>
            <div>{item.title}</div>
          </>
        );
      })}
      <h1 style={{marginBottom: "2rem"}}>
        <img height={50} src="https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png"></img>Video
      </h1>
      <div className={styles.grid}>
        {api &&
          api.length > 0 &&
          api.map((item, index) => {
            return (
              <div key={index} className={styles.card} style={{margin: "10px"}}>
                <div className={styles.title}>
                  <h4>{item.name}</h4>
                </div>
                <div className={styles.video}>
                  <iframe src={item.link} width="640" height="480" allow="autoplay"></iframe>
                </div>
              </div>
            );
          })}
      </div>
    </main>
  );
}
