import styles from "./page.module.css";
import Image from "next/image";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const getData = async () => {
  const resp = await fetch("https://ngohuutuan221020.github.io/api/video.json", {next: {revalidate: 0}});
  return resp.json();
};
let api = [
  {
    name: "rh2048.com@MIZD-304.mp4",
    link: "https://drive.google.com/file/d/1tOMrcbrOsJq-W_muDvoA2B5Spt1z1odD/preview",
  },
  {
    name: "rh2048.com@MIZD-304.mp4",
    link: "https://drive.google.com/file/d/1tOMrcbrOsJq-W_muDvoA2B5Spt1z1odD/preview",
  },
  {
    name: "rh2048.com@MIZD-304.mp4",
    link: "https://drive.google.com/file/d/1tOMrcbrOsJq-W_muDvoA2B5Spt1z1odD/preview",
  },
  {
    name: "A-MOSAIC-ARCHIVE-STARS-964.mp4",
    link: "https://drive.google.com/file/d/13LDhxXVg9ktDJYqsuF-6ObAonxL20QJP/preview",
  },
  {
    name: "rh2048.com@MIZD-304.mp4",
    link: "https://drive.google.com/file/d/1tOMrcbrOsJq-W_muDvoA2B5Spt1z1odD/preview",
  },
  {
    name: "A-MOSAIC-ARCHIVE-STARS-964.mp4",
    link: "https://drive.google.com/file/d/13LDhxXVg9ktDJYqsuF-6ObAonxL20QJP/preview",
  },
];
export default async function Home() {
  const api = await getData();

  return (
    <main className={styles.main}>
      <h1>
        <img width="auto" src="/bg.jpg" style={{height: "50vh"}} />
      </h1>
      {/* <div className={styles.grid}>
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
      </div> */}
      <div class="album py-5  ">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {api &&
              api.length > 0 &&
              api.map((item, index) => {
                return (
                  <div class="col" style={{height: "18rem"}}>
                    <div class="card shadow-sm" style={{height: "100%"}}>
                      <iframe width="100%" height="100%" src={item.link} allow="autoplay"></iframe>

                      <div class="card-body">
                        <p class="card-text">{item.name}</p>
                        {/* <div class="d-flex justify-content-between align-items-center">
                          <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">
                              View
                            </button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">
                              Edit
                            </button>
                          </div>
                          <small class="text-muted">9 mins</small>
                        </div> */}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </main>
  );
}
