var grandparent=document.querySelector('#grandparent')
var parent=document.querySelector('#parent')
var grandchild=document.querySelector('#child')
grandparent.addEventListener('click',()=>console.log('grandparent click!'))
parent.addEventListener('click',()=>console.log('parent click!'))
grandchild.addEventListener('click',()=>console.log('child click!'))