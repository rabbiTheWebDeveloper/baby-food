import React from "react";

const Video = () => {
  return (
    <section id="video">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 m-auto">
            <div className="video_item">
              <iframe
                width="100%"
                height={600}
                src="https://www.youtube.com/embed/AUPDu0VAeZw?start=32"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
