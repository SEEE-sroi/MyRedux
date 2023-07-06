import axios from "axios";
 
import { useEffect, useState } from "react";
import SingleChannel from "./SingleChannel";
import OwnPagination from "./OwnPagination";
 
const Bilder = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON`
    );

    setContent(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <span>Trending Today</span>
      <div >
        {content &&
          content.map((c) => (
            <SingleChannel
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div>
      <OwnPagination setPage={setPage} />
    </div>
  );
};

export default Bilder;
