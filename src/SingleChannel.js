import React from 'react';

function SingleChannel( { id,
    Poster,
    title,
    date,
    media_type,
    vote_average,Images,Title
  }) {
    return (
      <ContentModal media_type={media_type} id={id}>
        <Badge
          badgeContent={vote_average}
          color={vote_average > 6 ? "primary" : "secondary"}
        />
        <img
          className="poster"
          src={Poster}
          alt={Title}
        />
        <b className="title">{title}</b>
        <span className="subTitle">
          {media_type === "tv" ? "TV Series" : "Movie"}
          <span className="subTitle">{date}</span>
        </span>
      </ContentModal>
    );
  };

export default SingleChannel;
