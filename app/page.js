import styles from "./page.module.css";
import Hide from "./Hide";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "dotenv/config";
require("dotenv").config();

const getData = async () => {
  const resp = await fetch(
    process.env.API
      ? process.env.API
      : "https://ngohuutuan221020.github.io/api/video.json",
    { next: { revalidate: 0 } }
  );
  return resp.json();
};

export default async function Home() {
  const api = await getData();

  return (
    <main>
      <h1 className={styles.main}>
        <img
          width="auto"
          src={process.env.IMG ? process.env.IMG : "./bg.jpg"}
          style={{ height: "50vh" }}
        />
      </h1>
      <div className="album py-5  ">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {api &&
              api.length > 0 &&
              api.map((item, index) => {
                let str = item.link;
                let thumbnail = str
                  .split("/d/")
                  .pop()
                  .split("/")
                  .reverse()
                  .pop();

                // const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
                // if (item.size === 0) return "n/a";
                // const i = parseInt(
                //   Math.floor(Math.log(item.size) / Math.log(1024)),
                //   10
                // );
                // if (i === 0) return `${item.size} ${sizes[i]})`;
                // let sizeCV = `${(item.size / 1024 ** i).toFixed(1)} ${
                //   sizes[i]
                // }`;

                return (
                  <div className="col" key={index}>
                    <div className="card shadow-sm" style={{ height: "100%" }}>
                      {/* <iframe
                        width="100%"
                        height="100%"
                        src={item.link}
                        allow="autoplay"
                      ></iframe> */}
                      <a
                        width="100%"
                        height="100%"
                        href={item.link}
                        target="_blank"
                        className={styles.background}
                        style={{
                          backgroundImage: `url(https://drive.google.com/thumbnail?id=${thumbnail}&sz=w1000)`,
                        }}
                      ></a>
                      <div className="card-body">
                        <p className="card-text">{item.name}</p>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <p className="card-text">{item.size}</p>
                          <p className="card-text">⏳ {item.time}</p>
                        </div>
                      </div>
                      <Hide item={thumbnail} />
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
