import React from "react";

function spotify() {
  return (
    <div>
    <iframe className="overflow-hidden" style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/2HS7TlWRWqyTplsAMIZMKX?utm_source=generator&theme=0" width="30%" height="132" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
  );
}

export default spotify;
