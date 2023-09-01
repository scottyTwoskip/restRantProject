const React = require("react");
const Def = require("../default");

function show(data) {
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
          <div className="row">
            <div className="col-sm-4">
              <strong>State:</strong>
            </div>
            <div className="col-sm-8">{data.place.state}</div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <strong>City:</strong>
            </div>
            <div className="col-sm-8">{data.place.city}</div>
          </div>

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
            <div>none</div>
          </div>
          <div className="col-sm-8">{data.place.comments}</div>
        </div>
        {/* buttons */}
        <a href={`/places/${data.place._id}/edit`} className="btn btn-warning">
          Edit
        </a>

        <form method="POST" action={`/places/${data.place._id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
      </main>
    </Def>
  );
}

module.exports = show;
