var express = require('express');
var router = express.Router();
let Anime = require('../models/anime');

module.exports.DislayAnimelist = async (req,res,next)=>{ 
    try{
       const AnimeList = await Anime.find(); 
       res.render('anime/list', {
          title: 'Anime List', 
          AnimeList: AnimeList
       });
    }catch(err){
       console.error(err);
       //Handle error
       res.render('anime/list', {
          error: 'Error on server'
       });
    }
 };
//add a new anime
 module.exports.AddAnime = async (req,res,next)=>{
    try{
        res.render('anime/add',
        {
            title:'Add new entry'
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('anime/list',
        {
            error: 'something went wrong'
        });
    }
};
//process the new additions
module.exports.ProcessAnime = async (req,res,next)=>{
    try{
        let newAnime = Anime({
            "title":req.body.title,
            "studio": req.body.studio,
            "year": req.body.year
        });
        Anime.create(newAnime).then(() =>{
            res.redirect('/animelist')
        })
    }
    catch(error){
        console.error(err);
        res.render('anime/list',
        {
            error: 'Error on the server'
        });
    }
};
//edit an existing entry
module.exports.EditAnime = async (req,res,next)=>{
    try{
    const id = req.params.id;
    const animeToEdit = await Anime.findById(id);
    res.render('anime/edit',
    {
        title:'Edit an existing',
        Anime:animeToEdit
    })
}
catch(error){
    console.error(err);
    res.render('anime/list',
    {
        error: 'something went wrong'
    });
}
}
//process an existing entry
module.exports.ProcessEditAnime = (req,res,next)=>{
    try{
        const id = req.params.id;
        let updatedAnime = Anime({
            "_id":id,
            "title":req.body.title,
            "studio": req.body.studio,
            "year": req.body.year
        });
        Anime.findByIdAndUpdate(id,updatedAnime).then(()=>{
            res.redirect('/animelist')
        });
    }
    catch(error){
        console.error(err);
        res.render('anime/list',
        {
            error: 'Error on the server'
        });
    }
}
//delete an entry
module.exports.DeleteAnime = (req,res,next)=>{
    try{
        let id = req.params.id;
        Anime.deleteOne({_id:id}).then(() =>
        {
            res.redirect('/animelist')
        })
    }
    catch(error){
        console.error(err);
        res.render('anime/list',
        {
            error: 'Something went wrong'
        });
    }
}
