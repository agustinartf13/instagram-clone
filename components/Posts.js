import Post from "./Post";

const posts = [
  {
    id: "11",
    username: "agustinasaputraa",
    userImg:
      "https://66.media.tumblr.com/805ac1c1a0f6b3116481a2009a40e28c/tumblr_ocae6h1fA31rrk5zio1_500.jpg",
    img: "https://asset.winnetnews.com/image/cache/slide/post/image-suka-bring-me-the-horizon-harus-tau-nih-faktanya-si-oliver-sykes.jpg",
    caption: "This is Favorite Scream",
  },
  {
    id: "12",
    username: "agustinasaputraa",
    userImg:
      "https://66.media.tumblr.com/805ac1c1a0f6b3116481a2009a40e28c/tumblr_ocae6h1fA31rrk5zio1_500.jpg",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Hellfest2019Architects_04.jpg",
    caption: "I like This band from Im still in high school",
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
