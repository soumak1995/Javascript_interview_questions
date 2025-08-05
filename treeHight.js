function getHeight(tree) {
    let maxHeight = 0;
    
    if (!tree) {
      return maxHeight;
    }
      
    for (let chid of tree.children) {
      maxHeight = Math.max(maxHeight, getHeight(chid)); 
    }
    return maxHeight + 1;
  }
  