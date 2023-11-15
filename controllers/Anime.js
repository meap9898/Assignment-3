var express = require('express');
var router = express.Router();
let Anime = require('../models/Anime');
const { compile } = require('ejs');



module.exports.DisplayAnimelist = async (req,res,next)=>{
    try{
        const AnimeList = await Anime.find();
        res.render('anime/list',{
            title: 'Anime List',
            AnimeList: AnimeList
        });
    }
    catch(err){
        console.error(err);
        res.render('anime/list', {
            error: 'Error on Server'
        });
    }
};
module.exports.AddAnime = async (req,res,next)=>{
    try{
        const AnimeList = await Anime.find();
        res.render('anime/add',{
            title: 'Add Anime'
        });
    }
    catch(err){
        console.error(err);
        res.render('anime/list', {
            error: 'Error on Server'
        });
    }
};

module.exports.ProcessAnime = async (req,res,next)=>{
    try{
        let newAnime = Anime({
            "_id": req.body.id,
            "title": req.body.title,
            "studio": req.body.studio,
            "year": req.body.year
        });
        Anime.create(newAnime).then(() =>{
            res.redirect('/animelist')
        })
    }
    catch(error){
        console.error(err);
        res.render('anime/list', {
            error: 'Error on Server'
        });
    }
};

module.exports.EditAnime = async (req,res,next)=>{
    try{
        const id = req.params.id;
        const animeToEdit = await Anime.findById(_id);
        res.render('anime/exit',{
            title:'Edit Anime',
            Anime:animeToEdit
        })
    }
    catch(err){
        console.error(err);
        res.render('anime/list', {
            error: 'Error on Server'
        });
    }
}
module.exports.ProcessEditAnime = async (req,res,next)=>{
    try{
        const id = req.params._id;
        let updateAnime = Anime({
            "_id": req.body.id,
            "title": req.body.title,
            "studio": req.body.studio,
            "year": req.body.year
        });
        Anime.findByIdAndUpdate(_id,updateAnime).then(() =>{
            res.redirect('/animelist')
        });
    }
    catch(error){
        console.error(err);
        res.render('anime/list', {
            error: 'Error on Server'
        });
    }
}

module.exports.DeleteAnime = (req,res,next)=>{
    try{
        let id = req.params.id;
        Anime.deleteOne({_id:id}).then(()=>
        {
            res.redirect('/animelist')
        })
    }
    catch(error){
        console.error(err);
        res.render('anime/list', {
            error: 'Error on Server'
        });
    }
}