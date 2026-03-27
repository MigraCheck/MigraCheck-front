import { useEffect, useState } from "react";
import API from "../../service/api";
import PublicationCard from "../atoms/PublicationCard/PublicationCard";
import Header from "../atoms/Header/Header";
import { data } from "react-router-dom";

const AllPublications = () => {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/publications')
    .then(res => res.json())
    .then(data => {
        const list =  data.content
        console.log(list)
        setPublications(Array.isArray(list) ? list : [])})
    .catch((err) => console.error(err))
  }, [])
  return (
    <>
      <Header />
    <div>
        {publications.length === 0 ? (
        <p>No hay publicaciones aún</p>
      ) : (
            publications.map((publication) => (
                <PublicationCard publication={publication} />
            ))
      )}
    </div>
      
    </>
  );
};

export default AllPublications;
