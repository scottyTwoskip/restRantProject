const React = require("react");
const Def = require("../default.jsx");

function edit_form(data) {
  return (
    <Def>
      <form method="POST" action={`/places/${data.place._id}?_method=PUT`}>
        <div className="form-group">
          <label htmlFor="name">Place Name</label>
          <input
            className="form-control"
            id="name"
            name="name"
            value={data.place.name}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pic">Place Picture</label>
          <input
            value={data.place.pic}
            className="form-control"
            id="pic"
            name="pic"
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            value={data.place.city}
            className="form-control"
            id="city"
            name="city"
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            value={data.place.state}
            className="form-control"
            id="state"
            name="state"
          />
        </div>
        <div className="form-group">
          <label htmlFor="cuisines">Cuisines*</label>
          <input
            value={data.place.cuisines}
            className="form-control"
            id="cuisines"
            name="cuisines"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="founded">Founded year*</label>
          <input
            type="number"
            value={data.place.founded}
            className="form-control"
            id="founded"
            name="founded"
            required
          />
        </div>
        <button className="btn btn-primary">Submit Place</button>
      </form>
    </Def>
  );
}

module.exports = edit_form;
