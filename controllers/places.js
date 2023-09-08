const router = require("express").Router();
const db = require("../models");

router.get("/", async (req, res) => {
  try {
    const places = await db.Place.find({})
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
    const place = await db.Place.findById(id)
    res.render("places/show", {place});
  } catch (error) {
    console.error(error)
    res.render('error404')
  }
});

router.get("/:id/edit", async(req, res) => {
  try {
    const id = req.params.id
    const place = await db.Place.findById(id)
    res.render("places/edit", { place});
  } catch (error) {
    console.error(error)
    res.render('error404')
  }
});

router.put("/:id", async(req, res) => {
  try {
    const id = req.params.id
    await db.Place.findByIdAndUpdate(id, req.body)
    res.redirect(`/places/${id}`);
  } catch (error) {
    console.error(error)
    res.render('error404')
  }
 
});
router.post("/", async(req, res) => {
  try {
    const place = await db.Place.create(req.body)
    res.redirect(`/places/${place._id}`);
  } catch (error) {
    console.error(error)
    res.render('error404')
  }
});

router.delete("/:id", async(req, res) => {
  try {
    const id = req.params.id
    await db.Place.findByIdAndDelete(id)
    res.redirect(`/places`);
  } catch (error) {
    console.error(error)
    res.render('error404')
  }
});

module.exports = router;
