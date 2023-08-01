const { Router } = require("express");
const {
  FetchAllManga,
  MangaTitle,
  MostReadAll,
  MostRecommended,
  MostRecommendedAll,
  GenreName,
  RecentManga,
  CompletedManga,
  MostRead,
  SingleManga,
  ComingSoonManga,
  ComingSoonMangaList,
  MostLiked,
  SearchManga,
  RecentMangaList,
} = require("../Controller/Controller");

const router = Router();
router.get("/recentlist", RecentMangaList);
router.get('/search', SearchManga)
router.get("/mostliked", MostLiked);
router.get("/coming", ComingSoonManga);
router.get("/comingsoon", ComingSoonMangaList);
router.get("/recommend", MostRecommended);
router.get("/recommendall", MostRecommendedAll);
router.get("/all", FetchAllManga);
router.get("/recent", RecentManga);
router.get("/completed", CompletedManga);
router.get("/mostread", MostRead);
router.get("/mostreadall", MostReadAll);
router.get("/:id", SingleManga);
router.get("/manga/:id", MangaTitle);
router.get("/genre/:id", GenreName);



module.exports = router;
