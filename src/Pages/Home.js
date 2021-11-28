import CustomAppBar from "../Components/CustomAppBar";
import { useState, useEffect } from "react";
import CustomCard from "../Components/CustomCards";
import { Row, Spinner } from "react-bootstrap";
import "./home.css";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    async function getVideos() {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/videos`, {
        method: "GET",
      });
      const data = await response.json();
      setVideos(data);
    }
    getVideos();
  }, []);

  return (
    <div>
      <CustomAppBar
        isSrearchVisible={true}
        onSearch={(event) => {
          setSearchText(event.target.value);
        }}
      />
      {videos.length === 0 ? (
        <div className="spinner">
          <Spinner animation="border" variant="danger" left="50%" />
          loading...
        </div>
      ) : (
        <Row xs={1} md={3} className="g-4">
          {videos
            .filter((e) =>
              searchText.lenght === 0
                ? true
                : e.title.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((e) => (
              <CustomCard
                title={e.title}
                image={e.image}
                views={e.views}
                uploadAgo={e.uploadAgo}
                uploadBy={e.uploadBy}
              />
            ))}
        </Row>
      )}
    </div>
  );
};

export default Home;
