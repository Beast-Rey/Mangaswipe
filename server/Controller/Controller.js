const Manga = require("../Model/MangaSchema");

const PAGE_SIZE = 15


const SearchManga = async(req, res) => {
  let Mangaregex = new RegExp(`^${req.query.q}`, "ig")
  try {
    const result = await Manga.find({mangaTitle: {$regex:Mangaregex}}).limit(5).select({mangaTitle:1, likes:1, mangaImageUrl:1})
    res.status(200).json({
      Message: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      Message: "Something went wrong!!",  
    }); 
    console.log(error);
  }
}

//single manga by id
const SingleManga = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Manga.findById(id).select({mangaTitle:1, mangaImageUrl:1, type:1, status:1, chapters:1, description:1, genre:1, rating:1, likes:1, artist:1})
    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong!!",
    });
  }
};

// find manga by title
const MangaTitle = async (req, res) => {
  const title = req.params.id;
  try {
    const result = await Manga.find({ "chapters.chapterTitle": title }).select({chapters:1})
    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong!!",
    });
  }
};


// Most read api based on views

const MostRead = async (req, res) => {
  try {
    const result = await Manga.find({}).sort({ likes: -1 }).limit(6).select({mangaTitle:1, mangaImageUrl:1, status:1, description:1})
    res.status(200).json({
      Message: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      Message: "Something went wrong!!",
    });
    console.log(error);
  }
};

const MostReadAll = async (req, res) => {
  const {page = 0} = req.query;
  try {
    const result = await Manga.find({}, null, {skip:parseInt(page) * PAGE_SIZE, limit: PAGE_SIZE}).sort({likes: -1}).select({mangaTitle:1, chapters:1, mangaImageUrl:1, description:1})
    res.status(200).json({
      Message: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      Message: "Something went wrong!!",
    });
    console.log(error);
  }
};

//most Recommended based on rating highter > 9

const MostRecommended = async (req, res) => {
  try {
    const result = await Manga.find({ rating: { $gte: 4 } }).select({mangaTitle:1, likes:1, 
      mangaImageUrl:1})
      .sort({ rating: -1 })
      .limit(10);
    res.status(200).json({
      Message: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      Message: "Something went wrong!!",
    });
    console.log(error);
  }
};

const MostRecommendedAll = async (req, res) => {
  const {page = 0} = req.query;
  try {
    const result = await Manga.find({ rating: { $gte: 4 } }, null, {skip:parseInt(page) * PAGE_SIZE, limit: PAGE_SIZE}).sort({rating: -1,}).select({mangaTitle:1, chapters:1, mangaImageUrl:1, description:1})
    res.status(200).json({
      Message: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      Message: "Something went wrong!!",
    });
    console.log(error);
  }
};


//most Liked api based on likes and limit 10

const MostLiked = async (req, res) => {
  try {
    const result = await Manga.find({}).sort({ likes: -1 }).limit(9).select({mangaTitle:1, likes:1, 
      mangaImageUrl:1});
    res.status(200).json({
      Message: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      Message: "Something went wrong!!",
    });
    console.log(error);
  }
};


//coming soon route based on status = coming soon returns title img description

const ComingSoonManga = async (req, res) => {
  try {
    const result = await Manga.find({ status: "Coming Soon" }).limit(2).select({mangaTitle:1, description:1, 
      mangaImageUrl:1})
    res.status(200).json({
      Message: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      Message: "Something went wrong!!",
    });
    console.log(error);
  }
};

const ComingSoonMangaList = async (req, res) => {
  const {page = 0} = req.query;
  try {
    const result = await Manga.find({ status: "Coming Soon" }, null, {skip:parseInt(page) * PAGE_SIZE, limit: PAGE_SIZE}).select({mangaTitle:1, description:1, 
      mangaImageUrl:1, chapters:1})
    res.status(200).json({
      Message: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      Message: "Something went wrong!!",
    });
    console.log(error);
  }
};

//fetch all manga

const FetchAllManga = async (req, res) => {
  const {page = 0} = req.query;
  try {
    const result = await Manga.find({}, null, {skip:parseInt(page) * PAGE_SIZE, limit: PAGE_SIZE})
    res.status(200).json({
      Message: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      Message: "Something went wrong!!",
    });
    console.log(error);
  }
};


// ongoing manga

const RecentManga = async (req, res) => {
  try {
    const result = await Manga.find().sort({modifiedManga: -1}).limit(6).select({mangaTitle:1, mangaImageUrl:1, status:1, description:1})
    res.status(200).json({
      Message: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      Message: "Something went wrong!!",
    });
    console.log(error);
  }
};


const RecentMangaList = async (req, res) => {
  const {page = 0} = req.query;
  try {
    const result = await Manga.find({}, null, {skip:parseInt(page) * PAGE_SIZE, limit: PAGE_SIZE}).sort({modifiedManga: -1}).select({mangaTitle:1, mangaImageUrl:1, chapters:1, description:1}).limit(50)
    res.status(200).json({
      Message: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      Message: "Something went wrong!!",
    });
    console.log(error);
  }
};

// completed manga

const CompletedManga = async (req, res) => {
  try {
    const result = await Manga.find({ status: "Completed" }).limit(10).select({mangaTitle:1, mangaImageUrl:1, status:1, likes:1})
    res.status(200).json({
      Message: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      Message: "Something went wrong!!",
    });
    console.log(error);
  }
};


//fetch manga by genre
const GenreName = async (req, res) => {
  const genre = req.params.id
  try {
    const result = await Manga.find({"genre": { $regex : new RegExp(`^${genre}/?$`,"i"),}}).select({mangaTitle:1, genre:1}).limit(2)
    if(result.length <=0) {
      return res.status(401).json({
        status: "Failed",
        Message: "Enter Valid Genre!!"
      })
    }
    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong!!",
    });
  }
};



module.exports = {
  MostRead,
  MostReadAll,
  MostRecommended,
  MostRecommendedAll,
  MangaTitle,
  FetchAllManga,
  RecentManga,
  CompletedManga,
  SingleManga,
  GenreName,
  ComingSoonManga,
  ComingSoonMangaList,
  MostLiked,
  SearchManga,
  RecentMangaList,
  
};
