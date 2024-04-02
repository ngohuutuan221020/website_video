import styles from "./page.module.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const getData = async () => {
  const resp = await fetch(
    "https://ngohuutuan221020.github.io/api/video.json",
    { next: { revalidate: 0 } }
  );
  return resp.json();
};

export default async function Home() {
  const api = await getData();

  return (
    <main>
      <h1 className={styles.main}>
        <img width="auto" src="/bg.jpg" style={{ height: "50vh" }} />
      </h1>

      <div className="album py-5  ">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {api &&
              api.length > 0 &&
              api.map((item, index) => {
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
                      ></a>
                      <div className="card-body">
                        <p className="card-text">{item.name}</p>
                        <p className="card-text">{item.size}</p>
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
