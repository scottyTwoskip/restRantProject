const React = require("react");
const Def = require("../default");

function show(data) {
  let comments = <h3 className="inactive">no comments yet</h3>;
  if (data.place.comments.length) {
    comments = data.place.comments.map((c) => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? "Rant! ðŸ˜¡" : "Rave! ðŸ˜»"}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      );
    });
  }
  return (
    <Def>
      <main>
        <h1>{data.place.name}</h1>

        <img
          style={{ width: "200px", marginBottom: "20px" }}
          src={data.place.pic}
          alt={data.place.name}
        />

        <div className="container">
          <h3>
            Located in {data.place.city}, {data.place.state}
          </h3>
          <h3>{data.place.showEstablished()}</h3>
          <div className="row">
            <div className="col-sm-4">
              <strong>Cuisine Type:</strong>
            </div>
            <div className="col-sm-8">{data.place.cuisines}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <strong>Rating:</strong>
          </div>
          <div>not yet rated</div>
          <div className="col-sm-8">{data.place.rating}</div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <strong>Comments:</strong>
            {comments}
          </div>
        </div>
        <form action={`/places/${data.place._id}/rant`} method="POST">
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input className="form-control" id="author" name="author" />
          </div>
          <div className="form-check">
            <label className="form-check-label" htmlFor="rant">
              Rant
            </label>
            <input
              type="checkbox"
              className="form-check-input"
              id="rant"
              name="rant"
            />
          </div>
          <div className="form-group">
            <label htmlFor="stars">Star Rating</label>
            <input
              type="number"
              step="0.5"
              className="form-control"
              id="stars"
              name="stars"
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea className="form-control" id="content" name="content" />
          </div>
          <button type="submit" className="btn btn-danger">
            POST RANT
          </button>
        </form>
        <div>
          <a
            href={`/places/${data.place._id}/places`}
            className="btn btn-warning"
          >
            Edit
          </a>
          <div>
            <form
              method="POST"
              action={`/places/${data.place._id}?_method=DELETE`}
            >
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
