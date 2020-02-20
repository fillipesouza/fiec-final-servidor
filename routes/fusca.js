const router = require('express').Router();
const _ = require('lodash');

const fuscas = [
    {img:'https://cdn-motorshow-ssl.akamaized.net/wp-content/uploads/sites/2/2019/09/vw-fusca-eletrico-5.jpg', descricao: ' fusca em otimo estado '},
    {img:'https://i.ytimg.com/vi/bbRRXF4YQpM/hqdefault.jpg', descricao: ' fusca em otimo estado '}
  ]

router.post('/', (req,res) => {
    fuscas.push(_.first(fuscas));
    res.json("ok");
})

router.get('/', (req,res) => {
   res.json(fuscas);
})

module.exports = router;
 