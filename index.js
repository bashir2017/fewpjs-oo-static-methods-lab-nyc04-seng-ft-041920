class Formatter {
  //add static methods here
  static capitalize(str){
    return `${str[0].toUpperCase()}${str.substring(1)}`
  }

  static sanitize(str){
    return str.replace( /[^A-Za-z0-9 '-]/g, '' ) //review regex 
    //didn't work => str.replace( /[/\WD/ ^'-]/g, '' )
  }

  static titleize(str){
    const finalTitle = [];
    const originalTitle = str.split(' ');
    //always capitalize first word 
    finalTitle.push(originalTitle[0].charAt(0).toUpperCase() + originalTitle[0].slice(1))
    originalTitle.shift();

    //capitalize other words 
    originalTitle.forEach(word => {
      //a, an, but, of, and, for, at, by, and from
      if(word == 'a' || word == 'an' || word == 'but' || word == 'of' || word == 'and' ||word == 'for' ||  word == 'at' || word == 'by' || word == 'from' || word == 'the'){
        finalTitle.push(word)
      } else {
        finalTitle.push(word.charAt(0).toUpperCase() + word.slice(1))
      }
    })
    
    //conver array of words to string 
    return finalTitle.join(' ')
  }
}