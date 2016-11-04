function getFirstSelector(string){
  return document.querySelector(string)
}

function nestedTarget(){
  return document.querySelector('#nested')
}

function increaseRankBy(n){
  var list = document.querySelectorAll('.ranked-list')
    for(var i = 0; i < list.length; i++){
      list[i].innerHTML = parseInt(list[i].innerHTML) + n
    }

}

function deepestChild(){
  return document.querySelector('#grand-node')
}
