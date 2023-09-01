const router = require("express").Router();
const placeModel = require("../models/places");

router.get("/", async (req, res) => {
  try {
    const places = await placeModel.find({})
    res.render("places/index", { places });
  } catch (error) {
    console.error(error)
    res.render('error404')
  }
});

router.get("/new", (req, res) => {
  res.render("places/new");
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id
    const place = await placeModel.findById(id)
    res.render("places/show", {place});
  } catch (error) {
    console.error(error)
    res.render('error404')
  }
});

router.get("/:id/edit", async(req, res) => {
  try {
    const id = req.params.id
    const place = await placeModel.findById(id)
    res.render("places/edit", { place});
  } catch (error) {
    console.error(error)
    res.render('error404')
  }
});

router.put("/:id", async(req, res) => {
  try {
    const id = req.params.id
    await placeModel.findByIdAndUpdate(id, req.body)
    res.redirect(`/places/${id}`);
  } catch (error) {
    console.error(error)
    res.render('error404')
  }
 
});
router.post("/", async(req, res) => {
  try {
    const place = await placeModel.create(req.body)
    res.redirect(`/places/${place._id}`);
  } catch (error) {
    console.error(error)
    res.render('error404')
  }
});

router.delete("/:id", async(req, res) => {
  try {
    const id = req.params.id
    await placeModel.findByIdAndDelete(id)
    res.redirect(`/places`);
  } catch (error) {
    console.error(error)
    res.render('error404')
  }
});

module.exports = router;
