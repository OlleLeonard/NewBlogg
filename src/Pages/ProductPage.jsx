import { useContext } from "react";
import PageLayout from "../components/PageLayout";
import { ProductContext } from "../Context/PorductContext";
import KnappKomment from "../components/KnappKomment";
import NyttInläggKnapp from "../NyttInlägg/NyttInläggKnapp";

const ProductPage = () => {
  const { post } = useContext(ProductContext);

  const bobPost = post.find((p) => p.name === "Bob");
  const CharliePost = post.find((p) => p.name === "Charlie");
  const MariaPost = post.find((p) => p.name === "Maria");
  const FredPost = post.find((p) => p.name === "Fred");

  return (
    <PageLayout title="Product" headline="Product Page">
      <NyttInläggKnapp />
      <div className="Center">
        <div className="Grid">
          <div className="BloggBox">
            {bobPost && (
              <div key={bobPost.id}>
                <div className="Titel">
                  <b className="NameText">
                    <img src={bobPost.picture} alt={post.name} />
                    {bobPost.name}
                  </b>
                  <b className="TitelText">{bobPost.BloggTitle}</b>
                </div>
                <p className="BloggText">{bobPost.BloggText}</p>
                <div>
                  <KnappKomment />
                </div>

                {bobPost.comments.map((comment, index) => (
                  <div key={index}>
                    <div className="CommentText">
                      <img src={CharliePost.picture} alt={post.name} />
                      <b>{CharliePost.name}:</b>
                      {comment.BobComments1}
                    </div>
                    <br></br>
                    <div className="CommentText">
                      <img src={MariaPost.picture} alt={post.name} />
                      <b>{MariaPost.name}:</b>
                      {comment.BobComments2}
                    </div>
                    <br></br>
                    <div className="CommentText">
                      <img src={FredPost.picture} alt={post.name} />
                      <b>{FredPost.name}:</b>
                      {comment.BobComments3}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="BloggBox">
            {CharliePost && (
              <div key={CharliePost.id}>
                <div className="Titel">
                  <b className="NameText">
                    <img src={CharliePost.picture} alt={post.name} />
                    {CharliePost.name}
                  </b>
                  <b className="TitelText">{CharliePost.BloggTitle}</b>
                </div>
                <p className="BloggText">{CharliePost.BloggText}</p>
                <div>
                  <KnappKomment />
                </div>

                {CharliePost.comments.map((comment, index) => (
                  <div key={index}>
                    <div className="CommentText">
                      <img src={bobPost.picture} alt={post.name} />
                      <b>{bobPost.name}:</b>
                      {comment.CharlieComments1}
                    </div>
                    <br></br>
                    <div className="CommentText">
                      <img src={MariaPost.picture} alt={post.name} />
                      <b>{MariaPost.name}:</b>
                      {comment.CharlieComments2}
                    </div>
                    <br></br>
                    <div className="CommentText">
                      <img src={FredPost.picture} alt={post.name} />
                      <b>{FredPost.name}:</b>
                      {comment.CharlieComments3}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="BloggBox">
            {MariaPost && (
              <div key={MariaPost.id}>
                <div className="Titel">
                  <b className="NameText">
                    <img src={MariaPost.picture} alt={post.name} />
                    {MariaPost.name}
                  </b>
                  <b className="TitelText">{MariaPost.BloggTitle}</b>
                </div>
                <p className="BloggText">{MariaPost.BloggText}</p>
                <div>
                  <KnappKomment />
                </div>

                {MariaPost.comments.map((comment, index) => (
                  <div key={index}>
                    <div className="CommentText">
                      <img src={bobPost.picture} alt={post.name} />
                      <b>{bobPost.name}:</b>
                      {comment.MariaComments1}
                    </div>
                    <br></br>
                    <div className="CommentText">
                      <img src={CharliePost.picture} alt={post.name} />
                      <b>{CharliePost.name}:</b>
                      {comment.MariaComments2}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="BloggBox">
            {FredPost && (
              <div key={FredPost.id}>
                <div className="Titel">
                  <b className="NameText">
                    <img src={FredPost.picture} alt={post.name} />
                    {FredPost.name}
                  </b>
                  <b className="TitelText">{FredPost.BloggTitle}</b>
                </div>
                <p className="BloggText">{FredPost.BloggText}</p>
                <div>
                  <KnappKomment />
                </div>

                {FredPost.comments.map((comment, index) => (
                  <div key={index}>
                    <div className="CommentText">
                      <img src={bobPost.picture} alt={post.name} />
                      <b>{bobPost.name}:</b>
                      {comment.FredComments1}
                    </div>
                    <br></br>
                    <div className="CommentText">
                      <img src={MariaPost.picture} alt={post.name} />
                      <b>{MariaPost.name}:</b>
                      {comment.FredComments2}
                    </div>
                    <br></br>
                    <div className="CommentText">
                      <img src={CharliePost.picture} alt={post.name} />
                      <b>{CharliePost.name}:</b>
                      {comment.FredComments3}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProductPage;

/*
<p className="Text">
{post.text}
{post.comments.map((comment) => comment.text)}
</p>
*/
