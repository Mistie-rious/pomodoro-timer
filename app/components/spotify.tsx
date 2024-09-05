import React from "react";

function spotify() {
  return (
    <div>
<iframe
  className="w-full max-w-md h-36 self-end"
  style={{ borderRadius: "12px" }}
  src="https://open.spotify.com/embed/playlist/2HS7TlWRWqyTplsAMIZMKX?utm_source=generator&theme=0"
  allowFullScreen={true}
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
></iframe>
    </div>
  );
}

export default spotify;
