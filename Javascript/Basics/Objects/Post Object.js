// Constructor function for Post object
function Post(title, author, body){
    this.title = title;
    this.author = author;
    this.body = body;
    this.comments = [];
    this.views = 0;
    this.isLive = false;
}
