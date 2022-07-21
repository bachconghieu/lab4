var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req
    , res, next) {
    res.render('index', {
        title: 'Express',
        name: 'BẠCH HIẾU'
    });
});

router.get('/news', function (req, res) {

    // 1 bien binh thuong
    var name = 'Bạch Văn Hiếu'
    var tuoi = 20;

    // mang - array
    var mang = [4,5,6,4,11,7,7,66,9];
    var mangTen = ['Four','five','six','four','eleven','seven','seven','sixty-six','nine'];

    res.render('news',{
        ten : name,
        year : tuoi,
        arr1 : mang,
        arr2 : mangTen
    });
})


module.exports = router;
