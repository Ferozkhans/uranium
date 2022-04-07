const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/movies', function(req, res) {
    let arr1 = ['rrr','pushpa','avengers','skathi','spider']
       res.send(arr1)
    //console.log(req)
    //console.log(req.params.abcd)
    //res.send('dummy response')
})
 router.get('/movies/:indexNumber', function(req, res ) {
    let arr2 = ['rrr','pushpa','avengers','skathi','spider']
      for(let i=0;i<arr2.length;i++){
          res.send(arr2[req.params.indexNumber])
      }
 })
 router.get('/moviess/:indexNumbers',function(req, res) {
      let arr = ['rrr','pushpa','avengers','skathi','spider']
     for (let i=0;i<arr.length;i++){
       // if(arr[i]<=3){
        //}else{
        //}
        res.send(arr[req.params.indexNumbers] || "error")
     }
        
 })

 router.get('/films' , function(req,res){
     let hello = [ {
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Nemo"
       }]
       res.send(hello) 
       
 })
 router.get('/films/:filmId' , function(req,res){
    let hello = [ {
       id: 1,
       name: "The Shining"
      }, {
       id: 2,
       name: "Incendies"
      }, {
       id: 3,
       name: "Rang de Basanti"
      }, {
       id: 4,
       name: "Finding Nemo"
      }]
      for(let i=0;i<=hello.length;i++){
        res.send(hello[req.params.filmId] || 'error')
      }
    });


router.get('/test-me', function (req, res) {
    //console.log('------------------')
    //console.log(req)
    //console.log('------------------')
    //console.log('These are the request query parameters: ', req.query)
    //res.send('My first ever api!')
});




module.exports = router;
// adding this comment for no reaso//