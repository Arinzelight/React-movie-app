import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import "./ContentModal.css"
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import axios from "axios";
import Carousel from "../Carousel/Carousel";
import { img_500, unavailable } from "../../config/config";

const useStyles = styled((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },


}));

export default function TransitionsModal({ children, media_type, id }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );

      setContent(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchVideo = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );

      setVideo(data.results[0]?.key);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
    // eslint-disable-next-line
  }, []);

  const embedUrl = `https://www.youtube.com/embed/${video}?autoplay=1`;

  return (
    <>
      <div
        className="media"
        style={{ cursor: "pointer" }}
        color="inherit"
        onClick={handleOpen}
      >
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          // style: { backdropFilter: "blur(3px)" }, // Adjust the backdrop style as needed
        }}
      >
        <Fade in={open}>
          {content && (
            <div className={classes.paper}>
              

              <div className="ContentModal">
                <img
                  src={
                    content.poster_path
                      ? `${img_500}/${content.poster_path}`
                      : unavailable
                  }
                  alt={content.name || content.title}
                  className="ContentModal__portrait"
                />
               
                <div className="ContentModal__about">

                  <div className="iframeContainer">
                     {/* Updated button to embed YouTube video */}

                    {video && (
                      <iframe
                        title="trailer"
                        width="100%"
                        height="100%"
                        src={embedUrl}
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    )}

                  </div>
                    
              
                  <span className="ContentModal__title">
                    {content.name || content.title} (
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )
                  </span>
                  {/* {content.tagline && (
                    <i className="tagline">{content.tagline}</i>
                  )} */}

                  <span className="ContentModal__description">
                    {content.overview}
                  </span>

                  <div>
                    <Carousel id={id} media_type={media_type} />
                  </div>
                
                </div>
                
              </div>
            </div>
          )}
        </Fade>
      </Modal>
    </>
  );
}
